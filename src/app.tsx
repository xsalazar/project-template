import Body from "./Components/body";
import Footer from "./Components/footer";

export default function App() {
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
