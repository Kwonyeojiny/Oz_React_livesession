import { useCallback, useEffect, useState } from "react";
import "./App.css";
import Box from "./Box";
import useModal from "./hooks/useModal";
import Modal from "./components/Modal";
import Post from "./components/Post";
import PostAdd from "./components/PostAdd";

function App() {
  const { isOpen, openModal, closeModal } = useModal();
  return (
    <div>
      <PostAdd />
      <Post />

      <button onClick={openModal}>모달 열기</button>
      {isOpen && (
        <Modal>
          <h2>모달입니다</h2>
          <button onClick={closeModal}>모달 닫기</button>
        </Modal>
      )}
    </div>
  );
}

export default App;
