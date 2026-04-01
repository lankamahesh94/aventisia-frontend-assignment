import { useState } from "react";
import Home from "./pages/Home";
import Modal from "./components/Modal";

export default function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Home openModal={() => setShowModal(true)} />

      {showModal && (
        <Modal close={() => setShowModal(false)} />
      )}
    </>
  );
}