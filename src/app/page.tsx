 
 "use client"
 import AddTocardToast from '@/components/addTocardToast'
import Crousel from '@/components/Crousel'
import BestSelling from '@/components/ui/bestSelling'
import Categorie from '@/components/ui/categorie'
import Hero from '@/components/ui/hero'
import Promotions from '@/components/ui/promotions'
import Services from '@/components/ui/services'
import React from 'react'

function page({params}:any) { 
  console.log(params,"in home page")
  return (
    <div  className='pb-[100px] '> 
      <Hero/>
      <Crousel />
      <Services/>
      <Promotions/>
      <Categorie />
      <BestSelling  />
    </div>
  )
}

export default page