    import React from "react";
    import Logo from "../images/logo.svg";
    import Name from "../images/name-image.svg";
    import "../App.css";
    class navbar extends React.Component {
        constructor(props) {
            super(props);
            this.state = {  };
        }
        render() {
            return (
                <div className="navbar-all">
                 <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <img className="logo" src={Logo}/>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Dashboard <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Buy insurance</a>
      </li>

      <li className="nav-item">
        <a className="nav-link" href="#">Account Settings</a>
      </li>
      <p className="together">
      <li >
      <img className="name-image" src={Name}/>
      </li>

      <li className="name">
        <select>
            <option>Lois Durello</option>
        </select>
      </li>
      </p>
     
      
    </ul>
 
  </div>
</nav>
                </div>
            );
        }
    }
    
    export default navbar;