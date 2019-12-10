import React, {Component} from "react";
import Insure from "../images/Insurance-icon.svg";
import Amount from "../images/amount-icon.svg";
import Claim from "../images/Claim.svg";
import Total from "../images/total-icon.svg";
import Crest from "../images/insurance-shield.svg";
import CrestClaim from "../images/insurance-claim.svg";  
import AmtCrest from "../images/amount-shield.svg";
import TotalShield from "../images/total-shield.svg";
import "../App.css";
    
const top = ({  statistics,loader }) => {
            return (
                <div className="top-container">
                 <div className="texts">
                     <p>Welcome, Lois!</p>
                     <p className="date img-responsive">Monday, July 22, 2019.</p>

                 </div>

                {loader?
                  <p>Loading Statistics............</p>
                :

                 <div className="cards row">
                 <div class="card" col-sm-3>
                    <div class="card-body">
                   <img src={Insure} alt="insure"/>
                     <p className="number">{statistics && statistics.totalInsurancesBought}</p>
                     <p className="card-text">Total Insurance Bought.</p>
                     <img className="crest img-responsive" src={Crest}   alt="insure"/>
                </div>

                
              </div>

              <div className="card" col-sm-3>
                    <div className="card-body">
                    <img src={Amount} alt="amount"/>
                     <p className="number"> ₦{statistics && statistics.totalInsuranceAmount}</p>
                     <p className="card-text">Total Amount of Insurance .</p>
                     <img className="crest img-responsive" src={AmtCrest}   alt="amount"/>
                </div>

                
              </div>

              <div className="card" col-sm-3>
                    <div className="card-body">
                    <img src={Claim} alt="claim"/>
                   <p className="number">{statistics && statistics.totalClaimsAmount}</p>
                     <p className="card-text">Total Insurance Claims .</p>
                     <img className="crest img-responsive" src={CrestClaim}   alt="claim"/>
                 
                </div>

                
              </div>


              <div className="card" col-sm-3>
                    <div className="card-body">
                    <img src={Total} alt="total"/>
            <p className="number"> {statistics && statistics.totalInsuranceClaims}</p>
                     
                     <p className="card-text"> Total Amount of Claims .</p>
                     <img className="crest img-responsive" src={TotalShield} alt="total"/>
                   
                </div>

                
              </div>
              </div>
                }


                </div>
            );
        }
    
    
    export default top;