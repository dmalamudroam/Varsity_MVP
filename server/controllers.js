const models = require('./models.js');

// Teams
const getTeam = (req, res) => {
  const { id } = req.params;
  models.findTeam(id, (err, team) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(team);
    }
  })
};

const addTeam = (req, res) => {
  console.log(req);
  const { body } = req;
  models.saveTeam(body, (err, team) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(team);
    }
  })
};

// Athletes
const getAthlete = (req, res) => {
  const { id } = req.params;
  models.findAthlete(id, (err, athlete) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(athlete);
    }
  })
};

const addAthlete = (req, res) => {
  const { body } = req;
  models.saveAthlete(body, (err, athlete) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(athlete);
    }
  })
};

// Tournaments
const getTournament = (req, res) => {
  const { id } = req.params;
  models.findTournament(id, (err, tournament) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(tournament);
    }
  })
};

const addTournament = (req, res) => {
  console.log(req);
  const { body } = req;
  models.saveTournament(body, (err, tournament) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(tournament);
    }
  })
};

// Posts
const getMessages = (req, res) => {
  models.findAll((err, messages) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(messages);
    }
  })
};

const addMessage = (req, res) => {
  const { body } = req;
  models.saveMessage(body, (err, message) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(message);
    }
  })
};

module.exports = {
  getTeam, addTeam, getAthlete, addAthlete, getTournament, addTournament, addMessage, getMessages
};