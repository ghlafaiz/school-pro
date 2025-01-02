const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');

const app = express();
const port = 8080;


// تقديم الملفات الثابتة من المجلد الحالي
app.use(express.static(__dirname));

// استخدام body-parser لتحليل البيانات
app.use(bodyParser.json());

// نقطة النهاية لاستقبال البيانات من الاستبيان
app.post('/submit', (req, res) => {
    const { name, class: className, q1, q2, q3, q4, q5 } = req.body;

    db.run(
        "INSERT INTO responses (name, class, q1, q2, q3, q4, q5) VALUES (?, ?, ?, ?, ?, ?, ?)",
        [name, className, q1, q2, q3, q4, q5],
        (err) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            res.status(200).json({ message: 'تم إرسال الاستبيان بنجاح!' });
        }
    );
});

// تحديد مسار صفحة البداية
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// تشغيل الخادم
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
