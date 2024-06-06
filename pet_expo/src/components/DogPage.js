import { useEffect } from "react";
import DogModal from "./DogModal";
import usePetsContext from "./hooks/use-pets";

function DogPage({ dogs }) {
  const { fetchDogs, petId, setPetId, showModal, setShowModal, searchTerm } =
    usePetsContext();

  useEffect(() => {
    fetchDogs();
  }, [fetchDogs]);

  const filteredDogs = dogs.filter((dog) => {
    const dataDog = dog.name.toLowerCase().includes(searchTerm.toLowerCase());
    return dataDog;
  });

  const openModal = (dog) => {
    setPetId(dog.id);
    setShowModal(true);
  };

  const renderDogs = filteredDogs.map((dog) => {
    if (petId === dog.id && showModal === true) {
      return (
        <div key={dog.id}>
          <DogModal dog={dog} />
        </div>
      );
    } else {
      return (
        <button
          key={dog.id}
          onClick={() => {
            openModal(dog);
          }}
        >
          <div className="flex flex-col justify-center items-center rounded-2xl bg-gray-300 p-5 w-auto shadow-2xl shadow-gray-900">
            <img className="w-40" src={`${dog.image}`} />
            <p className="text-xl font-bold italic text-gray-700">{dog.name}</p>
            <p className="text-lg font-semibold italic text-gray-700">
              {dog.origin}
            </p>
          </div>
        </button>
      );
    }
  });

  return <div className="grid grid-cols-5 gap-5 my-0 mx-10">{renderDogs}</div>;
}

export default DogPage;
