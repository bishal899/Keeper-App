"use client";
import { useState } from "react";

const Input = (props) => {
  const [items, setItems] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setItems((prev) => {
      if (name === "title") {
        return {
          title: value,
          content: prev.content,
        };
      } else if (name === "content") {
        return {
          title: prev.title,
          content: value,
        };
      }
    });
  }

  function handleClick() {
    props.add(items);
    setItems({
      title: "",
      content: ""
    })
  }

  return (
    <div className="block w-96 p-4 mx-auto mt-6 mb-8 text-center border rounded-md input_div">
      <input
        onChange={handleChange}
        placeholder="Title"
        name="title"
        value={items.title}
        className="input title"
      />
      <textarea
        onChange={handleChange}
        placeholder="Content"
        name="content"
        value={items.content}
        className="input content"
      />
      <button
        type="button"
        onClick={handleClick}
        className="text-sm text-white font-medium border-none rounded-full w-10 h-10 bg-yellow-600 p-0 float-right hover:scale-125"
      >
        Add
      </button>
    </div>
  );
};

export default Input;
