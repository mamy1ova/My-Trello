import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteChildList,
  editChildList,
  list,
  updateOrder,
} from "../../store/slices/list-slice";
import { Box, Button, InputBase, Typography, styled } from "@mui/material";
import { FaEdit } from "react-icons/fa";

const Card = ({ cardInfo }) => {
  const listItem = useSelector(list);
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const [editTitle, setEditTitle] = useState(cardInfo.title);

  const removeChildList = () => dispatch(deleteChildList(cardInfo));

  const handleEditClick = () => setIsEdit(true);

  const handleSaveEdit = () => {
    dispatch(editChildList({ id: cardInfo.id, title: editTitle }));
    setIsEdit(false);
  };

  const handleCancelEdit = () => {
    setIsEdit(false);
    setEditTitle(cardInfo.title);
  };

  const handleDragStart = (e) =>
    e.dataTransfer.setData("text/plain", cardInfo.id);

  const handleDragOver = (e) => e.preventDefault();

  const handleDragEnter = (e) => e.preventDefault();

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
    <StyledContainer
      draggable
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {isEdit ? (
        <Box className="edit-form">
          <InputBase
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
          />

          <Button onClick={handleSaveEdit}>Сохранить</Button>
          <Button onClick={handleCancelEdit}>Отмена</Button>
        </Box>
      ) : (
        <>
          <Typography className="title">{cardInfo.title}</Typography>
          <Button onClick={handleEditClick} className="edit">
            <FaEdit />
          </Button>

          <Button onClick={removeChildList} className="delete">
            <MdDelete />
          </Button>
        </>
      )}
    </StyledContainer>
  );
};

export default Card;

const StyledContainer = styled(Box)({
  backgroundColor: "#fff",
  borderRadius: "4px",
  padding: "1rem",
  marginBottom: "1rem",
  marginLeft: "2.5rem",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  width: "15rem",
  position: "relative",

  "& > .edit-form": {
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
      fontSize: "12px",
    },
  },

  "& .edit": {
    position: "absolute",
    right: "1.5rem",
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "18px",
    color: "#555",
    transition: "color 0.3s ease-in-out",

    "&:hover": {
      color: "#333",
    },
  },

  "& .delete": {
    position: "absolute",
    right: "0",
    paddingTop: "8px",
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "18px",
    color: "#555",
    transition: "color 0.3s ease-in-out",

    "&:hover": {
      color: "#333",
    },
  },

  "& .title": {
    fontSize: "16px",
    margin: 0,
    width: "10rem",
    wordWrap: "break-word",
    marginLeft: "-3rem",
  },
});
