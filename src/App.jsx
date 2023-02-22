import './App.css'
import Header from "./components/Header"
import TravelCard from './components/TravelCard'
import TravelData from "../data"


function App() {

  const cards = TravelData.map(card => {
    return (
      <TravelCard
        {...card} // spread operator
      />
    )
  })

  return (
    <div className="App">
      <Header />
      <section className="travelCard--section">
        <div className="container">
          {cards}
        </div>
      </section>
    </div>
  )
}

export default App
