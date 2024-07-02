import { Button } from "@/components/ui/button";
import Modal from ".";
import { useState } from "react";

function ModalTestComponent() {
  const [showModal, setModal] = useState(false);
  
  const createModal = () => {
    return (
      <Modal width="30vw" height="33vh" title="Delete Confirmation">
        Are you sure you want to delete this alert?
      </Modal>
    );
  };

  return (
    <>
      <Button onClick={() => setModal(!showModal)}>Open Dialog</Button>
      {showModal && createModal()}
    </>
  );
}

export default ModalTestComponent;
