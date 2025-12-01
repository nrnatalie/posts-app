import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/postsSlice";
import PostCard from "./PostCard";
import Pagination from "./Pagination";
import Search from "./Search";
import PostModal from "./PostModal";

const PostList = () => {
  const dispatch = useDispatch();
  const { data, loading, error, search, currentPage, postsPerPage } =
    useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const filteredPosts = data.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  const indexLast = currentPage * postsPerPage;
  const indexFirst = indexLast - postsPerPage;
  const currentPosts = filteredPosts.slice(indexFirst, indexLast);

  if (loading) return <p className="text-center mt-8">Loading...</p>;
  if (error) return <p className="text-center mt-8 text-red-500">{error}</p>;

  return (
    <div>
      <Search />
      <div className="flex flex-wrap justify-center gap-4">
        {currentPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
      <Pagination />
      <PostModal />
    </div>
  );
};

export default PostList;
