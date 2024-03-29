import { useState } from "react";
import Image from "../../assets/images/background.jpg";
import ImageModal from "./ImageModal";
import { RiImageEditFill } from "react-icons/ri";
import { styled } from "@mui/system";

const ModalContainer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState(Image);

  const handleOpenModal = () => setIsModalOpen(true);

  const handleCloseModal = () => setIsModalOpen(false);

  const handleBackgroundChange = (newBackground) => {
    setBackgroundImage(newBackground);
    handleCloseModal();
  };

  return (
    <>
      <StyledButton onClick={handleOpenModal}>
        <RiImageEditFill />
      </StyledButton>

      <ImageModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        backgroundImage={backgroundImage}
        onBackgroundChange={handleBackgroundChange}
      />
    </>
  );
};

export default ModalContainer;

const StyledButton = styled("button")({
  background: "none",
  border: "none",
  color: "#fff",
  fontSize: "1.7rem",
  marginRight: "1rem",
});
