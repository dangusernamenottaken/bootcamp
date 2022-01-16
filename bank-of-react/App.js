import React, { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/Login';
function App(){

  /*constructor() {
    super();

    this.state = {
      accountBalance: 14568.27,
      currentUser: {
        userName: 'bob_loblaw',
        memberSince: '08/23/99',
    }*/
    const [accountBalance, setAccountBalance] = useState( 14568.27)
    const [currentUser,setUser] = useState({ userName: 'bob_loblaw',
    memberSince: '08/23/99'})

    const mockLogIn = (logInInfo) => {
      const newUser = {...currentUser}
      newUser.userName = logInInfo.userName
      setUser(newUser)
    }
 
    
   
   
  

  
    
    return (
      <BrowserRouter>
        <Routes>
           <Route path="/login" element={<LogIn user={currentUser} mockLogIn={mockLogIn}/>}/>
            <Route  path="/" element={<Home accountBalance={accountBalance}/>}/>
             <Route path="/userProfile" element={<UserProfile userName={currentUser.userName} memberSince={currentUser.memberSince}  />}/>
            
        </Routes>
        </BrowserRouter>
    );
  }


export default App;



/*import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
function App() {
  return (
 <div className = "App">
   <BrowserRouter>
   
   <Nav>
   </Nav>
<Routes>
<Route path="*" element = {<NotFound/>} />
</Routes>
  
   
   </BrowserRouter>
    </div>
  );
}

export default App;
*/
