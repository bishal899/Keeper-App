"use client";
import { useState } from "react";
import Image from "next/image";
import Heading from "@components/Heading";
import Input from "@components/Input";
import Notes from "@components/Notes";

const Home = () => {
  const [notes, setNotes] = useState([]);

  function onAdd(items) {
    setNotes((prev) => {
      return [...prev, items];
    });
  }

  function onDelete(id) {
    setNotes((prev) => {
      return prev.filter((items, index) => {
        return index !== id;
      })
    });
  }

  return (
    <section>
      <nav className="lg:h-20 md:h-20 sm:h-16 bg-orange-400 flex justify-start items-center gap-6 pl-8 mb-7">
        {/* keeper heading */}

        <Image
          src="/assets/images/keeper.png"
          width={50}
          height={0}
          alt="Logo"
          className="my-5 rounded-full"
        />
        <Heading />
      </nav>
      <div>
        <Input add={onAdd} />
        {notes.map((item, index) => {
          return <Notes key={index} id={index} text={item} delete={onDelete} />;
        })}
      </div>
    </section>
  );
};

export default Home;
