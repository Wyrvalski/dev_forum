import React, { useEffect } from 'react';
import './css/reset.css';
import './css/normalize.css'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navbar from './components/layout/navbar';
import Landing from './components/layout/landing';
import Register from './components/auth/register';
import Login from './components/auth/login';
import store from './store';
import Alert from './components/layout/alert';
import setAuthToken from './utils/setAuthToken';
import { loadUser } from './actions/auth';
import Dashboard from './components/dashboard/dashboard';
import PrivateRoute from './components/routing/PrivateRoute';
import AddExperience from './components/profile-forms/add_experience';
import AddEducation from './components/profile-forms/add_education'
import Profiles from './components/profiles/profile'
import Profile from './components/profile/profile'
import ProfileForm from './components/profile-forms/profile_form';
import EditProfile from './components/profile-forms/edit_profile';
import Posts from './components/posts/posts'
import Post from './components/post/post'

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
            <Switch>
              <Route exact path='/register' component={Register} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/profiles' component={Profiles} />
              <Route exact path='/profile/:id' component={Profile} />
              <PrivateRoute exact path='/dashboard' component={Dashboard} />
              <PrivateRoute exact path='/create-profile' component={ProfileForm} />
              <PrivateRoute exact path='/edit-profile' component={EditProfile} />
              <PrivateRoute exact path='/add-education' component={AddEducation} />
              <PrivateRoute exact path='/add-experience' component={AddExperience} />
              <PrivateRoute exact path='/posts' component={Posts} />
              <PrivateRoute exact path='/posts/:id' component={Post} />
            </Switch>
          </section>
        </>
      </Router>
    </Provider>
  );
};

export default App;
