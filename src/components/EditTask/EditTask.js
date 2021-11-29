import React, { useState } from "react";
import { editTask } from "../../JS/actions/actions";
import { useDispatch } from "react-redux";
import {Button, Modal} from 'react-bootstrap'

const EditTask = ({ name, id }) => {
  const [newEdit, setNewEdit] = useState(name);
  const dispatch = useDispatch();
  const handleEdit = () => {
    dispatch(editTask({ description: newEdit, id:id }));
    console.log(id)
  };


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      {/* <input
        type="text"
        value={newEdit}
        onChange={(e) => setNewEdit(e.target.value)}
      />

      <button onClick={handleEdit}> Edit</button> */}

<Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Todo</Modal.Title>
        </Modal.Header>
        <input
        type="text"
        value={newEdit}
        onChange={(e) => setNewEdit(e.target.value)}
      />
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{handleEdit();handleClose()}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditTask;
