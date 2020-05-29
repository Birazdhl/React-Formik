import React from 'react';
import logo from './logo.svg';
import './App.css';
import YoutubeForm from './Components/1.SimpleForm/YoutubeForm';
import OldYoutubeForm from './Components/1.SimpleForm/OldYoutubeForm';
import UseOldYoutubeForm from './Components/1.SimpleForm/UseFormikOldYoutubeForm';

function App() {
  return (
    <div className="App">
        <UseOldYoutubeForm />
    </div>
  );
}

export default App;
