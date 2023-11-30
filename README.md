# my-react-modal-sv

This component library is Displays a modal in the center of the screen with a customizable message.

## How to install the Modal

The package can be installed via npm

```bash
npm i my-react-modal-sv
```

## Usage

Import the Modal component from the library:

```bash
import Modal from "my-react-modal-sv";
```

Import CSS (tailwind)

```bash
import 'my-react-modal-sv/dist/style.css';
```

The Modal component needs 3 props :

-   {isOpen} : A property that indicates whether the modal is displayed.
-   {onClose} : A callback function to close the modal.
-   {children} : The content displayed within the modal.

Here's an example:

```jsx
import { useState } from "react";
import Modal from "my-react-modal-sv";
import "my-react-modal-sv/dist/style.css";

function Example() {
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

export default Example;
```

## Interface

![my-react-modal component](exemple.png)
