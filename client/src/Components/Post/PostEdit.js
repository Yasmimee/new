import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {EditPost } from '../../Redux/actions/forumActions'
function Edit({ el }) {
  const [show, setShow] = useState(false);
  const [newtext, setNewtext] = useState(el.text);
  const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="edit">
      <button  className="st-btn" variant="primary" onClick={handleShow}>
        edit
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type="text" value ={newtext} onChange={(e) => setNewtext(e.target.value)} />
        </Modal.Body>
        <Modal.Footer>
          <button  className="st-btn" variant="secondary" onClick={handleClose}>
            Close
          </button>
          <button className="st-btn"
            variant="primary"
            onClick={() => dispatch(EditPost(el.id, newtext))}
          >
            Save Changes
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Edit;