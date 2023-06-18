import React, { useState} from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { registrationThunk } from "../services/auth-thunks";

function RegisterScreen() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const register = async () => {
        console.log(firstName, lastName, username, password);
        if (firstName != "" && username != "" &&  password != ""){
            try{
                const result = await dispatch(registrationThunk({firstName, lastName, username, password}));
                console.log(result);
                if("error" in result){
                    navigate("/tuiter/register");
                    alert("unable to register");
                } else {
                    navigate("/tuiter/profile");
                }
                
            } catch (e) {
                alert(e);
            }
        }
    };
    return (
        <div className="row">
            <h1>Register</h1>

                <div className="mt-2">
                    <label>First Name</label>
                    <input className="form-control" id="1" type="text" value={firstName}
                        onChange={(event) => setFirstName(event.target.value)} />
                </div>
                <div className="mt-2">
                    <label>Last Name</label>
                    <input className="form-control" id="2" type="text" value={lastName}
                        onChange={(event) => setLastName(event.target.value)} />
                </div>
                <div className="mt-2">
                    <label>username</label>
                    <input className="form-control" id="3" type="text" value={username}
                        onChange={(event) => setUserName(event.target.value)} />
                </div>
                <div className="mt-2">
                    <label>Password</label>
                    <input className="form-control" id="4" type="text" value={password}
                        onChange={(event) => setPassword(event.target.value)} />
                </div>
            
            <button className="btn btn-primary mt-2" onClick={register}>Register  </button>
        </div>
    )
}

export default RegisterScreen;