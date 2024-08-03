const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sequelize = require('./config/connection');
const configureSession = require('./config/middleware');
const controllers = require('./controllers');
const helpers = require('./utils/helpers');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Use the session middleware
app.use(configureSession());

// Use routes
app.use(controllers);

// Sync database and start the server
const syncDB = async () => {
  try {
    await sequelize.sync({ force: false });
    app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
  } catch (err) {
    console.error('Error connecting to the database:', err);
    process.exit(1);
  }
};

syncDB();

