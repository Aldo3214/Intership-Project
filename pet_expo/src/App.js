import usePetsContext from "./components/hooks/use-pets";
import NavBar from "./components/navigation/NavBar";
import Route from "./components/navigation/Route";
import SearchBar from "./components/SearchBar";
import HomePage from "./components/HomePage";
import DogPage from "./components/DogPage";
import CatPage from "./components/CatPage";
import BirdPage from "./components/BirdPage";

function App() {
  const { dog, cat, bird } = usePetsContext();
  return (
    <div className="container is-fluid">
      <NavBar />
      <Route path="/">
        <HomePage />
      </Route>
      <Route path="/dogs">
        <SearchBar />
        <DogPage dogs={dog} />
      </Route>
      <Route path="/cats">
        <SearchBar />
        <CatPage cats={cat} />
      </Route>
      <Route path="/birds">
        <SearchBar />
        <BirdPage birds={bird} />
      </Route>
    </div>
  );
}

export default App;
