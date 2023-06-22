import Footer from "./Components/footer";
import Body from "./Components/body";

function App() {
  return (
    <div
      style={{
        minHeight: "100dvh",
        maxHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Body />
      <Footer />
    </div>
  );
}

export default App;
