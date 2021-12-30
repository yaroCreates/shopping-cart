import React from "react"
import Jerseystore from "../../../images/jerserystore.svg"


function Signup(){
    return(
        <div className='signup'>
            <div className="left">
                <div className="heading">
                    <img className="heading-logo" src={Jerseystore} alt="Jerseystore"/>
                    <h1>Sign up</h1>
                    <p>Join millions of fans around the world</p>
                    <button className="btn-signup-google">Sign up with Google</button>
                    <div className="line-border">
                        <hr/>
                        <p>or Sign up with Email</p>
                        <hr/>
                    </div>
                    <form>
                        <div className='text-section'>
                            <label>Name</label>
                            <input className="text-field" type="text" placeholder='Name'></input>
                        </div>
                        <div className='text-section'>
                            <label>Name</label>
                            <input className="text-field" type="email" placeholder="mail@website.com"></input>
                        </div>
                        <div className='text-section'>
                            <label>Email</label>
                            <input className="text-field" type="password" placeholder='Min. 8 character'></input>
                        </div>
                        <div className="checkbox-section">
                            <input type="checkbox"></input>
                            <p>I agree to the <a href="#">Terms & Conditions</a></p>
                        </div>
                        <button>Sign Up</button>
                        <p>Already have an Account? <a href="#">Sign in</a></p>
                    </form>
                </div>
            </div>
            <div className="right"></div>
        </div>
    )
}

export default Signup