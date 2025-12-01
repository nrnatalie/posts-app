import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { addPost } from "../redux/postsSlice";

const schema = yup.object().shape({
  title: yup.string().required().min(5),
  body: yup.string().required().min(10),
});

const AddPost = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const newPost = { id: Date.now(), title: data.title, body: data.body };
    dispatch(addPost(newPost));
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}
      className="border p-4 rounded mb-4 max-w-md mx-auto bg-white flex flex-col gap-2"
    >
      <input {...register("title")} placeholder="Title"
        className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}

      <textarea {...register("body")} placeholder="Body"
        className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {errors.body && <p className="text-red-500 text-sm">{errors.body.message}</p>}

      <button type="submit"
        className="bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600 transition"
      >
        Add Post
      </button>
    </form>
  );
}

export default AddPost;