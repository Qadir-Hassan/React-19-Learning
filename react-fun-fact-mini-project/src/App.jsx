import reactLogo from './assets/react.svg'

import './App.css'

function App() {


  return (
    <>
     <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
      <img src="src/assets/react.svg" alt="React Logo" />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
      
      </ul>
    </div>
  </div>
</nav>
     </header>
     <CustomComponent />
     <FooterComponent />
    </>
  )
}

export default App


function CustomComponent(){
  return (
    <main>
      <div className="card mt-5 col-lg-6 center m-auto">
  <div className="card-header">
    Fun Fact About React
  </div>
  <div className="card-body">
    <ul>
      <li>Virtual DOM: React uses a virtual copy of the Document Object Model (DOM) to render pages faster.</li>
      <li>Component-based approach: React's component-based approach can be used to build cross-platform apps for web and mobile.</li>
      <li>Easy to learn: Programmers with a good understanding of JavaScript can learn React in a few days</li>
      <li>Supports type systems: React has a built-in way to validate props called propTypes.</li>
    </ul>
  </div>
</div>
    </main>
  )
}

function FooterComponent(){
  return (
    <footer className='bg-white p-2 mt-5 text-dark d-flex justify-content-center text-center'>
      <p className='text-center'>
      &copy; All Right Reserved , Develop By Qadir Hassan
      </p>
   
    </footer>
  )
}