const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('DevSecOps Workshop Working! - By M. Zaim Khan'));
app.listen(3000, () => console.log('Running on port 3000'));
