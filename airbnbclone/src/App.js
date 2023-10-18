
import './App.css';
import data from './data';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';



function App() {
  const Cards = data.map(card => {
    return <Card 
                  key={card.id}
                  card={card}
                  />
   })

  return (
    <div className='everything'>
     <Navbar/>
     <Hero/>
     <div className='cards-list'>

        {Cards}
        

     </div>
     
    </div>
  );
}

export default App;
