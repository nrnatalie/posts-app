import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../redux/postsSlice";

const Pagination = () => {
  const dispatch = useDispatch();
  const { data, postsPerPage, currentPage, search } = useSelector(
    (state) => state.posts
  );

  const filtered = data.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );
  const totalPages = Math.ceil(filtered.length / postsPerPage);

  return (
    <div className="flex space-x-2 mt-4 justify-center">
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i + 1}
          onClick={() => dispatch(setCurrentPage(i + 1))}
          className={`px-3 py-1 rounded ${
            currentPage === i + 1
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
