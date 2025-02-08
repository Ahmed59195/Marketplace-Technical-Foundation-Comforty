// components/Modal.tsx
import React from 'react';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;  // Add onConfirm to the props
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null; // Don't render anything if not open

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-2xl font-semibold mb-4">Confirm Your Purchase</h2>
        <p className="mb-4">Are you sure you want to complete your purchase?</p>
        <div className="flex justify-between">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
