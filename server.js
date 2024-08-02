const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const controllers = require('./controllers');
const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
<<<<<<< HEAD


// Import Models
const models = require('./models');


=======
>>>>>>> cfe0e4d9f3976288e89884219d8a0d0026eceb8b
const app = express();
const PORT = process.env.PORT || 3001;

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });

// Configure sessions
const sess = {
  secret: process.env.SESSION_SECRET,
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

// Use sessions
app.use(session(sess));

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Use routes
app.use(controllers);

// Sync database and start the server
const syncDB = async () => {
  try {
    await sequelize.sync({ force: true }); // Set force to true for initial sync, use alter for updates
    app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
  } catch (err) {
    console.error('Error connecting to the database:', err);
    process.exit(1);
  }
};

syncDB();
