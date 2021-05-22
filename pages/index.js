import React, {useState} from 'react'
import Head from 'next/head'
import LoginModal from '../components/auth/LoginModal'
import LandingNavigationBar from '../components/LandingNavbar'

export default function LandingPage() {
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  }

  const closeModal = () => {
    setOpen(false);
  }
  
  return (
    <LandingNavigationBar>
      {open && <LoginModal />}
      <h1>펫그루 랜딩페이지입니다.</h1>
    </LandingNavigationBar>
  );
}
