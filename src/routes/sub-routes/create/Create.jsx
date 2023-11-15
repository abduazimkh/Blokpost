import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./Create.scss";
import { Button } from "../../../utils";
import { useFetch } from "../../../helpers/hooks/useFetch";
import instance from "../../../services/api";
import { useValue } from "../../../context/AppProvider";

const Create = () => {
  const [state] = useValue();
  const [category, setCategory] = useState("");
  const { data } = useFetch("/api/categories");
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");

  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [
          { list: "ordered" },
          { list: "bullet" },
          { indent: "-1" },
          { indent: "+1" },
        ],
        ["link"],
      ],
    },
    history: {
      delay: 500,
      maxStack: 100,
      userOnly: true,
    },
  };

  const handleCreatePost = (e) => {
    e.preventDefault();

    instance
      .post("/api/posts", {
        title,
        description,
        category,
        image,
      })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  console.log(category);

  return (
    <div className="create">
      <form className="create-form" onSubmit={handleCreatePost}>
        <input
          type="text"
          placeholder="Title"
          className="form__input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="url"
          placeholder="Image Link"
          className="form__input"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <ReactQuill
          modules={modules}
          theme="snow"
          value={description}
          onChange={setDescription}
        />
        <select
          defaultValue={"select"}
          className="form__input"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option disabled value="select">
            Select post category
          </option>
          {data?.data.map((categoryItem) => (
            <option key={categoryItem._id} value={categoryItem._id}>
              {categoryItem.title}
            </option>
          ))}
        </select>
        <Button text={"Create"} />
      </form>
    </div>
  );
};

export default Create;
