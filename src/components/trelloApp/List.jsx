import React, { useState } from "react";
import Card from "./Card";
import AddNewTask from "./AddNewTask";
import { useDispatch, useSelector } from "react-redux";
import {
  deletelist,
  editList,
  list,
  updateOrder,
} from "../../redux/slices/list-slice";
import { InputBase, styled } from "@mui/material";
import { MdDelete, MdModeEdit } from "react-icons/md";

const List = () => {
  const listItem = useSelector(list);
  const [parentUpdateInput, setParentUpdateInput] = useState("");
  const [editingItemId, setEditingItemId] = useState(null);
  const [hoveredItemId, setHoveredItemId] = useState(null);
  const dispatch = useDispatch();

  const removeList = (id) => {
    dispatch(deletelist({ id }));
  };

  const startEditing = (id, title) => {
    setEditingItemId(id);
    setParentUpdateInput(title);
  };

  const cancelEditing = () => {
    setEditingItemId(null);
    setParentUpdateInput("");
  };

  const updateList = () => {
    if (editingItemId !== null) {
      dispatch(editList({ id: editingItemId, title: parentUpdateInput }));
      setEditingItemId(null);
      setParentUpdateInput("");
    }
  };

  const handleDragStart = (e, id) => {
    e.dataTransfer.setData("text/plain", id);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
  };

  const handleDragLeave = () => {};

  const handleDrop = (e, targetId) => {
    e.preventDefault();
    const draggedItemId = e.dataTransfer.getData("text/plain");

    const newList = listItem.map((item) => {
      if (item.id === draggedItemId) {
        return { ...item, parentId: targetId };
      }
      return item;
    });

    dispatch(updateOrder(newList));
  };

  return (
    <StyledListContainer>
      {listItem.map(({ id, title, children }) => (
        <StyledAddTaskContainer
          key={id}
          draggable
          onDragStart={(e) => handleDragStart(e, id)}
          onDragOver={handleDragOver}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDrop={(e) => handleDrop(e, id)}
        >
          <StyledListTitle
            onMouseEnter={() => setHoveredItemId(id)}
            onMouseLeave={() => setHoveredItemId(null)}
          >
            {editingItemId === id ? (
              <StyledEditForm onSubmit={(e) => e.preventDefault()}>
                <InputBase
                  value={parentUpdateInput}
                  onChange={(e) => setParentUpdateInput(e.target.value)}
                />
                <div>
                  <button type="button" onClick={updateList}>
                    Сохранить
                  </button>
                  <button type="button" onClick={cancelEditing}>
                    Отмена
                  </button>
                </div>
              </StyledEditForm>
            ) : (
              <>
                {title}
                <StyledIconsList isVisible={hoveredItemId === id}>
                  <button onClick={() => startEditing(id, title)}>
                    <MdModeEdit />
                  </button>
                  <button onClick={() => removeList(id)}>
                    <MdDelete />
                  </button>
                </StyledIconsList>
              </>
            )}
          </StyledListTitle>
          {children?.length > 0 &&
            children.map((child) => <Card key={child.id} cardInfo={child} />)}
          <div>
            <AddNewTask type="card" parentId={id} />
          </div>
        </StyledAddTaskContainer>
      ))}
      <div>
        <AddNewTask />
      </div>
    </StyledListContainer>
  );
};

export default List;

const StyledListContainer = styled("div")({
  padding: "16px",
  display: "flex",
  alignItems: "flex-start",
  flexWrap: "wrap",
  gap: "20px",
  marginTop: "1rem",
  marginLeft: "2rem",
});

const StyledAddTaskContainer = styled("div")({
  marginTop: "10px",
  backgroundColor: "#2e2e2e",
  opacity: "0.7",
  border: "none",
  borderRadius: "1rem",
  width: "20rem",
});

const StyledListTitle = styled("div")({
  fontSize: "20px",
  fontWeight: "bold",
  marginBottom: "1rem",
  marginTop: "1rem",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  color: "#fff",
  transition: "color 0.3s ease-in-out",
});

const StyledEditForm = styled("form")({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
  marginTop: "1rem",

  "& input": {
    padding: "8px",
    borderRadius: "4px",
    width: "15rem",
    fontSize: "0.8rem",
    backgroundColor: "#fff",
  },

  "& div": {
    display: "flex",
    gap: "2rem",
    justifyContent: "center",
  },

  "& button": {
    background: "none",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    height: "20px",
  },
});

const StyledIconsList = styled("div")(
  ({ theme }) => ({
    display: "flex",
    justifyContent: "flex-end",
    visibility: "hidden",
    transition: "visibility 0.3s ease-in-out",

    "& button": {
      background: "none",
      border: "none",
      cursor: "pointer",
      fontSize: "1rem",
      color: "#fff",
      marginTop: "4px",
      marginRight: "8px",
      transition: "color 0.3s ease-in-out",

      "&:hover": {
        color: theme.palette.primary.main,
      },
    },
  }),
  ({ isVisible }) =>
    isVisible && {
      visibility: "visible",
    }
);
