const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;
const launchesRouter = require('./routes/launches');

app.use(cors());
app.use(express.json());


app.use('/launches', launchesRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
