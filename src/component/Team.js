import React from "react";
import Modal from "./Modal";
import useModal from "../hooks/useModal";
import TeamSeasonGames from "./TeamSeasonGames";

const Team = ({ team }) => {
  const { modal, openModal, closeModal } = useModal();
  const modalRef = React.createRef();

  return (
    <>
      <Modal open={modal} onClose={closeModal} ref={modalRef}>
        <TeamSeasonGames teamId={team.id} />
      </Modal>
      <li onClick={openModal} className="card">
        <p>City: {team.city}</p>
        <p>Name: {team.full_name}</p>
        <p>Abbreviation: {team.abbreviation}</p>
        <p>Conference: {team.conference}</p>
        <p>Division: {team.division}</p>
      </li>
    </>
  );
};

export default Team;
