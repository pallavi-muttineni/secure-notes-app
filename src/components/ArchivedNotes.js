import React, { useEffect, useState } from 'react';
import { getAllNotes } from '../utils/db';
import { decryptNote } from '../utils/cryptoUtils';

function ArchivedNotes({ onBack }) {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const loadArchivedNotes = async () => {
      const allNotes = await getAllNotes();
      const archived = allNotes.filter(note => note.archived);
      setNotes(archived);
    };

    loadArchivedNotes();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>📦 Archived Notes</h2>
      <button onClick={onBack}>← Back</button>
      <ul>
        {notes.map(note => (
          <li key={note.id} style={{ marginTop: '10px' }}>
            <strong>{new Date(note.createdAt).toLocaleString()}</strong><br />
            <span>{decryptNote(note.content)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ArchivedNotes;