import { useState } from "react";

function TodoDone({todoAdd}) {
    const [text,setText] = useState("");
    return (
        <form onSubmit={(evt) => {
            evt.preventDefault();
            if(text === ""){
                return null;
            }else {
                todoAdd(text);
            };
            setText("");
        }}>
            <input type="text" value={text} onChange={(e) => {
                setText(e.target.value);
            }}/>
            <button>Add</button>
        </form>
    )
};

export default TodoDone;
