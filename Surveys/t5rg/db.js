const sqlite3 = require('sqlite3').verbose();

// إنشاء أو فتح قاعدة البيانات
const db = new sqlite3.Database('./school.db', (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to the SQLite database.');
  }
});

// إنشاء جدول إذا لم يكن موجودًا
db.run(`
  CREATE TABLE IF NOT EXISTS responses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    class TEXT NOT NULL,
    q1 TEXT NOT NULL,
    q2 TEXT NOT NULL,
    q3 TEXT NOT NULL,
    q4 TEXT NOT NULL,
    q5 TEXT NOT NULL
  )
`, (err) => {
  if (err) {
    console.error('Error creating table:', err.message);
  } else {
    console.log('Table is ready.');
  }
});

module.exports = db;
