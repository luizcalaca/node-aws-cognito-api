const express = require('express');
const AuthRouter = require('./routes/AuthRoutes')
const app = express();

app.use(express.json());
app.use('/api', AuthRouter);

app.listen(process.env.PORT, () => {
  console.log(`Running on ${process.env.PORT}`);
});

module.exports = app;