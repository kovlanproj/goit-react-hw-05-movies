export const SearchBox = ({ value, onSearch, onChangeFilter }) => {
  return (
    <form autoComplete="off" onSubmit={onSearch}>
      <input
        type="text"
        name="query"
        value={value}
        onChange={e => onChangeFilter(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};
