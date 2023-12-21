import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "./Modal.css";

/**
 * Modal component for displaying content in a modal dialog.
 *
 * @component
 * @param {Object} props - The properties of the component.
 * @param {boolean} props.isOpen - Determines whether the modal is open or closed.
 * @param {Function} props.onClose - Callback function to be called when the modal is closed.
 * @param {ReactNode} props.children - The content to be displayed inside the modal.
 * @returns {JSX.Element} - The rendered Modal component.
 */

function Modal({ isOpen, onClose, children }) {
    const closeRef = useRef();

    const closeModal = () => {
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
    }, [onClose]);
    return (
        <div
            data-testid="my-react-modal-container"
            id="my-react-modal-container"
            className={`fixed inset-0 bg-slate-950
            bg-opacity-50 transition-opacity ${
                isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            onClick={closeModal}>
            <div
                className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-7 sm:p-8 w-3/4 sm:w-1/2 xl:w-1/3 text-center font-bold font-sans text-2xl md:text-3xl text-custom-505 rounded-xl border-solid border-8 border-custom-505 shadow-lg shadow-black  transition-transform ${
                    isOpen
                        ? "scale-100 transition-all ease-out duration-500"
                        : "scale-90"
                }`}
                onClick={(e) => e.stopPropagation()}>
                <div className="absolute -top-6 -right-5">
                    {" "}
                    <span className="relative flex h-10 w-10">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-custom-505 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-10 w-10 bg-custom-505"></span>
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
    children: PropTypes.node,
};

export default Modal;
