import SlugPage from "./slugPage";

 

const slug = ({params}:{params:{slug:string}}) => {
  
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <SlugPage params={params}/>
      </section>
    </div>
  );
};

export default slug;
