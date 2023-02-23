import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'



const Welcome = () => {

  const VerifyEmailId = () => {
    let token = localStorage.getItem("token");
    fetch('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyDh86gDOATmnQKrj5jnVFM7Ck9PbeaR0W0',{
      method:"POST",
      body:JSON.stringify({
        requestType:"VERIFY_EMAIL",
        idToken:token,
      }),
      headers:{
        'Content-Type':'application/json'
      }
    }).then((res)=>{
      if(res.ok){
          return res.json();
      }else{
          return res.json().then((data)=>{
              if(data && data.error && data.error.message){
                  let errMessage = "Authentication Failed, " + data.error.message;
                  throw new Error(errMessage);
              }
          })
      }
  }).then((data)=>{
    console.log(data);
  }).catch((err)=>{
    alert(err.message);
  })
  }

  return (
    <div>
      Welcome to Expense Tracker
    <p style={{textAlign:'right'}}>
    Your profile is incomplete 
    <Link to='completeprofile'><span>Complete now</span></Link>
    </p>  
    <hr/>
    <Button variant="success" onClick={VerifyEmailId}>Verify Email </Button>
    </div>
  )
}

export default Welcome;
