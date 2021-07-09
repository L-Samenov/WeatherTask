import React from 'react';
import Layout from './components/Layout/Layout';
import { Route, Switch } from 'react-router-dom';
import WeatherList from './components/WeatherList/WeatherList';
import HourList from './components/HourList/HourList';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {

  const routes = (
    <Switch>
      <Route path="/:date" component={ HourList } />
      <Route path="/" component={ WeatherList } />
    </Switch>
);
    return (
      <div>
        <Layout>
          { routes }
        </Layout>
      </div>
    );
  }

export default App ;
