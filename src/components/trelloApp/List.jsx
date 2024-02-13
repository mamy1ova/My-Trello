import { useState } from "react";
import Card from "./Card";
import AddNewTask from "./AddNewTask";
import { useDispatch, useSelector } from "react-redux";
import {
  deletelist,
  editList,
  list,
  updateOrder,
} from "../../store/slices/list-slice";
import { Box, Button, InputBase, Typography, styled } from "@mui/material";
import { MdDelete, MdModeEdit } from "react-icons/md";

const List = () => {
  const listItem = useSelector(list);
  const [parentUpdateInput, setParentUpdateInput] = useState("");
  const [editingItemId, setEditingItemId] = useState(null);
  const [hoveredItemId, setHoveredItemId] = useState(null);
  const dispatch = useDispatch();

  const removeList = (id) => dispatch(deletelist({ id }));

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

  const handleDragStart = (e, id) => e.dataTransfer.setData("text/plain", id);

  const handleDragOver = (e) => e.preventDefault();

  const handleDragEnter = (e) => e.preventDefault();

  const handleDragLeave = () => {};

  const handleDrop = (e, targetId) => {
    e.preventDefault();

    const draggedItemId = e.dataTransfer.getData("text/plain");

    const newList = listItem.map((item) =>
      item.id === draggedItemId ? { ...item, parentId: targetId } : item
    );
    
    dispatch(updateOrder(newList));
  };

  return (
    <StyledContainer>
      {listItem.map(({ id, title, children }) => (
        <Box
          className="container"
          key={id}
          draggable
          onDragStart={(e) => handleDragStart(e, id)}
          onDragOver={handleDragOver}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDrop={(e) => handleDrop(e, id)}
        >
          <Box
            className="box-title"
            onMouseEnter={() => setHoveredItemId(id)}
            onMouseLeave={() => setHoveredItemId(null)}
          >
            {editingItemId === id ? (
              <StyledEditForm onSubmit={(e) => e.preventDefault()}>
                <InputBase
                  value={parentUpdateInput}
                  onChange={(e) => setParentUpdateInput(e.target.value)}
                />
                <Box>
                  <Button type="button" onClick={updateList}>
                    Сохранить
                  </Button>

                  <Button type="button" onClick={cancelEditing}>
                    Отмена
                  </Button>
                </Box>
              </StyledEditForm>
            ) : (
              <>
                <Typography className="title">{title}</Typography>

                <StyledIcons isVisible={hoveredItemId === id}>
                  <Button onClick={() => startEditing(id, title)}>
                    <MdModeEdit />
                  </Button>

                  <Button onClick={() => removeList(id)}>
                    <MdDelete />
                  </Button>
                </StyledIcons>
              </>
            )}
          </Box>
          {children?.length > 0 &&
            children.map((child) => <Card key={child.id} cardInfo={child} />)}

          <Box>
            <AddNewTask type="card" parentId={id} />
          </Box>
        </Box>
      ))}

      <Box>
        <AddNewTask />
      </Box>
    </StyledContainer>
  );
};

export default List;

const StyledContainer = styled(Box)(() => ({
  padding: "16px",
  display: "flex",
  alignItems: "flex-start",
  flexWrap: "wrap",
  gap: "20px",
  marginTop: "1rem",
  marginLeft: "2rem",

  "& > .container": {
    marginTop: "10px",
    backgroundColor: "#2e2e2e",
    opacity: "0.7",
    border: "none",
    borderRadius: "1rem",
    width: "20rem",
  },

  "& .box-title": {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "1rem",
    marginTop: "1rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "3rem",
    color: "#fff",
    transition: "color 0.3s ease-in-out",

    "& > .title": {
      marginLeft: "1rem",
      width: "100%",
      maxWidth: "5rem",
    },
  },
}));

const StyledEditForm = styled("form")(() => ({
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
}));

const StyledIcons = styled(Box)(
  () => ({
    display: "flex",
    visibility: "hidden",
    transition: "visibility 0.3s ease-in-out",

    "& > .MuiButton-root": {
      background: "none",
      border: "none",
      cursor: "pointer",
      fontSize: "1rem",
      color: "#fff",
      marginTop: "4px",
      transition: "color 0.3s ease-in-out",

      "& :hover": {
        color: "#1c6cdc",
      },
    },
  }),
  ({ isVisible }) =>
    isVisible && {
      visibility: "visible",
    }
);
