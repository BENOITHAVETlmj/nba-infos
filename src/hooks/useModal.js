import { useCallback, useState } from "react";

const useModal = () => {
  const [modal, setModal] = useState(false);
  const openModal = useCallback(() => {
    setModal(true);
  }, [setModal]);
  const closeModal = useCallback(() => {
    setModal(false);
  }, [setModal]);
  return { modal, openModal, closeModal };
};

export default useModal;
