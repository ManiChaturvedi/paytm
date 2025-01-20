const express = require('express');
const rootrouter = require('./routes/index.js');
const cors=require('cors');
const app = express();
const PORT = 8000;

app.use(cors());
app.use("/api/v1",rootrouter);
app.use(express.json());

app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});
