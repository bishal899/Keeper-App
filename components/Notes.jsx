import Items from "@components/Items";
import { loadGetInitialProps } from "next/dist/shared/lib/utils";

const Notes = (props) => {
  return (
    <div className="relative float-left m-5 px-3 py-2">
      <div className="inline-block border rounded-xl note_div lg:w-64 md:w-52 sm:w-48 h-auto px-4 py-2">
        <Items text={props.text} />
        <button
          className="border border-yellow-700 rounded-full hover:bg-yellow-600 hover:text-white text-sm mt-3 mb-1 p-2 text-black font-medium w-20 opacity-60 relative float-right"
          onClick={() => {
            console.log("Deleting note.");
            props.delete(props.id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Notes;
