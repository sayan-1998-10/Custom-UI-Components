import "./App.css";
import ProductDataLazyLoad from "./components/load-more";

// import CustomAccordion from './components/accordion'
// import StarRating from "./components/star-rating";
import "./styles/globals.css";

function App() {
  return (
    <>
      {/* <CustomAccordion/> */}
      {/* {<StarRating numberOfStars={5} />} */}
      {<ProductDataLazyLoad/>}
    </>
  );
}

export default App;
