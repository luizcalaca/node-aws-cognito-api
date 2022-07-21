const express = require('express');
const AuthRouter = require('./routes/AuthRoutes')
const errorHandler = require('./middlewares/errorHandler')
const app = express();

app.use(express.json());
app.use('/api', AuthRouter);

app.listen(process.env.APP_PORT, () => {
  console.log(`Running on ${process.env.APP_PORT}`);
});

module.exports = app;