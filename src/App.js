import React, { useEffect } from 'react';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import { auth } from './firebase/util';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {connect} from 'react-redux';
import { setUser, clearUser, setLoading } from './redux/user/userAction';
import ChatUi from './components/ChatUI/ChatUi';


function App({userState, setUser, clearUser, setLoading}) {

  useEffect(() => {
    setLoading(true);
    
    auth.onAuthStateChanged(user => {
      if(user){
        setUser(user);
      } else{
        clearUser();
      }
    })
  }, [])

  return (
    <div className="App">
      <Router>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path='/'>
            {
              !userState.loading
              ? userState.currentUser
                ? <ChatUi currentUser={userState.currentUser} currentUser={clearUser}/>
                : <Login />
              : "Loading"
            }
          </Route>
          <Route exact path='/group/:groupId'>
          {
              !userState.loading
              ? userState.currentUser
                ?<ChatUi currentUser={userState.currentUser}/>
                : <Login />
              : "Loading"
            }
          </Route>
      </Router>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    userState: state.user,
  }
}

const mapDispatchToProps = dispatch => {
  return {
      setUser: (user) => dispatch(setUser(user)),
      clearUser: () => {dispatch(clearUser())},
      setLoading: () => {dispatch(setLoading())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
