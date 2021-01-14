const express = require('express');

const routes = require('./routes');
const { ValidationError, NotFoundError } = require('./lib/errors');

const app = express();

app.use(express.json({ limit: '100mb' }));
app.use('/', routes);
console.log('server executes')
app.use('/', (err, req, res, next) => {
  console.log('server executes in')
  // default to 500 internal server error unless we've defined a specific error
  let code = 500;
  if (err instanceof ValidationError) {
    code = 400;
  }
  if (err instanceof NotFoundError) {
    code = 404;
  }
  res.status(code).json({
    message: err.message,
  });
});

let server = app.listen(4002, () => {    
  console.log(`Server running on port 4002`)
});

module.exports = app;
