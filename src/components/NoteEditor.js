import React, { useState } from 'react';
import { encryptNote } from '../utils/cryptoUtils';
import { saveNote } from '../utils/db';

function NoteEditor({ onSave }) {
  const [content, setContent] = useState('');

  const handleSave = async () => {
    const encrypted = encryptNote(content);
    await saveNote({ content: encrypted, pinned: false, archived: false });
    setContent('');
    onSave();
  };

  return (
    <div>
      <textarea value={content} onChange={e => setContent(e.target.value)} />
      <button onClick={handleSave}>Save Note</button>
    </div>
  );
}

export default NoteEditor;