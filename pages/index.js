import React, { useState } from "react";
import LoginModal from "../components/auth/LoginModal";
import LandingNavigationBar from "../components/LandingNavbar";

const LandingPage = () => {
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <LandingNavigationBar>
      {open && <LoginModal />}
      <h1 style={{ backgroundColor: "black", color: "white" }}>
        펫구루 랜딩페이지입니다.
      </h1>
    </LandingNavigationBar>
  );
}

export default LandingPage;
