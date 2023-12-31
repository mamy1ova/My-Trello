import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteChildList,
  editChildList,
  list,
  updateOrder,
} from "../../redux/slices/list-slice";
import { InputBase, styled } from "@mui/material";
import { FaEdit } from "react-icons/fa";

const Card = ({ cardInfo }) => {
  const listItem = useSelector(list);
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const [editTitle, setEditTitle] = useState(cardInfo.title);

  const removeChildList = () => {
    dispatch(deleteChildList(cardInfo));
  };

  const handleEditClick = () => {
    setIsEdit(true);
  };

  const handleSaveEdit = () => {
    dispatch(editChildList({ id: cardInfo.id, title: editTitle }));
    setIsEdit(false);
  };

  const handleCancelEdit = () => {
    setIsEdit(false);
    setEditTitle(cardInfo.title);
  };

  const handleDragStart = (e) => {
    e.dataTransfer.setData("text/plain", cardInfo.id);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
  };

  const handleDragLeave = () => {};

  const handleDrop = (e) => {
    e.preventDefault();
    const draggedItemId = e.dataTransfer.getData("text/plain");

    const newList = [...listItem]; 

    const draggedItem = newList.find((item) => item.id === draggedItemId);
    const targetItemIndex = newList.findIndex(
      (item) => item.id === cardInfo.id
    );

    newList.splice(newList.indexOf(draggedItem), 1);
    newList.splice(targetItemIndex, 0, draggedItem);

    dispatch(updateOrder(newList));
  };

  return (
    <StyledCardContainer
      draggable
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {isEdit ? (
        <StyledEditForm>
          <InputBase
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
          />
          <button onClick={handleSaveEdit}>Сохранить</button>
          <button onClick={handleCancelEdit}>Отмена</button>
        </StyledEditForm>
      ) : (
        <>
          <StyledCardTitle>{cardInfo.title}</StyledCardTitle>
          <StyledButton onClick={handleEditClick}>
            <FaEdit />
          </StyledButton>
          <StyledButton onClick={removeChildList}>
            <MdDelete />
          </StyledButton>
        </>
      )}
    </StyledCardContainer>
  );
};

export default Card;

const StyledCardContainer = styled("div")({
  backgroundColor: "#fff",
  borderRadius: "4px",
  padding: "1rem",
  marginBottom: "1rem",
  marginLeft: "2.5rem",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  width: "15rem",
});

const StyledCardTitle = styled("p")({
  fontSize: "16px",
  margin: 0,
  width: "10rem",
  wordWrap: "break-word",
  paddingRight: "2rem",
});

const StyledButton = styled("button")({
  position: "relative",
  left: "0",
  marginLeft: "auto",
  display: "flex",
  background: "none",
  border: "none",
  cursor: "pointer",
  fontSize: "18px",
  color: "#555",
  transition: "color 0.3s ease-in-out",

  "&:hover": {
    color: "#333",
  },
});

const StyledEditForm = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
  zIndex: "1001",
  backgroundColor: " white",
  width: "50rem",
  padding: "10px",
  borderRadius: "5px",

  "& button": {
    backgroundColor: "#2e2e2e",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    height: "20px",
  },
});
