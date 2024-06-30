import "./App.css";
// import CustomAccordion from './components/accordion'
import StarRating from "./components/star-rating";
import "./styles/globals.css";

function App() {
  return (
    <>
      {/* <CustomAccordion/> */}
      {<StarRating numberOfStars={5} />}
    </>
  );
}

export default App;
