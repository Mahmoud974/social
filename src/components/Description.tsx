
import { NavLink, useParams } from 'react-router-dom'
import Navigateur from './Navigateur';
import {IoIosArrowDropleft} from "react-icons/io";
import {AiOutlineComment, AiOutlineHeart} from 'react-icons/ai';


const Description = () => {
let {id} = useParams()
console.log({id});

   
  return (
     <div className="flex ">

        <Navigateur/>
      <div className="absolute left-20 mt-4">
                <div className="ml-4 flex items-center">
         <NavLink to='/'>
             <IoIosArrowDropleft className="text-3xl cursor-pointer hover:text-purple-500"/>
           </NavLink>
        <h1 className="text-2xl font-bold ml-4">
            Discussion
        </h1>

      </div>
      </div>

  <div className="flex flex-col ml-20 mt-32 mr-4" >
 
        <img src="/assets/image-juliusomo.webp" alt="profil photo" className="w-12 h-12"/>
        {/* Name, Pseudo, time, Status */}
      <div className="ml-4">
      <div className="flex flex-row">
        <p className="font-bold " >
    ok
      </p>
       <p className="ml-2 text-gray-400">
      ok
      </p>
      <p className="ml-1 text-gray-400">
        {/* //TODO:  À FAIRE*/}
  ok
      
      </p>
      </div>
      <p className="">
        okokko
      </p>
      <div className="mt-4">
      <img src={`https://source.unsplash.com/random/?Games/${Math.random()}"`} alt="crypto"  className="rounded-xl"/>
  </div>
  {/* Comments and Likes */}
  <div>
    <div className='flex justify-end space-x-3 '>
      <div className='flex mt-3 text-gray-500'>
      <AiOutlineComment className='text-2xl'/> 
    <p className='ml-1'>
      205
    </p>
    </div>
    <div className='flex mt-3 text-gray-500'>
      <AiOutlineHeart className='text-2xl'/> 
    <p className='ml-1'>
      205
    </p>
    </div>
    </div>
  </div>
      </div>

  
      
    </div>

    </div>
  )
}

export default Description