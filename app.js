const express = require('express');
const multer = require('multer');
const app = express();
const path = require('path');
const upload = multer();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', './views');

const arrayBlogs = [];
app.get('/', (req, res) => {
    res.render('blog');
});

app.post('/createBlog', upload.none(), (req, res) => {
    if (req.body.title && req.body.content) {
        const blog = {
            title: req.body.title,
            content: req.body.content
        };
        arrayBlogs.push(blog);
        console.log(arrayBlogs);
        res.render('view', {data: arrayBlogs});
    } else {
        res.render('error');
    }
});

app.listen(PORT, 'localhost', () => console.log(`Server is running at http://localhost:${PORT}`));