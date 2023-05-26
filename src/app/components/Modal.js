import { useEffect, useState } from "react";
import ReactModal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "550px",
    color: "#F0E6D2",
    border: "1px solid #C89B3C",
    backgroundColor: "#1E2328",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
ReactModal.setAppElement("#page");

export default function Modal(props) {
  const { selectedCharacter, setSelectedCharacter } = props;
  const [modalIsOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
    setSelectedCharacter(null);
  }

  function openModal() {
    setIsOpen(true);
  }

  useEffect(() => {
    if (selectedCharacter) {
      openModal();
    }
  }, [selectedCharacter]);

  if (!selectedCharacter) {
    return null;
  }

  return (
    <div className="w-8">
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 className="font-sans">{selectedCharacter.name}</h2>
        <br />
        <p className="font-sans">{selectedCharacter.description}</p>

        <p className="font-sans">
          Comics: {selectedCharacter.comics.available}
        </p>
        <p className="font-sans">
          Movies: {selectedCharacter.series.available}
        </p>
        <p className="font-sans">
          Storied: {selectedCharacter.stories.available}
        </p>
      </ReactModal>
    </div>
  );
}
