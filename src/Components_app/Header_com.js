import Typewriter from "typewriter-effect";

function Header() {
  /*
    
        
    */
  return (
  
      <div data-bs-theme="dark">
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand">
              <Typewriter
                options={{
                  strings: ["Confidence", "Reliance","Faith", "Assurance","Trust"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="google.com"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="google.com">
                    Link
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" aria-disabled="true">
                    Disabled
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
  );
}
export default Header;
