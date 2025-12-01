import { useDispatch, useSelector } from "react-redux";
import { setSelectedPost } from "../redux/postsSlice";

const PostModal = () => {
  const dispatch = useDispatch();
  const selectedPost = useSelector((state) => state.posts.selectedPost);

  if (!selectedPost) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-lg max-w-lg w-full relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          onClick={() => dispatch(setSelectedPost(null))}
        >
          X
        </button>
        <h2 className="text-xl font-bold mb-2">{selectedPost.title}</h2>
        <p>{selectedPost.body}</p>
      </div>
    </div>
  );
};

export default PostModal;
