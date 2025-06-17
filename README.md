# 🔐 Secure Notes App

A privacy-focused, offline-first note-taking application built with React, client-side AES encryption, and IndexedDB storage. All notes are encrypted in the browser using a master password, ensuring that only you can read your data.

---

## 🚀 Live Demo

Experience the app in action:

👉 [Secure Notes App Live Demo](http://pallavi-muttineni.github.io/secure-notes-app/) 

---

## 🛠 Features

* Offline-First: Works entirely in the browser without a backend server.
* AES Encryption: Notes are encrypted client-side using a master password.
* IndexedDB Storage:Persist notes securely in browser storage.
* Search: Quickly find notes by keyword.
* Pin & Archive: Organize notes using pin and archive actions.
* Edit & Delete: Easily update or remove your notes.

---

## ⚙ Technologies Used

* [React](https://reactjs.org/)
* [CryptoJS](https://www.npmjs.com/package/crypto-js)
* [idb (IndexedDB)](https://www.npmjs.com/package/idb)
* [gh-pages](https://www.npmjs.com/package/gh-pages) for deployment

---

## 📁 Project Structure


secure-notes-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── ArchivedNotes.js
│   │   ├── NoteEditor.js
│   │   ├── NoteList.js
│   │   ├── PasswordPrompt.js
│   │   └── SearchBar.js
│   ├── utils/
│   │   ├── cryptoUtils.js
│   │   └── db.js
│   ├── App.js
│   └── index.js
├── .gitignore
├── package.json
└── README.md


---

## 💻 Installation & Development

1. *Clone the repository*

   bash
   git clone https://github.com/pallavi-muttineni/secure-notes-app.git
   cd secure-notes-app
   

2. *Install dependencies*

   bash
   npm install
   

3. *Run the development server*

   bash
   npm start
   

4. *Open in browser*
   Navigate to http://localhost:3000 and enter your master password to start using the app.

---

## 📦 Build & Deploy

This project uses gh-pages to deploy to GitHub Pages.

1. **Ensure package.json has the correct homepage**

   json
   "homepage": "https://pallavi-muttineni.github.io/secure-notes-app",
   

2. **Install gh-pages (if not already)**

   bash
   npm install --save-dev gh-pages
   

3. *Deploy to GitHub Pages*

   bash
   npm run deploy
   

Your app will be live at the URL above.

---

## 🔐 Usage

1. On first load, enter your *master password* to unlock the app.
2. *Add notes* in the editor; they’ll be encrypted and saved.
3. *Search* notes, *pin* important ones, or *archive* old notes.
4. *Edit* or *delete* notes as needed.

---

