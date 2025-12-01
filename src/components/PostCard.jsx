import { useDispatch } from "react-redux";
import { setSelectedPost } from "../redux/postsSlice";

const PostCard = ({ post }) => {
  const dispatch = useDispatch();

  return (
    <div
      className="border rounded p-4 w-72 cursor-pointer hover:shadow-lg transition"
      onClick={() => dispatch(setSelectedPost(post))}
    >
      <h3 className="font-bold mb-2">{post.title}</h3>
      <p>{post.body.slice(0, 80)}...</p>
    </div>
  );
};

export default PostCard;
