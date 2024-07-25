import Seat from './Seat';
import './App.css';

function App() {
  const seats = Array(25).fill(null);

  return (
    <>
      <div className="seat-grid">
        {seats.map((_, index) => <Seat key={index} />)}
      </div>
    </>
  )
}

export default App;
