import {BrowserRouter, Route,Routes} from 'react-router-dom'
import Header from './Compontents/Header' 
import Home from './Compontents/Home';
import Details from './Compontents/Details';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/details/:id" caseSensitive={false} element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
