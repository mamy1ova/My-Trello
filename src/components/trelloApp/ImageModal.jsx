import { useState, useEffect } from "react";
import { Modal, Button, InputBase, Grid, styled, Box } from "@mui/material";
import { IMAGES } from "../../utils/constants";

const body = document.getElementById("root");

const ImageModal = ({ isOpen, onClose, onBackgroundChange }) => {
  const [newBackground, setNewBackground] = useState("");
  const [rootBackground, setRootBackground] = useState("");

  useEffect(() => {
    setRootBackground(newBackground);
  }, [newBackground]);

  const handleBackgroundChange = () => {
    onBackgroundChange(newBackground);
    setNewBackground("");
    body.style.backgroundImage = `url(${newBackground})`;
  };

  const handleImageSelection = (image) => setNewBackground(image);

  return (
    <Modal open={isOpen} onClose={onClose}>
      <StyledContainer>
        <Box className="content">
          <Box
            className="images"
            style={{ backgroundImage: `url(${rootBackground})` }}
          >
            <InputBase
              className="input"
              placeholder="Ссылка фотографии"
              value={newBackground}
              onChange={(e) => setNewBackground(e.target.value)}
            />

            <Button onClick={handleBackgroundChange}>Изменить</Button>
            <Button onClick={onClose}>Отмена</Button>
          </Box>

          <Grid container spacing={1}>
            {IMAGES.map((image) => (
              <Grid item key={image}>
                <Box
                  className="box"
                  style={{ backgroundImage: `url(${image})` }}
                  onClick={() => handleImageSelection(image)}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </StyledContainer>
    </Modal>
  );
};

export default ImageModal;

const StyledContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",

  "& .content": {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: "8px",
    padding: "20px",
  },

  "& .images": {
    width: "400px",
    height: "300px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    marginBottom: "20px",
  },

  "& .input": {
    border: "none",
    backgroundColor: "#fff",
    borderBottom: "none",
    borderRadius: "4px",
    padding: "5px",
    fontSize: "0.8rem",
    marginBottom: "10px",
  },

  "& .box": {
    width: "50px",
    height: "50px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    cursor: "pointer",
  },
});
