const express = require('express')
const helmet = require('helmet')

const { index } = require('./controllers/index.controller');

const app = express()

// add some security-related headers to the response
app.use(helmet())

// routes
app.get('*', index);

if (process.env.NODE_ENV === 'local') {
  app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running on port ${process.env.PORT || 3000}.`);
  });;
}

module.exports = app;