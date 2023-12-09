import React, { useState, useEffect } from "react";
import { Modal, Button, InputBase, Grid, styled } from "@mui/material";
const body = document.getElementById("root");
const ImageModal = ({ isOpen, onClose, onBackgroundChange }) => {
  const [newBackground, setNewBackground] = useState("");
  const [rootBackground, setRootBackground] = useState("");

  const sampleImages = [
    "https://img.freepik.com/free-photo/tall-trees-forest-mountains-covered-with-fog_181624-11289.jpg?w=1800&t=st=1701666982~exp=1701667582~hmac=4890d089b0016e91144f0ef283fc4e34bd145779bd852041c2e5111ec70d6c77",
    "https://img.freepik.com/free-photo/beautiful-shot-forest-with-tall-green-trees_181624-20615.jpg?size=626&ext=jpg&uid=R110393921&ga=GA1.1.284647328.1701093593",
    "https://img.freepik.com/free-photo/river-surrounded-by-forests-cloudy-sky-thuringia-germany_181624-30863.jpg?size=626&ext=jpg&uid=R110393921&ga=GA1.1.284647328.1701093593",
    "https://plus.unsplash.com/premium_photo-1700937465661-0a606e010fd8?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1682685797857-97de838c192e?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8",
    "https://img.freepik.com/free-photo/beautiful-shot-grassy-hills-covered-trees-near-mountains-dolomites-italy_181624-24400.jpg?size=626&ext=jpg&uid=R110393921&ga=GA1.1.284647328.1701093593",
    "https://img.freepik.com/free-photo/sky-full-stars-silhouettes-trees_181624-12446.jpg?w=1800&t=st=1701668463~exp=1701669063~hmac=4df194accdc86f85ddee0f737bbcdae81f3a5c3d7b583cfdec87490996fc73b6",
  ];

  useEffect(() => {
    setRootBackground(newBackground);
  }, [newBackground]);

  const handleBackgroundChange = () => {
    onBackgroundChange(newBackground);
    setNewBackground("");
    body.style.backgroundImage = `url(${newBackground})`;
  };

  const handleImageSelection = (image) => {
    setNewBackground(image);
  };

  return (
    <Modal open={isOpen} onClose={onClose}>
      <StyledModal>
        <StyledContent>
          <StyledImage style={{ backgroundImage: `url(${rootBackground})` }}>
            <StyledInput
              placeholder="Ссылка фотографии"
              value={newBackground}
              onChange={(e) => setNewBackground(e.target.value)}
            />
            <Button onClick={handleBackgroundChange}>Изменить</Button>
          </StyledImage>
          <Grid container spacing={1}>
            {sampleImages.map((image) => (
              <Grid item key={image}>
                <StyledThumbnail
                  style={{ backgroundImage: `url(${image})` }}
                  onClick={() => handleImageSelection(image)}
                />
              </Grid>
            ))}
          </Grid>
        </StyledContent>
      </StyledModal>
    </Modal>
  );
};

export default ImageModal;

const StyledModal = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
});

const StyledContent = styled("div")({
  backgroundColor: "rgba(255, 255, 255, 0.8)",
  borderRadius: "8px",
  padding: "20px",
});

const StyledImage = styled("div")({
  width: "400px",
  height: "300px",
  backgroundSize: "cover",
  backgroundPosition: "center",
  position: "relative",
  marginBottom: "20px",
});

const StyledInput = styled(InputBase)({
  border: "none",
  backgroundColor: "#fff",
  borderBottom: "none",
  borderRadius: "4px",
  padding: "5px",
  fontSize: "0.8rem",
  marginBottom: "10px",
});

const StyledThumbnail = styled("div")({
  width: "50px",
  height: "50px",
  backgroundSize: "cover",
  backgroundPosition: "center",
  cursor: "pointer",
});
