import React from 'react';
import './App.css';
import Posts from './components/Post'
import CreatePost from './components/CreatePost';
import {Provider} from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CreatePost/>
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
