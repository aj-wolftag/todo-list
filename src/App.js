import React, {useState} from 'react';
import HomePage from './components/HomePage';
import LoginForm from './components/LoginForm';

function App() {
  const loginDetails ={userName:"admin", pw:"admin"}
  
  const [userLog, setUserLog]=useState({name:""});
  const[userLogError, setUserLogError]= useState("");
  
  const Login=details=>{
    
    if(details.name==loginDetails.userName && details.password==loginDetails.pw){
      setUserLog({
        name: details.name
      })
    }
    else{
      
      setUserLogError("detail do not match");
    }
  }
  const Logout=()=>{
    setUserLog({name:""});
    
  }

  return (
    <div className="App">
      {(userLog.name !="")?(
        <HomePage/>
        // <div className="welcome">
        //   <h2>Welcome, {userLog.name}</h2>
        //   <button onClick={Logout}>Logout</button>
        // </div>
      ):(
        <LoginForm Login={Login} error={userLogError}/>
      )
    }
    </div>
  );
}

export default App;
