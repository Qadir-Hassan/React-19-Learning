import './App.css'
import Entry from './components/Entry'
import Header from './components/Header'
import TravelData from './components/TravelData';


function App() {
const tripCard = TravelData.map((trip)=>{
    // eslint-disable-next-line react/jsx-key
    return <Entry mainImage={trip.img} 
     country={trip.country} 
     location= {trip.location}
     tripDetails= {trip.tripdetails}
     googleMap = {trip.googlemap}
     startDate={trip.startdate}
     endDate = {trip.enddate}
     />
   })
 console.log(tripCard);
 
  return (
   
    <>
     
      <Header />
      {tripCard}
      {/* <Entry
        mainImage={{src:"/images/japan.jpg",alt:"Japan"}}
        country="Japan"
        location="Mount Fuji"
        tripDetails="A land where natural splendours and timeless traditions meet neon sci-fi cities and a frenetic buzz, Japan invites discovery at every turn. Be inspired by authentic experiences, invigorating nature breaks and offbeat adventures doubling as refreshing escapes"

      /> */}

     
    </>
  )
}

export default App
