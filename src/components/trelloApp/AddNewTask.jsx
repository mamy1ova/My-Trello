import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addCard, addList } from "../../redux/slices/list-slice";
import { Button, InputBase, styled } from "@mui/material";
import { MdCancelPresentation } from "react-icons/md";
import { toast } from "react-toastify";

const AddNewTask = ({ type, parentId }) => {
  const [inputValue, setInputValue] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(false);
  const dispatch = useDispatch();
  const handleChangeInput = (e) => setInputValue(e.target.value);

  const submitHandler = (e) => {
    e.preventDefault();

    if (inputValue.trim() === "") {
      return toast.error("Заполните поле!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

    const data = {
      title: inputValue,
      id: uuidv4(),
    };
    if (type) {
      dispatch(addCard({ ...data, parentId: parentId }));
    } else {
      dispatch(addList(data));
    }
    hideForm();
    setInputValue("");
  };

  const openForm = () => {
    setIsFormVisible(true);
  };

  const hideForm = () => {
    setIsFormVisible(false);
  };

  return (
    <StyledCard>
      {!isFormVisible && (
        <StyledButton onClick={openForm}>
          + Добавить {type ? "задачу" : "новую колонку"}
        </StyledButton>
      )}
      {isFormVisible && (
        <StyledForm onSubmit={submitHandler}>
          <StyledInput
            value={inputValue}
            onChange={handleChangeInput}
            placeholder={
              type ? "Ввести заголовок карточки" : "Ввести заголовок списка"
            }
          />
          <StyledButtonContainer>
            <StyledSubmitButton type="submit">
              Добавить карточку
            </StyledSubmitButton>
            <StyledCancelButton onClick={hideForm}>
              <MdCancelPresentation />
            </StyledCancelButton>
          </StyledButtonContainer>
        </StyledForm>
      )}
    </StyledCard>
  );
};

export default AddNewTask;

const StyledCard = styled("div")({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  gap: "1rem",
});

const StyledButton = styled(Button)({
  backgroundColor: "#ffffff",
  opacity: " 0.8",
  color: "#737070",
  textTransform: "initial",
  width: "15rem",
  marginBottom: "1rem",
  marginTop: "1rem",
  "&:hover": {
    backgroundColor: "#7c7a7a7a",
    color: "#fff",
    opacity: " 0.7",
  },
});

const StyledButtonContainer = styled("div")({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  marginBottom: "2rem",
});

const StyledForm = styled("form")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#2e2e2e",
  marginTop: "0.8rem",
  borderRadius: "1rem",
  padding: "1rem",
  opacity: "0.7",
  width: "20rem",
});

const StyledInput = styled(InputBase)({
  padding: "8px",
  borderRadius: "4px",
  width: "15rem",
  color: "#737070",
  fontSize: "0.8rem",
  backgroundColor: "#fff",
});

const StyledSubmitButton = styled(Button)({
  margin: "10px 0 ",
  backgroundColor: "#000000",
  opacity: "none",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  fontSize: "0.8rem",
  height: "2rem",
  textTransform: "initial",
  marginRight: "2rem",
  "&:hover": {
    backgroundColor: "#fff",
    color: "black",
  },
});

const StyledCancelButton = styled(Button)({
  color: "#fff",
  border: "none",
  background: "none",
  borderRadius: "4px",
  cursor: "pointer",
  marginLeft: "5px",
  fontSize: "2rem",
  height: "2rem",
});
