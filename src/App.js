import React, { useEffect, useState } from 'react';
import NoteEditor from './components/NoteEditor';
import NoteList from './components/NoteList';
import SearchBar from './components/SearchBar';
import ArchivedNotes from './components/ArchivedNotes';
import { getAllNotes } from './utils/db';

function App() {
  const [notes, setNotes] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [viewArchived, setViewArchived] = useState(false);

  const loadNotes = async () => {
    const allNotes = await getAllNotes();
    const filtered = allNotes
      .filter(note => !note.archived)
      .sort((a, b) => b.pinned - a.pinned || new Date(b.createdAt) - new Date(a.createdAt));
    setNotes(filtered);
  };

  useEffect(() => {
    loadNotes();
  }, []);

  const filteredNotes = notes.filter(note =>
    note.content.toLowerCase().includes(searchText.toLowerCase())
  );

  if (viewArchived) {
    return <ArchivedNotes onBack={() => {
      setViewArchived(false);
      loadNotes();
    }} />;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>🔐 Secure Notes</h1>
      <SearchBar searchText={searchText} setSearchText={setSearchText} />
      <NoteEditor onSave={loadNotes} />
      <button onClick={() => setViewArchived(true)}>View Archived</button>
      <NoteList notes={filteredNotes} onUpdate={loadNotes} />
    </div>
  );
}

export default App;