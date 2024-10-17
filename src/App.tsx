import { Provider } from 'react-redux';
import store from './store';
import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchUsers from './pages/SearchUsers';
import User from './pages/User';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<SearchUsers />} />
          <Route path="/user/:username" element={<User />} />
        </Routes>
      </div>
    </Router>
  );
}

function AppWithProviders() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default AppWithProviders;
