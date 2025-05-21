import { useContext } from "react";
import { EditorContext } from "../pages/editor.pages";

const Tag = ({ tag, tagIndex }) => {
    const { blog, blog: { tags }, setBlog } = useContext(EditorContext);

    const addEditable = (e) => {
        e.target.setAttribute("contentEditable", true);
        e.target.focus();
    };

    const handleTagEdit = (e) => {
        if (e.keyCode === 13 || e.keyCode === 188) {
            e.preventDefault();

            let currentTag = e.target.innerText.trim();

            if (!currentTag || tags.includes(currentTag)) {
                e.target.setAttribute("contentEditable", false);
                return;
            }

            let newTags = [...tags];
            newTags[tagIndex] = currentTag;

            setBlog({ ...blog, tags: newTags });

            e.target.setAttribute("contentEditable", false);
        }
    };

    const handleTagDelete = () => {
        let newTags = tags.filter(t => t !== tag);
        setBlog({ ...blog, tags: newTags });
    };

    return (
        <div className="relative p-2 mt-2 mr-2 px-5 bg-white rounded-full inline-block hover:bg-opacity-50 pr-10">
            <p
                className="outline-none"
                onKeyDown={handleTagEdit}
                onClick={addEditable}
                contentEditable="true"
                suppressContentEditableWarning={true}
            >
                {tag}
            </p>
            <button
                className="mt-[2px] rounded-full absolute right-3 top-1/2 -translate-y-1/2"
                onClick={handleTagDelete}
            >
                <i className="fi fi-br-cross text-sm pointer-events-none"></i>
            </button>
        </div>
    );
};

export default Tag;
