import Button from "./Button"

export default function Welcome() {
    return (
    <>
    <nav className="bg-black w-full text-white p-4 flex justify-around align-center">
        <div className="flex items-center font-bold">
            <h2>Arshi</h2>
        </div>
        <div className="flex gap-8 items-center">
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Testimonial</a>
            <a href="">Contact</a>
        <Button />
        </div>
    </nav>
    </>
    );
    }