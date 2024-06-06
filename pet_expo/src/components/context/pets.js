import { createContext, useEffect, useState, useCallback } from "react";
import axios from "axios";

const PetsContext = createContext();

function Provider({ children }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [searchTerm, setSearchTerm] = useState("");
  const [dog, setDog] = useState([]);
  const [cat, setCat] = useState([]);
  const [bird, setBird] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [petId, setPetId] = useState(-1);

  /////NAVIGATION/////
  useEffect(() => {
    const handler = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener("popstate", handler);

    return () => {
      window.removeEventListener("popstate", handler);
    };
  }, []);

  const navigation = (to) => {
    window.history.pushState({}, "", to);
    setCurrentPath(to);
  };

  /////DOGS/////
  const fetchDogs = useCallback(async () => {
    const response = await axios.get("https://freetestapi.com/api/v1/dogs");
    setDog(response.data);
  }, []);

  /////CATS/////
  const fetchCats = useCallback(async () => {
    const response = await axios.get("https://freetestapi.com/api/v1/cats");
    setCat(response.data);
  }, []);

  /////BIRDS/////
  const fetchBirds = useCallback(async () => {
    const response = await axios.get("https://freetestapi.com/api/v1/birds");
    setBird(response.data);
  }, []);

  const valueToShare = {
    navigation,
    currentPath,
    searchTerm,
    setSearchTerm,
    //////////
    dog,
    setDog,
    fetchDogs,
    //////////
    cat,
    setCat,
    fetchCats,
    //////////
    bird,
    setBird,
    fetchBirds,
    //////////
    showModal,
    setShowModal,
    petId,
    setPetId,
  };

  return (
    <PetsContext.Provider value={valueToShare}>{children}</PetsContext.Provider>
  );
}

export { Provider };
export default PetsContext;
