import { Button } from "@/components/ui/button";
import { Close } from "@mui/icons-material";
import { createPortal } from "react-dom";
import ModalBackdrop from "./backdrop";

function Modal(props) {
    const modalOverlayWrapper = document.getElementById("modal-overlay")!
    const modalBackdropWrapper = document.getElementById("modal-backdrop'")!

    if(!modalOverlayWrapper){
        createModalOverlayNode();
    }

    if(!modalBackdropWrapper){
        createModalBackdropNode();
    }
    
    

  function closeModal(){
    const modalOverlay = document.getElementById('modal-overlay')!;
    const modalBackdrop = document.getElementById('modal-backdrop')!;

    modalOverlay.remove();
    modalBackdrop.remove()
    
  }

  // w-[${width}] h-[${height}]
  return (
    <>
      {createPortal(
        // backdrop
        <div className="bg-white 
                        z-20 absolute top-[50%] left-[50%] r-[50%] 
                        -translate-x-[50%] -translate-y-[50%] 
                        rounded border-2 "
        >
          {/* Modal */}
          <section
            className={`w-[${props.width}] h-[${props.height}] min-w-[${props.width}]`}
          >
            <div className="header bg-black text-white flex justify-between p-4">
              <div className="title font-[900] text-[18px]">{props.title}</div>
              <button onClick={closeModal}>
                <Close className="cursor-pointer"/>
              </button>
            </div>
            <div className="content p-3 pt-5 text-start text-[16px]">
              {props.children}
            </div>
            <div className="action-btns mt-6 flex gap-4 justify-end items-center px-4 pb-3">
              <Button variant="secondary" className="w-28">
                Close
              </Button>
              <Button className="w-28">Save</Button>
            </div>
          </section>
        </div>,
        modalOverlayWrapper
      )}

      {createPortal(
        <ModalBackdrop />,
        modalBackdropWrapper
      )}
    </>
  );
}

function createModalOverlayNode(){
    const element : HTMLElement = document.createElement('div')
    element.setAttribute('id', 'modal-overlay');
    document.body.appendChild(element);
}

function createModalBackdropNode(){
    const element : HTMLElement = document.createElement('div')
    element.setAttribute('id', 'modal-backdrop');
    document.body.appendChild(element);
}

export default Modal;
