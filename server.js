const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const models = [
  {
    id: 1,
    name: 'น้ำหนึ่ง',
    gender: 'หญิง',
    age: 22,
    image: 'https://i.pinimg.com/originals/10/ff/2f/10ff2fc7c2c8a34491c1b7a3a401f3f4.jpg'
  },
  {
    id: 2,
    name: 'เจ',
    gender: 'ชาย',
    age: 25,
    image: 'https://i.pinimg.com/736x/c3/18/4e/c3184eef6e7e50e00e4b9d6cef01abc2.jpg'
  },
  {
    id: 3,
    name: 'เมย์',
    gender: 'หญิง',
    age: 23,
    image: 'https://i.pinimg.com/736x/f7/61/0a/f7610ad016ef228ad09ba6a8a450fc94.jpg'
  },
  {
    id: 4,
    name: 'แม็กซ์',
    gender: 'ชาย',
    age: 26,
    image: 'https://i.pinimg.com/736x/b8/d2/99/b8d2990607796b82c2f1db74d71c0c12.jpg'
  }
];

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/models', (req, res) => {
  res.json(models);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
