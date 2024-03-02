import "./App.css";
import Calendar from "./components/Calendar";

const App = () => {
  const props = [
    { location: "location1", review: "1", imageUrl: "src/image/test.png" },
    { location: "location2", review: "1", imageUrl: "src/image/test.png" },
    { location: "location3", review: "1", imageUrl: "src/image/test.png" },
    { location: "location4", review: "1", imageUrl: "src/image/test.png" },
    { location: "location5", review: "1", imageUrl: "src/image/test.png" },
    { location: "location6", review: "1", imageUrl: "src/image/test.png" },
    { location: "location7", review: "1", imageUrl: "src/image/test.png" },
    { location: "location8", review: "1", imageUrl: "src/image/test.png" },
    { location: "location9", review: "1", imageUrl: "src/image/test.png" },
    { location: "location10", review: "1", imageUrl: "src/image/test.png" },
  ];

  return (
    <div className="App">
      <div>
        <h1>Title Name</h1>
        <h2>Something</h2>
      </div>
      <div className="test">
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
