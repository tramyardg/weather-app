const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/api', (req, res) => {
    res.send({ message: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

// app.use(express.static(__dirname)); //here is important thing - no static directory, because all static :)

// app.get("/*", function(req, res) {
//   res.sendFile(path.join(__dirname, "index.html"));
// });

module.exports = app;