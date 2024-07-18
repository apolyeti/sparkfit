"use client";
import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

interface ClothesModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export default function ClothesModal({ isOpen, onClose, children }: ClothesModalProps) {
    return (
        <Modal show={isOpen} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>{children}</Modal.Body>
            <Button variant="secondary" onClick={onClose}>
                Close
            </Button>
        </Modal>
    );
}


