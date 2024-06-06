import usePetsContext from "./hooks/use-pets";

function SearchBar() {
  const { searchTerm, setSearchTerm } = usePetsContext();

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="text-center my-5">
      <input
        value={searchTerm}
        onChange={handleSearchTermChange}
        className="outline-none rounded py-1 px-3 w-72 border-0 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 "
        placeholder="Search for an animal..."
      />
    </div>
  );
}

export default SearchBar;
