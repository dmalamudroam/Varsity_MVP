const models = require('../database-mongo');
const { Team, Athlete, Message, Tournament } = models;

// Athletes
const findAthlete = (id, callback) => {
  Athlete.findById(id, (err, athlete) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, athlete);
    }
  });
};

const saveAthlete = (athlete, callback) => {
  const newAthlete = new Athlete(athlete);
  newAthlete.save((err, athlete) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, athlete);
    }
  });
};

// Tournaments
const findTournament = (id, callback) => {
  Tournament.findById(id, (err, tournament) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, tournament);
    }
  });
};

const saveTournament = (tournament, callback) => {
  const newTournament = new Tournament(tournament);
  newTournament.save((err, tournament) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, tournament);
    }
  });
};

//Teams
const findTeam = (id, callback) => {
  Team.findById(id, (err, team) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, team);
    }
  });
};

const saveTeam = (team, callback) => {
  const newTeam = new Team(team);
  newTeam.save((err, team) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, team);
    }
  });
};

//Messages
const saveMessage = (message, callback) => {
  const newMessage = new Message(message);
  newMessage.save((err, message) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, message);
    }
  });
};

const findAll = (callback) => {
  Message.find({}, (err, messages) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, messages);
    }
  });
};

module.exports = {
  findTeam, saveTeam, findAthlete, saveAthlete, findTournament, saveTournament, saveMessage, findAll
};