import React from "react";
import ReactDOM from "react-dom";
import "@styles/dashboard.css";

interface ClothesModalProps {
    isOpen: boolean,
    onClose: () => void,
    children?: React.ReactNode
}

export default function ClothesModal({ isOpen, onClose, children }: ClothesModalProps) {
    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div className="modal-overlay">
            <div className="modal">
                <button onClick={onClose} className="modal-close">Close</button>
                {children}
            </div>
        </div>,
        document.getElementById("modal-root") as HTMLElement
    );
}
