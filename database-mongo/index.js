var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/athletes', { useNewUrlParser: true });

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var MessageSchema = mongoose.Schema({
  dateMessaged: Date,
  message: String
});

var Message = mongoose.model('Message', MessageSchema);

var AthleteSchema = mongoose.Schema({
  name: String,
  age: Number,
  city: String,
  state: String,
  sport: String,
  teamName: String,
  teamId: String,
  // posts: [PostSchema]
});

var Athlete = mongoose.model('Athlete', AthleteSchema);

var TeamSchema = mongoose.Schema({
  name: String,
  players: [AthleteSchema],
  // posts: [PostSchema]
});

var Team = mongoose.model('Team', TeamSchema);

var TournamentSchema = mongoose.Schema({
  name: String,
  teams: [TeamSchema],
  // posts: [PostSchema]
});

var Tournament = mongoose.model('Tournament', TournamentSchema);

module.exports = {
  Team, Athlete, Message, Tournament
};