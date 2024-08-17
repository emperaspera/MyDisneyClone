import React from 'react';

function Modal({ children, onClose }) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 px-4">
            <div className="relative bg-[#14151F] rounded-lg p-6 max-w-5xl w-full max-h-[90vh] overflow-y-auto mx-4">
                <button
                    className="absolute top-2 right-2 text-gray-600 hover:text-blue-500"
                    onClick={onClose}
                >
                    &#x2715;
                </button>
                {children}
            </div>
        </div>
    );
}

export default Modal;
