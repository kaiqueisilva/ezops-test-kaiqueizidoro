var express = require ('express');
var app = express ();
var server = app.listen (3000, () => { 
    console.log ('servidor em execução na porta', server.address (). porta); 
    });
    app.use (express.static (__dirname));
    var bodyParser = require ('body-parser') 
app.use (bodyParser.json ()); 
app.use (bodyParser.urlencoded ({extended: false}))
app.get('/messages', (req, res) => {
    Message.find({},(err, messages)=> {
      res.send(messages);
    })
  })
  app.post('/messages', (req, res) => {
    var message = new Message(req.body);
    message.save((err) =>{
      if(err)
        sendStatus(500);
      res.sendStatus(200);
    })
  })
  var http = require('http').Server(app);
var io = require('socket.io')(http);
io.on ('conexão', () => { 
    console.log ('um usuário está conectado') 
    })
    app.post ('/ messages', (req, res) => { 
        var message = new Message (req.body); 
        message.save ((err) => { 
          if (err) 
            sendStatus (500); 
          io.emit ('mensagem', req.body);
           res.sendStatus (200); 
        }) 
      })