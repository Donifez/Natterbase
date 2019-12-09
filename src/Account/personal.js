   import React from "react";
   import Navbar from "../Dashboard/navbar";
   import "./Account.css";
   import Profile from "../images/profile-pic.svg";

   import Crest from "../images/Account-crest.svg";
   class personal extends React.Component {
        constructor(props) {
            super(props);
            this.state = {  };
        }
        render() {
            return (
         
                <div className="personal">
                    <Navbar/>
                    <div className="Acct-settings">
                     <p className="text-settings">ACCOUNT SETTINGS</p>
                    </div>
                    <div className="row">
                       
                    <div className="card card-account  col-lg-10">
                      <div className="header">
                         <img className="acct-image" src={Crest} />
                       <p className="text">PERSONAL INFORMATION</p>
                       </div>
                       <div className="card-body">
                            <p className="card-title"> Use this page to update your contact information and change your password</p>
                            <div>
                            <img  className="profile" src={Profile}/>
                            <div className="upload">
                            <a href="#">Upload a new profile image</a>
                            <p>Maximum size allowed is 600kb of PNG, JPEG ,JPG</p>
                            </div>
                            </div>
                            
                    </div>

                    <form>
                      <div className="form-row">
                       <div className="form-group col-md-4">
                           <label for="inputEmail4">Email Address</label>
                           <input type="email" className="form-control" id="inputEmail4" placeholder="amarachukwu@gmail.com"/>
                       </div>
                      </div>
                        <div className="row">
                          <div className="form-group names col-md-4">
                           <label for="inputAddress">FULL NAME</label>
                           <input type="text" className="form-control identity"  placeholder="Olatunji Joseph"/>
                          </div>

                            <div className="form-group names col-md-3">
                              <label for="inputAddress">USER NAME</label>
                                <input type="text" className="form-control identity fullname"  placeholder="Madjozi"/>
                           </div>

                           <div className="form-group names col-md-3">
                           <label for="inputAddress">BIRTHDATE</label>
                           <input type="date" className="form-control date"  placeholder="7/15/1990"/>
                           </div>
                          </div>


                          <div className=" row">
                            <div className= "col-md-3">
                              <div className="form-group">
                                <button type="button" class="btn btn-warning save">Save Changes</button>
                              </div>
                             </div>
                           </div>
                           <hr/>
  <div className="row">
  <div className="form-group names col-md-4">
    <label for="inputAddress">CURRENT PASSWORD</label>
    <input type="password" className="form-control identity"  placeholder="*********"/>
  </div>
  <div className="form-group names col-md-3">
    <label for="inputAddress">PASSWORD</label>
    <input type="password" className="form-control identity fullname"  placeholder=""/>
  </div>
  <div className="form-group names col-md-3">
    <label for="inputAddress">CONFIRM PASSWORD</label>
    <input type="password" className="form-control dates"  placeholder=""/>
  </div>
  </div>
  <div className=" row">
  <div className= "col-md-3">
  <div className="form-group">
  <button type="button" class="btn btn-warning save">Save Changes</button>
  </div>
  </div>
  </div>
</form>
                   
                  </div>
                  </div>
                  <div className="row">

                  <div class="card card-account second-card col-lg-10">
                    

                      <div className="header">
                         <img className="acct-image" src={Crest} />
                       <p className="text">CHANGE STATE OF RESIDENCE</p>
                       </div>
                       <div class="card-body">
               <h5 class="card-title">Ut enim ad minim veniam, quis nostrud exercition ullamco </h5>
               <form>
               <div className="form-row">
    <div className="form-group col-md-4">
      <label>CURRENT STATE</label>
      <input type="text" className="form-control" id="inputEmail4" placeholder="Niger"/>
    </div>
  </div>

  <div className="row">
  <div className="form-group names col-md-4">
    <label for="inputAddress">NEW STATE OF RESIDENCE</label>
    <input type="text" className="form-control identity"  placeholder=""/>
  </div>
  <div className="form-group names col-md-3">
    <label for="inputAddress">WHAT LGA DO YOU LIVE IN</label>
    <input type="text" className="form-control identity fullname"  placeholder=""/>
  </div>
  <div className="form-group names col-md-3">
    <label for="inputAddress">FEDERAL CONSISTUENCIES</label>
    <input type="text" className="form-control date"  placeholder=""/>
  </div>
  </div>



  <div className="row">
  <div className="form-group names col-md-4">
    <label for="inputAddress">SENATORIAL DISTRICT</label>
    <input type="text" className="form-control identity"  placeholder=""/>
  </div>
  <div className="form-group names col-md-3">
    <label for="inputAddress">STATE CONSTITUENCIES</label>
    <input type="text" className="form-control identity fullname"  placeholder=""/>
  </div>
  </div>
  <div className=" row">
  <div className= "col-md-3">
  <div className="form-group">
  <button type="button" class="btn btn-warning save">Save Changes</button>
  </div>
  </div>
  </div>
               </form>
    
                </div>

                      </div>
            
               </div>
                </div>
            );
        }
    }
    
    export default personal;