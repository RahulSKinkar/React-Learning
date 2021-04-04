import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './styles/style.css'

import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import SidebarComponent from './components/SidebarComponent'

import HomeComponent from './containers/HomeComponent'
import AboutComponent from './containers/AboutComponent'
import ShopComponent from './containers/ShopComponent'
import SigninComponent from './containers/SignIn'
import ErrorComponent from './containers/ErrorComponent'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderComponent />

        <main className='app-main'>
          <SidebarComponent />
          <div className='page-content'>
            <Switch>
              <Route path="/" component={HomeComponent} exact/>
              <Route path="/about" component={AboutComponent} />
              <Route path="/shop" component={ShopComponent} />
              <Route path="/signin" component={SigninComponent} />
              <Route component={ErrorComponent} />
            </Switch>
          </div>
        </main>

        <FooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
