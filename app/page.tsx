"use client"
import React from 'react'
import { TopContainer } from './components/TopContainer'
import { ParallaxProvider } from "react-scroll-parallax";
import { Quarters } from './components/Quarters';
import { Features } from './components/Features';
import Bgblob from './components/BgBlob';
import { Header } from './components/Header';
import { Faq } from './components/Faq';
import { SocialIcons } from './components/SocialIcons';
import { ScrollDown } from './components/ScrollDown';
import { Footer } from './components/Footer';

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
      <Footer />
    </ParallaxProvider>
  )
}
