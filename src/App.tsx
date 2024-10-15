import { Provider } from 'react-redux';
import store from './store';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Main } from './pages/Main';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/user/:userId" element={<>/user/:userId</>} />
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
