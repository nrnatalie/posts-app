import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../redux/postsSlice";

const Search = () => {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.posts.search);

  return (
    <input
      type="text"
      value={search}
      onChange={(e) => dispatch(setSearch(e.target.value))}
      placeholder="Search posts..."
      className="border rounded px-3 py-2 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
};

export default Search;
