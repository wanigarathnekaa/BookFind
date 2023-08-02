import "../styles/Styles.css";
import ThreeSixty from "react-360-view";

const basePath = "https://fastly-production.24c.in/webin/360";
export default function Bookstore() {
  return (
    <div className="Bookstore">
      <ThreeSixty
        amount={36}
        imagePath={basePath}
        fileName="output_{index}.jpeg"
        spinReverse
      />
    </div>
  );
}