import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import store from './store';
import Alert from './components/layout/Alert';
import setAuthToken from './utils/setAuthToken';
import { loadUser } from './actions/auth';
import Dashboard from './components/dashboard/Dashboard';
import PrivateRoute from './components/routing/PrivateRoute';
import AddExperience from './components/profile-forms/AddExperience';
import AddEducation from './components/profile-forms/AddEducation'
import Profiles from './components/profiles/Profiles'
import Profile from './components/profile/Profile'
import ProfileForm from './components/profile-forms/ProfileForm';
import EditProfile from './components/profile-forms/EditProfile';
import Posts from './components/posts/Posts'

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <>
          <Navbar />
          <Alert />
          <Route exact path='/' component={Landing} />
          <section className='container'>
            <Alert />
            <Switch>
              <Route path='/register' component={Register} />
              <Route path='/login' component={Login} />
              <Route path='/profiles' component={Profiles} />
              <Route path='/profile/:id' component={Profile} />
              <PrivateRoute path='/dashboard' component={Dashboard} />
              <PrivateRoute path='/create-profile' component={ProfileForm} />
              <PrivateRoute path='/edit-profile' component={EditProfile} />
              <PrivateRoute path='/add-education' component={AddEducation} />
              <PrivateRoute path='/add-experience' component={AddExperience} />
              <PrivateRoute path='/posts' component={Posts} />
            </Switch>
          </section>
        </>
      </Router>
    </Provider>
  );
};

export default App;
