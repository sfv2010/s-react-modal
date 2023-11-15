import PropTypes from "prop-types";

function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-custom-505 bg-opacity-50 ">
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 w-1/2 text-center font-bold font-serif text-xl text-custom-505 rounded-xl border-solid border-8 border-custom-505 ">
                <div className="absolute -top-5 -right-4">
                    {" "}
                    <span className="relative flex h-8 w-8">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-custom-505 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-8 w-8 bg-custom-505"></span>
                    </span>
                    <span
                        className="absolute top-1/2 light-1 transform -translate-x-1/2 -translate-y-1/2 inline-flex text-white cursor-pointer"
                        onClick={onClose}>
                        &times;
                    </span>
                </div>

                {/* <span
                    className="absolute -top-2 -right-2 text-black cursor-pointer animate-pulse"
                    onClick={onClose}>
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <circle
                            cx="12"
                            cy="12"
                            r="10"
                            className="fill-current text-black"
                        />
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            stroke="white"
                            d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </span> */}
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
