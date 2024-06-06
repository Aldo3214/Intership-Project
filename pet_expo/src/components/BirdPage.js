import { useEffect } from "react";
import BirdModal from "./BirdModal";
import usePetsContext from "./hooks/use-pets";

function BirdPage({ birds }) {
  const { fetchBirds, petId, setPetId, showModal, setShowModal, searchTerm } =
    usePetsContext();

  useEffect(() => {
    fetchBirds();
  }, [fetchBirds]);

  const filteredBirds = birds.filter((bird) => {
    const dataBird = bird.name.toLowerCase().includes(searchTerm.toLowerCase());
    return dataBird;
  });

  const openModal = (bird) => {
    setPetId(bird.id);
    setShowModal(true);
  };

  const renderBirds = filteredBirds.map((bird) => {
    if (petId === bird.id && showModal === true) {
      return (
        <div key={bird.id}>
          <BirdModal bird={bird} />
        </div>
      );
    } else {
      return (
        <button
          key={bird.id}
          onClick={() => {
            openModal(bird);
          }}
        >
          <div className="flex flex-col justify-center items-center rounded-2xl bg-gray-300 p-5 w-auto shadow-2xl shadow-gray-900">
            <img className="w-40" src={`${bird.image}`} />
            <p className="text-xl font-bold italic text-gray-700">
              {bird.name}
            </p>
            <p className="text-lg font-semibold italic text-gray-700">
              {bird.origin}
            </p>
          </div>
        </button>
      );
    }
  });

  return <div className="grid grid-cols-5 gap-5 my-0 mx-10">{renderBirds}</div>;
}

export default BirdPage;
