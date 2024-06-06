import { useEffect } from "react";
import CatModal from "./CatModal";
import usePetsContext from "./hooks/use-pets";

function CatPage({ cats }) {
  const { fetchCats, petId, setPetId, showModal, setShowModal, searchTerm } =
    usePetsContext();

  useEffect(() => {
    fetchCats();
  }, [fetchCats]);

  const filteredCats = cats.filter((cat) => {
    const dataCat = cat.name.toLowerCase().includes(searchTerm.toLowerCase());
    return dataCat;
  });

  const openModal = (cat) => {
    setPetId(cat.id);
    setShowModal(true);
  };

  const renderCats = filteredCats.map((cat) => {
    if (petId === cat.id && showModal === true) {
      return (
        <div key={cat.id}>
          <CatModal cat={cat} />
        </div>
      );
    } else {
      return (
        <button
          key={cat.id}
          onClick={() => {
            openModal(cat);
          }}
        >
          <div className="flex flex-col justify-center items-center rounded-2xl bg-gray-300 p-5 w-auto shadow-2xl shadow-gray-900">
            <img className="w-40" src={`${cat.image}`} />
            <p className="text-xl font-bold italic text-gray-700">{cat.name}</p>
            <p className="text-lg font-semibold italic text-gray-700">
              {cat.origin}
            </p>
          </div>
        </button>
      );
    }
  });

  return <div className="grid grid-cols-5 gap-5 my-0 mx-10">{renderCats}</div>;
}

export default CatPage;
