const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

const dailyQuestion = {
    question: "What comes next in the sequence: 2, 4, 8, 16, ?",
    answer: "32"
};

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.get('/api/question', (req, res) => {
    res.json({ question: dailyQuestion.question });
});

app.post('/api/answer', (req, res) => {
    const userAnswer = req.body.answer;
    const correct = userAnswer.trim() === dailyQuestion.answer;
    res.json({ correct });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
