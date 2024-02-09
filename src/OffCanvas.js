import React, { useState } from 'react';
import './Offcanvas.css'; // You will need to create this CSS file for styling

const OffCanvas = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleOffCanvas = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
     <CButton onClick={() => setVisible(true)}>Enable both scrolling &amp; backdrop</CButton>
    <COffcanvas placement="start" scroll={true} visible={visible} onHide={() => setVisible(false)}>
      <COffcanvasHeader>
        <COffcanvasTitle>Backdrop with scrolling</COffcanvasTitle>
        <CCloseButton className="text-reset" onClick={() => setVisible(false)} />
      </COffcanvasHeader>
      <COffcanvasBody>
        Try scrolling the rest of the page to see this option in action.
      </COffcanvasBody>
    </COffcanvas>
    </>
  );
};

export default OffCanvas;
