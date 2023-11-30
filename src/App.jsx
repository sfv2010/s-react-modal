import { useState } from "react";
import Modal from "./lib/modal";

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        openModal();
    };

    return (
        <div>
            <form
                onSubmit={handleSubmit}
                className="flex justify-center  items-center h-screen">
                {" "}
                <label className=" text-black font-bold  pr-4">
                    User:{" "}
                    <input
                        type="text"
                        name="username"
                        className="bg-gray-200 appearance-none border-2 border-gray-400 rounded py-2 px-4 text-gray-700 leading-tight focus:bg-white focus:outline-green-700 "
                    />
                </label>
                <button
                    type="submit"
                    className="rounded border-solid border-2 border-custom-505 font-bold p-3">
                    Submit Form
                </button>
            </form>

            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <h1>Example created !</h1>
            </Modal>
        </div>
    );
}

export default App;
