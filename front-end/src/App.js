import React, { Component } from 'react';
import io from 'socket.io-client';
import './App.css';

const socket = io('http://localhost:8000');
socket.on('connect', () => {
  socket.emit('connection', {data: "HELLOOOOO"});
  socket.on('connection', (res) => {
    console.log(res);
  })
});

try {
  fetch('http://localhost:8000/api/sessions').then((res) => {
    return res.json();
  }).then((data) => {
    console.log(data);
  });
}
catch(err) {
  console.log(err);
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>Hello</p>
      </div>
    );
  }
}

export default App;
