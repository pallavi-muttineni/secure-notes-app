import React, { useState } from 'react';
import { decryptNote, encryptNote } from '../utils/cryptoUtils';
import { deleteNote, updateNote } from '../utils/db';

function NoteList({ notes, onUpdate }) {
  const [editId, setEditId] = useState(null);
  const [editContent, setEditContent] = useState('');

  const handleEdit = (note) => {
    setEditId(note.id);
    setEditContent(decryptNote(note.content));
  };

  const handleSaveEdit = async (id) => {
    const encrypted = encryptNote(editContent);
    await updateNote(id, { content: encrypted });
    setEditId(null);
    setEditContent('');
    onUpdate();
  };

  return (
    <div>
      {notes.map(note => (
        <div key={note.id} style={{
          border: '1px solid gray',
          padding: '10px',
          marginBottom: '10px',
          backgroundColor: note.pinned ? '#ffffe0' : '#fff'
        }}>
          {editId === note.id ? (
            <>
              <textarea
                rows={3}
                value={editContent}
                onChange={(e) => setEditContent(e.target.value)}
              />
              <br />
              <button onClick={() => handleSaveEdit(note.id)}>Save</button>
              <button onClick={() => setEditId(null)}>Cancel</button>
            </>
          ) : (
            <>
              <p><strong>{decryptNote(note.content)}</strong></p>
              <small>Created: {new Date(note.createdAt).toLocaleString()}</small><br />
              <button onClick={() => handleEdit(note)}>Edit</button>
              <button onClick={() => { deleteNote(note.id); onUpdate(); }}>Delete</button>
              <button onClick={() => { updateNote(note.id, { pinned: !note.pinned }); onUpdate(); }}>
                {note.pinned ? 'Unpin' : 'Pin'}
              </button>
              <button onClick={() => { updateNote(note.id, { archived: !note.archived }); onUpdate(); }}>
                {note.archived ? 'Unarchive' : 'Archive'}
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default NoteList;