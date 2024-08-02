"use client";
import React    from 'react';
import Modal    from 'react-bootstrap/Modal';

interface ClothesModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export default function ClothesModal({ isOpen, onClose, children }: ClothesModalProps) {
    return (
        <Modal show={isOpen} onHide={onClose} centered>
            <Modal.Body>{children}</Modal.Body>
        </Modal>
    );
}


