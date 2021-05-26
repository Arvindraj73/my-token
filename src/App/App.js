import './App.css';
import MTKComponent from '../pages/MYKComponent/MTKComponent'
import NFTComponent from '../pages/NFTComponent/NFTComponent'
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/home">My Token</a>
            {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button> */}
            <div id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/home">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/mtk">MTK Token</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/nft">NFT Token</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className='container-fluid'>
          <Switch>
            <Route path="/mtk">
              <MTKComponent />
            </Route>
            <Route path="/nft">
              <NFTComponent />
            </Route>
          </Switch>
        </div>
      </div >
    </BrowserRouter>
  );
}

export default App;
