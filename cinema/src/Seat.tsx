import { useState } from 'react';
import seatImage from './assets/seat.png';
import seatReservedImage from './assets/seatReserved.png';

function Seat() {
  const [isReserved, setIsReserved] = useState(false);

  const toggleReservation = () => {
    setIsReserved(!isReserved);
  };

  return (
    <img
      src={isReserved ? seatReservedImage : seatImage}
      alt={isReserved ? 'Reserved Seat' : 'Available Seat'}
      onClick={toggleReservation}
      className="seat"
    />
  );
};

export default Seat;
