import {AiFillHome} from 'react-icons/ai'
import {FaBell} from 'react-icons/fa'
import {CgProfile} from 'react-icons/cg'
import {SiApostrophe} from 'react-icons/si'
import {ImPencil2} from 'react-icons/im'
import {AiFillHeart} from 'react-icons/ai'
import {MdEmail} from 'react-icons/md'
import { NavLink } from 'react-router-dom'


const Navigateur = () => {
  return (
    <nav className='flex  fixed'>
      <div className='ml-4 mt-3 flex '>


      <ul className='flex flex-col space-y-6 items-center'>
        <NavLink to='/'>
        <li>
          <SiApostrophe className='text-5xl hover:text-purple-500 cursor-pointer'/>
        </li>
        </NavLink>
        <NavLink to='/'>
           <li>
          <AiFillHome className='text-3xl hover:text-purple-500 cursor-pointer'/>
        </li>
        </NavLink>
        <li>
          
          <FaBell className='text-3xl hover:text-purple-500 cursor-pointer'/>
        </li>
        <li>
          
          <AiFillHeart className='text-3xl hover:text-purple-500 cursor-pointer'/>
        </li>
       <NavLink to='/profil'>
         <li>
          
          <CgProfile className='text-3xl hover:text-purple-500 cursor-pointer'/>
        </li>
       </NavLink>
          <li>
          
          <MdEmail className='text-3xl hover:text-purple-500 cursor-pointer'/>
        </li>
        <li>
          
         <div className='bg-purple-700 hover:bg-purple-800 hover:text-gray-300 p-3 rounded-full'>
          <ImPencil2 className='text-2xl  cursor-pointer '/>
         </div>
        </li>
        <NavLink to='/profil'>
          <li>
          
          <img src="/assets/image-juliusomo.webp" alt="profil photo" className='w-12 mt-6' />
        </li>
        </NavLink>
      </ul>
    </div>
    <div className='bg-gray-500 w-[0.2vh] ml-6 left-14 h-full fixed'>

    </div>
    </nav>
  )
}
export default Navigateur