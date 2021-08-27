import './App.css';

import { Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Useful from './components/Useful/Useful';
import Bubble from './components/bubble/bubble';
import Requests from './components/requests/requests';
import Projects from './components/projects/projects';
import About from './components/About';
import Footer from './components/footer/footer';

import WebDevPage from './components/webDevPage/webDevPage';
import DataAnalysisPage from './components/dataAnalysisPage/dataAnalysisPage';
import DataSciencePage from './components/dataSciencePage/dataSciencePage';

function App() {
  return (
    <div className="app">

      <Switch>
        <Route path="/" exact>
          <Header />
          <Useful />
          <Requests />
          <Bubble />
          <About />
          <Projects />
        </Route>
        <Route path="/webdev" component={WebDevPage} exact />
        <Route path="/dataanalysis" component={DataAnalysisPage} exact /> 
        <Route path="/datascience" component={DataSciencePage} exact />
        
        {/* <Route path="/webdev">
          <WebDevPage />
        </Route> */}

        <Route path="/data-analysis">

        </Route>
        <Route path="/data-science">

        </Route>


      </Switch>

      <Footer />
    </div>
  );
}

export default App;
