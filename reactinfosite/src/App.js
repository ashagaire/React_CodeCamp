import './App.css';

function Header() {
  return(
    <header>
      <nav className='nav'>
        <img src={require("./logo192.png" )} className='nav-logo'/>
        
        <ul className='nav-items'>
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        
      </nav>
    </header>
  )
}

function Footer() {
  return(
    <footer> @2023 Asha Development. All rights reserved</footer>
  )
}

function MainContent() {
  return(
    <div className='main-content'>
      <h1>Fun facts about React</h1>
          
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by jordan Walke</li>
        <li>Has well over 100K stars on Github</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprises apps, including mobile apps</li>

      </ul>

    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <MainContent/>
        
        <Footer/>  
        
      </header>
    </div>
  );
}


export default App;
