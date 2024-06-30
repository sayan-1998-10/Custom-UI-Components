import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import { useState } from "react";
import "./index.css";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function StarRating(props) {
  const [currentHoveredStar, setCurrentHoveredStar] = useState(-1);
  const [isHover, setIsHover] = useState(false);
  const [clickedStar, setClickedStar] = useState(-1);
  const numberOfStars: number = props.numberOfStars;
  const tempArray = [];

  // Create an index for every star from 0 ... numberOfStars - 1
  if (numberOfStars > 0) {
    for (let i = 0; i < numberOfStars; i++) {
      tempArray.push(i);
    }
  }

  // On hover   
  function highlightStars(hoveredStar: number) {
    setIsHover(true);
    setCurrentHoveredStar(hoveredStar);
  }

  // On select
  function onSelectStar(selectedStar: number) {
    setIsHover(false);
    setClickedStar(selectedStar);
  }

  // Get the styling class
  function getClassNameOnStarRating(id: number) {
    if (isHover && currentHoveredStar !== -1) {
      return id <= currentHoveredStar
        ? "star-rating-rated"
        : "star-rating-default";
    }

    if (clickedStar !== -1) {
      return id <= clickedStar ? "star-rating-rated" : "star-rating-default";
    }

    return "star-rating-default";
  }

  return (
    <section className="min-h-[100vh] flex justify-center items-center bg-slate-500">
      <Card className="w-[30vw] h-fit flex flex-col gap-4 items-center">
        <CardHeader>
          <CardTitle className="text-center text-[20px]">How many stars would you give to our Online Code Editor?</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="star-wrapper">
            {tempArray.map((item, id) => (
              <button
                key={id}
                onMouseOver={() => highlightStars(id)}
                onMouseOut={() => setCurrentHoveredStar(-1)}
                onClick={() => onSelectStar(id)}
              >
                <StarOutlinedIcon
                  fontSize="large"
                  className={getClassNameOnStarRating(id)}
                />
              </button>
            ))}
          </div>
        </CardContent>
        <CardFooter className="text-center">
            <p>Thank you for your positive feedback! We're glad to know that you had a great experience and we appreciate your support.</p>
        </CardFooter>
      </Card>
    </section>
  );
}

export default StarRating;
