import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { db } from "../../../ConfigFirebase/config";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
const PostJob = () => {
  const loggedinUser = JSON.parse(localStorage.getItem("loggedInRecruiter"));
  const [jobDetails, setJobDetails] = useState({
    jobRole: "",
    company: "",
    jd: "",
  });
  const [openModal, setOpenModal] = useState(false);
  const handleClick = () => {
    setOpenModal(true);
  };
  const handleClose = () => {
    setOpenModal(false);
  };

  const handleJobPosting = async () => {
    const recruiterDocRef = doc(
      db,
      "recruiters",
      loggedinUser.user.displayName
    );
    await updateDoc(recruiterDocRef, {
      jobs: arrayUnion(jobDetails),
    });
    alert("job posted");
    handleClose();
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "3rem",
      }}
    >
      <Button variant="outline-primary" onClick={handleClick}>
        Primary
      </Button>

      <Modal show={openModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Post Job</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form style={{ maxWidth: 500, margin: "auto" }} id="form">
            <Form.Group className="mb-3">
              <Form.Label>JobRole</Form.Label>
              <Form.Select
                aria-label="Default select example"
                onChange={(e) =>
                  setJobDetails({ ...jobDetails, jobRole: e.target.value })
                }
                required
              >
                <option>Open this select menu</option>
                <option value="frontend">FE developer</option>
                <option value="backend">BE developer</option>
                <option value="fullstack">Fullstack Developer</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>company :--</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="company here"
                onChange={(e) =>
                  setJobDetails({ ...jobDetails, company: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>jobDescription :--</Form.Label>
              <Form.Control
                required
                as="textarea"
                onChange={(e) =>
                  setJobDetails({ ...jobDetails, jd: e.target.value })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleJobPosting}>
            Post
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default PostJob;
