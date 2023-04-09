"use client"
import React from 'react'
import { TopContainer } from './components/TopContainer'
import { ParallaxProvider } from "react-scroll-parallax";
import { Quarters } from './components/Quarters';
import { Features } from './components/Features';
import { Header } from './components/Header';
import { Faq } from './components/Faq';
import { SocialIcons } from './components/SocialIcons';
import { ScrollDown } from './components/ScrollDown';
import { Footer } from './components/Footer';
import ContactSection from './components/ContactSection';

export default function Home() {
  return (
    <ParallaxProvider>
      <Header/>
      <ScrollDown></ScrollDown>
      <SocialIcons/>
      <TopContainer />
      <Quarters/>
      <Features/>
      <Faq/>
      <ContactSection/>
      <Footer />
    </ParallaxProvider>
  )
}
