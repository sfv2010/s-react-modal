import { useState } from "react";
import Modal from "./modal";

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

        // ここでフォームの送信処理を行います

        // モーダルを開く
        openModal();
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <button type="submit">Submit Form</button>
            </form>

            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <h1>Employee created !</h1>
            </Modal>
        </div>
    );
}

export default App;
