const express = require('express');

const PORT = process.env.PORT || 3003;
const app = express();

// middleware (express)
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        message: 'Testing'
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});