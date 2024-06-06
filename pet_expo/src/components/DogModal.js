import usePetsContext from "./hooks/use-pets";

function DogModal({ dog }) {
  const { setShowModal } = usePetsContext();

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl p-5 pet-modal">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 close-modal"
              onClick={() => {
                closeModal();
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div>
                  <img src={dog.image} />
                </div>
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left ">
                  <h3
                    className="font-semibold leading-6 text-gray-900 size-2xl"
                    id="modal-title"
                  >
                    {dog.name}
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">{dog.description}</p>
                  </div>
                  <div className="mt-2 grid grid-cols-2 gap-2 justify-between items-center">
                    <p className="text-sm text-gray-700">
                      Origin: {dog.origin}
                    </p>
                    <p className="text-sm text-gray-700">
                      Lifespan: {dog.lifespan}
                    </p>
                    <p className="text-sm text-gray-700">
                      Breed group: {dog.breed_group}
                    </p>
                    <p className="text-sm text-gray-700">Size: {dog.size}</p>
                    <p className="text-sm text-gray-700">
                      Temperament: {dog.temperament}
                    </p>
                    <p className="text-sm text-gray-700">
                      Color: {dog.colors.join(", ")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DogModal;
