import SideBarLeft from "./Components/SideBarLeft";
import Container from "./Components/Container";
import SideBarRight from "./Components/SideBarRight";
function App() {
  return (
    <div className="App">
      <SideBarLeft />
      <div className="container">
        <Container />
      </div>
      <SideBarRight />
    </div>
  );
}

export default App;
