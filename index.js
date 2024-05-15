const http = require('http');

const PORT = 3000;

const server = http.createServer();

const friends = [
    {
        id: 0,
        name: 'James',
        age: 25,
        hobbies: ['music', 'coding', 'gaming'],
    },
    {
        id: 1,
        name: 'Jane',
        age: 23,
        hobbies: ['music', 'coding', 'gaming'],
    },
    {
        id: 2,
        name: 'John',
        age: 22,
        hobbies: ['music', 'coding', 'gaming'],
    },
];

server.on('request', (req, res) => {
    const items = req.url.split('/');

    if (items[1] === 'friends') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        if (items.length === 3) {
            const friendIndex = Number(items[2]);
            res.end(JSON.stringify(friends[friendIndex]));
        } else {
            res.end(JSON.stringify(friends));
        }
    } else if (items[1] === 'messages') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<body>');
        res.write('<ul>');
        res.write('<li>Hello James!</li>');
        res.write('<li>What are your thoughts on astronomy?</li>');
        res.write('</ul>');
        res.write('</body>');
        res.write('</html>');
        res.end();
    } else {
        res.statusCode = 404;
        res.end();
    }
});

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
