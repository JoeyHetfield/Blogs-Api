require('express-async-errors');
const express = require('express');
const router = require('./router');
const handleError = require('./middlewares/handleError');

// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());
app.use(router);
app.use(handleError);

// ...

// ..
// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
