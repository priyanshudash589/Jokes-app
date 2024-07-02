
import express from 'express';

const app = express();

app.get("/", (req, res) => {
  res.send("Server is ready !");
});

//routes

app.get('/api/jokes', (req,res) => {
    const jokes = [
        {
            id: 1,
            title: "Why don't scientists trust atoms?",
            content: "Because they make up everything!"
        },
        {
            id: 2,
            title: "What do you get if you cross a snowman and a vampire?",
            content: "Frostbite."
        },
        {
            id: 3,
            title: "Why did the math book look sad?",
            content: "Because it had too many problems."
        },
        {
            id: 4,
            title: "How does a penguin build its house?",
            content: "Igloos it together."
        },
        {
            id: 5,
            title: "Why don't programmers like nature?",
            content: "It has too many bugs."
        }
    ];
    res.send(jokes);
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
