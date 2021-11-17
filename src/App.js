import {BrowserRouter as Router,Switch,Route,Link,useHistory} from "react-router-dom"
import {useState,useEffect} from 'react'
import Login from './components/login'
import Signup from './components/signup'
import dataService from './services/goal_tracker_axios'
import UserGoals from './components/usergoals'
import AddGoal  from "./components/addgoal"
import CompletedGoals from "./components/completedgoals"
import './App.css'
function App() {
  const [user,setUser] = useState(null)
  const login = (user=null)=>{
    setUser(user)
    localStorage.setItem('user',user)
  }
  const logout = (e)=>{
    setUser(null)
    localStorage.clear();
  }
  return (
    
    <div className="App">
      {console.log('user = ',{user})}
      <div className = 'sile'>
      <Router>
        <Link to = {'/signup'} className= 'link'> Signup</Link>
        {console.log('local user: ',localStorage.user)}
        {user?(<button onClick = {logout}>Logout</button>):(<Link to = {'/login'} className = 'link'>Login</Link>)}

        <Switch>
          <Route path = '/signup' component = {Signup}/>
          <Route path = '/login' render = {(props)=>(
            <Login {...props} login = {login}/>
          )}/>
          <Route path = '/userGoals' render = {(props)=>(
            <UserGoals {...props} user = {props.user} />
          )} />
          
          <Route path = '/completedgoals' component = {CompletedGoals}/>
          
        </Switch>
      </Router>
      </div>
      {/* load goal here */}
     
    </div> 
  );
}

export default App;
