const express = require('express');
const app = express();
app.use(express.static(process.argv[3] || path.join(__dirname, 'public')))
.listen(Number(process.argv[2]));