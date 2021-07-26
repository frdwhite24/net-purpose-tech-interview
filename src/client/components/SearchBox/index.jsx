export const SearchBox = ({ searchTerm, setSearchTerm }) => {
  return (
    <input
      value={searchTerm}
      onChange={(e) => {
        setSearchTerm(e.target.value);
      }}
    />
  );
};
