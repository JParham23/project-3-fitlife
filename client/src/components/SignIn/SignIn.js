import React, { Component } from "react";
import "./SignIn.css";

export default class SignIn extends Component {
    state = {

    }

    render() {
        return (
            <div>
            {/* //     <div className="signInContainer">
            //     <form id='form' align="center">               
            //           <input className='input' type="text"   */}
            {/* //            placeholder="Email"/>           */}
            {/* //           <input className='input' type="password"  */}
            {/* //            placeholder="Password"/>
            //           <button id='submit'>Sign In</button>
            //       </form> */}
            {/* //       </div> */}
            
            <h4 className="signInHeader">Enter Your Credentials Below to Sign In!</h4>
            <div className="signInContainer">
                <form>
                    <div className="form-group">
                        <label className="signIn" for="exampleInputEmail1">Email address</label>
                        <input className="emailInput" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label class="form-check-label" for="exampleCheck1">Remember Me!</label>
                            </div>
                                <button type="submit" class="btn btn-warning">Sign In</button>
                </form>
            </div>
            </div>
                )
            }
        }