import React, { useEffect, useState } from "react";
import { HiPencilAlt } from "react-icons/hi";
import { HiPencil } from "react-icons/hi";
import { BsTrash, BsCardChecklist } from "react-icons/bs";

const TodoInsert = ({
  updateTodo,
  editing,
  deleteTodo,
  selectedTodo,
  toggleEditing,
  addTodo,
}) => {
  const [value, setValue] = useState("");

  const onSubmit = (event) => {
    event.preventDefault(event);
    addTodo(value);
    setValue("");
    toggleEditing();
  };

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setValue(value);
  };

  useEffect(() => {
    if (selectedTodo) {
      setValue(selectedTodo.text);
    }
  }, [selectedTodo]);

  return (
    <>
      {editing && (
        <div
          onClick={() => {
            toggleEditing();
          }}
          className="background"
        ></div>
      )}
      {editing && (
        <form
          className="TodoInsert__Form"
          onSubmit={
            selectedTodo
              ? () => {
                  updateTodo(selectedTodo.id, value);
                }
              : onSubmit
          }
        >
          <input
            value={value}
            type="text"
            placeholder="Check LIST"
            maxLength={50}
            onChange={onChange}
          />
          {selectedTodo ? (
            <div className="TodoInsert__Form__pencilAndTrash">
              <HiPencil
                onClick={() => {
                  updateTodo(selectedTodo.id, value);
                }}
              />
              <BsTrash
                onClick={() => {
                  deleteTodo(selectedTodo.id);
                }}
              />
            </div>
          ) : (
            <button type="submit" value="추가">
              <HiPencilAlt
                onClick={() => {
                  addTodo(value);
                }}
              />
            </button>
          )}
        </form>
      )}
    </>
  );
};

export default TodoInsert;
