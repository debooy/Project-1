import "./App.css";
import Calendar from "./components/Calendar";

const App = () => {
  const props = [
    { location: "Crown Shy", review: "10", imageUrl: "src/image/image1.png" },
    { location: "Tatiana", review: "9", imageUrl: "src/image/image2.png" },
    {
      location: "Gramercy Tavern",
      review: "8",
      imageUrl: "src/image/image3.png",
    },
    { location: "Dhamaka", review: "8", imageUrl: "src/image/image4.png" },
    { location: "Kochi", review: "7", imageUrl: "src/image/image5.png" },
    { location: "Rezdora", review: "7", imageUrl: "src/image/image6.png" },
    {
      location: "Sushi Nakazawa",
      review: "8",
      imageUrl: "src/image/image7.png",
    },
    { location: "Untable", review: "10", imageUrl: "src/image/image8.png" },
    { location: "Clover Hill", review: "7", imageUrl: "src/image/image9.png" },
    {
      location: "Figure Eight",
      review: "8",
      imageUrl: "src/image/image10.png",
    },
  ];

  return (
    <div className="App">
      <div className="title">
        <h1>Best Food Spots In NYC</h1>
        <h4>Here are my personal review for best food spot in NYC</h4>
      </div>
      <div className="image-container">
        {props.map((event) => (
          <Calendar
            location={event.location}
            review={event.review}
            imageUrl={event.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
