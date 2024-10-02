import CategoryComponent from "./categoryComponent"

const page = ({params}:{params:{ category:string}}) => {
 
 
 
  return (
    <div  className='mt-[50px] mb-[100px]'>
      <CategoryComponent params={params}/>
    </div>
  )
}

export default page