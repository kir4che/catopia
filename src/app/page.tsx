"use client"

import Banner from '@/components/Banner'
import CatBenefits from '@/components/CatBenefits'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import MostSearched from '@/components/MostSearched'


export default function Home() {
  return (
    <main className='container flex flex-col h-screen mx-auto'>
      <Header />
      <Banner />
      <MostSearched />
      <CatBenefits />
      <Footer />
    </main>
  )
}