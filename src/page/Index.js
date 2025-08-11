import { useState } from "react";
import { FaHome, FaPhone, FaTools } from "react-icons/fa";


function Index() {
  /*const nom = "Cibelle Allade"*/
  const [open, setOpen] = useState(false);
  return (
    /*<div className= " flex items-center justify-center h-screen ">
   <h1 className=" text-primary text-3xl font-bold ">
      Hello <span className=" text-secondary underline">{nom}!</span>
    </h1>
    
    </div>*/
    <nav  className=" bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
      <div  className="text-2xl font-bold">Cibelle01</div>
      <ul  className="hidden md:flex space-x-6">
        <li>
          <a  href="#" className="flex items-center gap-2 hover:text-gray-300 ">
          <FaHome size={20}/>
          <span>Accueil</span>
          </a>
          </li>
        <li>
          <a  href="#"  className="flex items-center gap-2 hover:text-gray-300 ">
          <FaTools size={20}/>
          <span>Services</span>
          
          </a>
          </li>
        <li>
          <a  href="#"  className="flex items-center gap-2 hover:text-gray-300 ">
          <FaPhone size={20}/>
        <span>Contact</span>
        </a>
        </li>
      </ul>
       <button 
          onClick={() => setOpen(!open)} 
          className="md:hidden focus:outline-none"
        >
          ☰
        </button>
      </div>
          {open && (
        <div className="md:hidden bg-black px-4 pb-4">
          <ul className="space-y-2">
            <li><a href="#" className="flex items-center gap-2 hover:text-gray-300 ">Accueil<FaHome size={20}/></a></li>
            <li><a href="#" className="flex items-center gap-2 hover:text-gray-300 ">Services<FaTools size={20}/></a></li>
            <li><a href="#"  className="flex items-center gap-2 hover:text-gray-300 ">Contact<FaPhone size={20}/></a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Index;