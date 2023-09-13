
import './App.css';
import data from './data';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';



function App() {
  const Cards = data.map(card => {
    return <Card img={card.coverImg} title={card.title} price={card.price} location={card.location} stats={card.stats} description={card.description} openSpots={card.openSpots}/>
   })

  return (
    <div className="contacts">
     <Navbar/>
     <section className='cards-list'>
     {Cards}

     </section>
     
    </div>
  );
}

export default App;
