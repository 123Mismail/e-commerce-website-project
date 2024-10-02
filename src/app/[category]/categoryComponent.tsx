 "use client"
import CardsComponent from '@/components/cardsComponent'
import { useAppSelector } from '../store/hooks'

const CategoryComponent = ({params}:{params:{category:string}}) => {
    const products=useAppSelector((state)=>state.product);
    const cardItems=products.filter((value)=> value.category == params.category); 
    
    

  return (
    <div>
              {/*heading starts  */}
      <div className="text-center mb-20">
          <h1 className="capitalize  scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-4xl   ">
            {params.category}
          </h1>
          <p className="capitalize pt-2 text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
           all Kind Of {params.category} here.
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
          </div>
        </div>
        {/* heading ends */}
        {/* card stars here */}
<div className='flex flex-wrap justify-center  gap-12'>
 
 {
     cardItems.map((items:any,id)=>(
         <CardsComponent 
         key={id}
         src={items.image[0]}
         alt={items.slug}
         title={items.title}
         price={items.price}
         description={items.description} 
         category={items.category}
         slug={items.slug}
         discount={items.discount}

         />
     ))
 }
 </div>
    </div>
  )
}

export default CategoryComponent