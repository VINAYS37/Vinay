// import React, { useState } from 'react';
// import './App.css'; // You might need this for additional styling

// function Bcolor() {
//   const [backgroundColor, setBackgroundColor] = useState('#ffffff'); // Default white background

//   const handleColorChange = (color) => {
//     setBackgroundColor(color);
//     document.body.style.backgroundColor = color; // Change the background color of the body
//   };

//   return (
//     <div className="Bcolor">
//       <button onClick={() => handleColorChange('#ff0000')}>Red</button>
//       <button onClick={() => handleColorChange('#00ff00')}>Green</button>
//       <button onClick={() => handleColorChange('#0000ff')}>Blue</button>
//       <button onClick={() => handleColorChange('#ffff00')}>Yellow</button>
//       <button onClick={() => handleColorChange('#00ffff')}>Cyan</button>
//       <button onClick={() => handleColorChange('#ff00ff')}>Magenta</button>
//       <button onClick={() => handleColorChange('#efa49f')}>pink</button>
//     </div>
//   );
// }

// export default Bcolor;

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

function StaticExample() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default StaticExample;
