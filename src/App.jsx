import React from "react";
import AddPost from "./components/AddPost";
import PostList from "./components/PostList";


function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
     <AddPost />
     <PostList />

    </div>
  );
}

export default App;

