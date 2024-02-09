import React from 'react'
import { Link, Navigate} from 'react-router-dom'



export default function Navbar() {
  const [goToHome, setGoToHome] = React.useState(false);
  if(goToHome) {
    return <Navigate to="/homepage"/>;

  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <Link className="navbar-brand" to="./">Minutes Forge</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <button className="nav-link active" aria-current="page" onClick={()=>{setGoToHome(true);}}>Home</button>
        </li>
        <li className="nav-item">
          <button className="nav-link" to="./">Features</button>
        </li>
        <li className="nav-item">
          <button className="nav-link"  to="./">Settings</button>
        </li>
        <li className="nav-item">
          <button className="nav-link disabled" aria-disabled="true">Disabled</button>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

