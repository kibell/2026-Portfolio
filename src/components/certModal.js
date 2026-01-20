import React, { useEffect, useRef, useState } from "react";
import point from "../images/point.png";

const ANIMATION_DURATION = 500;
const CertModal = ({ name, src, onClose, progress, onMouseEnter, onMouseLeave }) => {
  const [show, setShow] = useState(false);
  const dialogRef = useRef(null);
  const closeTimeout = useRef();

  useEffect(() => {
    // Trigger animation after mount
    setShow(true);
  }, []);

  const handleClose = () => {
    setShow(false); // animate close
    closeTimeout.current = setTimeout(onClose, ANIMATION_DURATION);
  };
  return (
    <div
      className="modal d-block"
      tabIndex="-1"
      style={{
        background: "rgba(0, 0, 0, 0.72)",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 1050,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: `opacity ${ANIMATION_DURATION}ms cubic-bezier(.4,0,.2,1)`,
        opacity: show ? 1 : 0,
      }}
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        className={`modal-dialog cert-modal-animate${show ? " show" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="modal-content halftone-pattern speech-bubble"
          style={{
            backgroundColor: "var(--theme-color-blue)",
            width: "50vw",
            border: "none",
          }}
          onMouseEnter={onMouseEnter}
          onMouseLeave={handleClose}
        >
          <div className={`modal-header  brdr-panel ${progress} halftone-pattern `}>
            <h5 className="modal-title text-white align-items-center text-center">
              {name}
            </h5>
            <button type="button" className="btn-close" onClick={onClose} />
          </div>
          <div className="modal-body comic-panel d-flex justify-content-center align-items-center">
            <img
              src={src}
              alt={name}
              className=""
              style={{  width: "50vw" }}
            />
          </div>
          <img
            src={point}
            alt="pointing arrow"
            className="cert-modal-arrow"
            style={{position: "absolute", bottom: "-24rem", left: "-16rem", width: "95%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default CertModal;
