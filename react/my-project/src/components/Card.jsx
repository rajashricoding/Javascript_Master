export default function Card() {
    return (
    <>
    <div key={user.id} className="p-4 w-64 rounded-lg justify-center items-center"> 
       <img className="w-48 h-48" src={user.img} alt="" />
       <div className="px-4 text-center">  
        <h2 className="font-bold text-2xl">{user.name}</h2>
        <p className="font-semibold text-xl">{user.age}</p>
       </div>
    </div>
    </>
    );
    }