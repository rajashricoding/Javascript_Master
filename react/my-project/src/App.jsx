import Welcome from "./components/Welcome"
import Button from "./components/Button"
import Cards from "./components/Card"
import Card from "./components/Card"

export default function App() {
  const data = [
    {
      id:1,
      name: "Arshi",
      age:20,
      img:"lake.jpg",
    },
    {
      id:2,
      name: "Nisha",
      age:19,
      img:"lake.jpg",
    },
    {
      id:3,
      name: "Nayna",
      age:20,
      img:"lake.jpg",
    }
  ]

return (
<>
<div className="flex align-center justify-center flex-col items-center">

<Welcome />
<div className="w-full min-h-screen flex justify-center  ">
<div className="h-[28rem] w-[80%] bg-slate-300 container grid grid-cols-2 gap-4 items-center mt-8">  
   <div className="p-8 flex flex-col gap-8">
     <h1 className="font-bold text-[2.5rem]">
      Lorem ipsum dolor sit amet.
     </h1>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores beatae aliquid quibusdam tenetur minus, nulla nostrum dolore quis. Explicabo, minima.</p>
     <Button />
   </div>
   <div>
      <img className="h-[25rem]" src="lake.jpg" alt="" />
   </div>
</div>
</div>
<section className="w-full min-h-48 bg-slate-300 py-8">
  <div className="container bg-blue-500 mx-auto mt-8 place-items-center grid grid-cols-3 gap-4">
     {/* {
      data.map((user) => {
        return (
         <Card />
        )       
      })
     } */}
  </div>
</section>
</div>
</>
)
}