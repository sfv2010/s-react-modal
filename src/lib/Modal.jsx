import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

function Modal({ isOpen, onClose, children }) {
    const [modalVisible, setModalVisible] = useState(isOpen);
    const closeRef = useRef();

    useEffect(() => {
        if (isOpen) {
            setModalVisible(true);
        } else {
            setTimeout(() => setModalVisible(false), 300);
        }
    }, [isOpen]);

    const closeModal = () => {
        setModalVisible(false);
        onClose();
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                onClose();
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        closeRef.current.focus();

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [onClose, modalVisible]);
    return (
        <div
            className={`fixed inset-0 bg-black
            bg-opacity-50 transition-opacity ${
                modalVisible ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            onClick={closeModal}>
            <div
                className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 sm:p-8 w-3/4 sm:w-1/2 xl:w-1/3 text-center font-bold font-sans sm:text-xl md:text-3xl text-custom-505 rounded-xl border-solid border-8 border-custom-505  transition-transform ${
                    modalVisible
                        ? "scale-100 transition-all ease-out duration-300"
                        : "scale-90"
                }`}
                onClick={(e) => e.stopPropagation()}>
                <div className="absolute -top-5 -right-4">
                    {" "}
                    <span className="relative flex h-8 w-8">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-custom-505 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-8 w-8 bg-custom-505"></span>
                    </span>
                    <button
                        className="absolute top-1/2 light-1 transform -translate-x-1/2 -translate-y-1/2 inline-flex text-white cursor-pointer"
                        onClick={closeModal}
                        ref={closeRef}>
                        &times;
                    </button>
                </div>
                {children}
            </div>
        </div>
    );
}

Modal.propTypes = {
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
    children: PropTypes.object,
};

export default Modal;
