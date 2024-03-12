import Card from "./Card";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Data from "./data";
//Image Imports



function App() {
  const cards = Data.map(item => {
    return (
      <Card
        key={item.id}
        {...item}
        
      />
  )
  })

  return (
    <div className="main">
      <Navbar />
      <Hero />
      <div className="reviewCards">
        {cards}
      </div>
    </div>
  );
}

export default App;
