import React, { Component } from 'react';
import './assets/css/dist/tailwind.css';
import Register from './ppe_training/Account/Register';
import Login from './ppe_training/Account/Login';
import ForgotPassword from './ppe_training/Account/ForgotPassword';
import Home from './ppe_training/Account/Home';
import CreatePost from './ppe_training/posts/CreatePost';
import ListPost from './ppe_training/posts/ListPost';
import EditPost from './ppe_training/posts/EditPost';
import Alert from './ppe_training/Account/Alert'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter
} from 'react-router-dom';
import AllPost from './ppe_training/posts/AllPost';
class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <>
       <Router>
        <Switch>
          <Route exact path= {'/'} component= {Home} />
          <Route path= {'/register'} component= {Register} />
          <Route path= {'/forgotPassword'} component= {ForgotPassword} />
          <Route path= {'/createpost'} component= {CreatePost} />
          <Route path= {'/listpost'} component= {ListPost} />
          <Route path= {'/editpost/:post_id'} component= {EditPost} />
          <Route path= {'/allpost'} component= {AllPost} />
          <Route path= {'/login'} component= {Login} />
        </Switch>
     </Router>
      </>
    )
  }
}

export default App;
