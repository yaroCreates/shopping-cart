import React from "react"
import Jerseystore from "../../../images/jerserystore.svg"


function Signup(){
    return(
        <div className='signup'>
            <div className="left">
                <div className="heading">
                    <img src={Jerseystore} alt="Jerseystore"/>
                </div>
            </div>
            <div className="right"></div>
        </div>
    )
}

export default Signup