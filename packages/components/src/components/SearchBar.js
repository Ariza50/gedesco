const SearchBar = () => {
  return (
    <div className="pt-2 relative mx-auto text-gray-600 mb-8">
      <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
             type="search" name="search" placeholder="Searchh">
      </input>
    </div>
  );
}

export default SearchBar;
