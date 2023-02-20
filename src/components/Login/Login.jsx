import React, { useContext, useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ProductContext } from "../../Context";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const falseAlert = useRef(true);
    const [newUser,setNewUser] = useState(false);
    const {
        loginCredentials,
        setLoginCredentials,
        setIsLoggedIn
    } = useContext(ProductContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
      e.preventDefault();
    if(newUser) {
        setLoginCredentials(()=>[...loginCredentials,{id: email, password:password}]);
        setIsLoggedIn(true);
        setNewUser(false);
        navigate("/");
    }  
    else {
        loginCredentials && loginCredentials.every((cred)=>{
            if(cred.id == email && cred.password == password) {
                falseAlert.current = false;
               return false;
            }
            return true;
          });
          if(falseAlert.current) {
            setEmail("");
            setPassword("");
            alert("Invalid id or password!!!");
          }
          else {
            setIsLoggedIn(true);
            navigate("/");
          }
    }
    };


    return (
      <>
        <div
          className="d-flex justify-content-center align-items-center m-auto "
          style={{ height: "100vh" , width: "50%",  }}
        >
          <form
            className="form-signin card  text-center form-body p-4 w-50"
            onSubmit={handleSubmit}
          >
            <label for="inputEmail" className="sr-only">
              Email address
            </label>
            <input
              type="email"
              id="inputEmail"
              className="form-control my-2"
              placeholder="Email address"
              required=""
              autofocus=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label for="inputPassword" className="sr-only">
              Password
            </label>
            <input
              type="password"
              id="inputPassword"
              className="form-control"
              placeholder="Password"
              required=""
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <input
              className="btn btn-lg btn-primary btn-block mt-2"
              type="submit"
              value={!newUser? "Login" : "Sign-up"}
            />
              
            
            <button style={{ fontSize: "12px", marginTop: "10px", border:"none", background:"unset", textDecoration:"underline" }} 
            onClick={(e)=>{
                e.preventDefault();
                setNewUser(true);
            }}>
              Don't have an Account?
            </button>
          </form>
        </div>
      </>
    );
};
