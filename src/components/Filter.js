export const Filter = ({ filter, filterChange }) => {
  return (
    <div>
      <h3>Find contacts by name</h3>
      <input type="text" value={filter} onChange={(e) => filterChange(e)} />
    </div>
  );
};
