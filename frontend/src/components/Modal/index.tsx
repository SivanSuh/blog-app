import Style from "./style.module.css";
import ModalProp from "./props";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import Button from "../Atoms/Button";

const Modal: React.FC<ModalProp> = ({
  close,
  open = false,
  title,
  onClick,
}) => {
  return (
    <>
      {open && (
        <div className={Style.modal}>
          <div className={Style.modalContainer}>
            <div className={Style.flexStructure}>
              <h3>{title ? title : "Modal Title"}</h3>
              <div onClick={() => close?.(false)} className={Style.close}>
                <AiOutlineClose size={30} />
              </div>
            </div>
            <div
              className={Style.areYouSure}
            >{`${title} blogunu silmek istedigine emin misin?`}</div>
            <Button buttonName="Sil" onClick={onClick} />
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
