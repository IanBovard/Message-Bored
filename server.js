/* jshint esversion:6*/
const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 9999;
const routes = require('./routes');

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');

const RedisStore = require('connect-redis')(session);
const saltRounds = 10;
const bcrypt = require('bcrypt');

let db = require('./models');
let Users = db.users;

const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());


app.use(session({
  store: new RedisStore(),
  secret: 'keyboard cat',
  resave: false,
  saveUnititalized: false
}));

passport.use(new LocalStrategy (
  function(username, password, done) {
    Users.findOne({ where: { username: username } })
    .then ( user => {
      if (user === null) {
        return done(null, false, {message: 'bad username or password'});
      }
      else {
        bcrypt.compare(password, user.password)
        .then(res => {
          if (res) { return done(null, user); }
          else {
            return done(null, false, {message: 'bad username or password'});
          }
        });
      }
    })
    .catch(err => { console.log('error: ', err.mesage); });
  }
  ));

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, cb) => {
  console.log('serializing');
  return cb(null, user.id);
});

passport.deserializeUser((userId, cb) => {
  console.log('deserializing');
  Users.findById(userId).then(user =>{
    return cb(null, user);
  });
});

app.use('/api', routes);

app.get('*', (req, res) => {
  res.sendFile('./public/index.html', { root: __dirname});
});
app.listen(PORT, (err) => {
  console.log(`server listening on port: ${PORT}`);
});




