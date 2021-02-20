const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('./controllers.js');

const app = express();

app.use(express.json());
app.use('/player/:id', express.static(__dirname + '/../PlayerProfile/react-client/dist'));
app.use('/team/:id', express.static(__dirname + '/../TeamProfile/react-client/dist'));
app.use('/tournament/:id', express.static(__dirname + '/../TournamentProfile/react-client/dist'));

// Teams
app.get('/team/:id', controllers.getTeam);
app.post('/team', controllers.addTeam);
// Athletes
app.get('/athlete/:id', controllers.getAthlete);
app.post('/athlete', controllers.addAthlete);
// Tournaments
app.get('/tournament/:id', controllers.getTournament);
app.post('/tournament', controllers.addTournament);
// Messages
app.post('/messages', controllers.addMessage);
app.get('/messages', controllers.getMessages)

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

