export function Searchbar({ setinputvalue, inputvalue, Handlesubmit }) {
  return (
    <div className="position-relative">
      <form onSubmit={Handlesubmit}>
        <input
          type="text"
          placeholder="Search city..."
          className="form-control search-input"
          onChange={(e) => setinputvalue(e.target.value)}
          value={inputvalue}
        />
        <button type="submit" className="btn btn-primary mt-2 w-100">
          Search
        </button>
      </form>
    </div>
  );
}
