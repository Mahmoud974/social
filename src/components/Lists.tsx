import {AiOutlineComment, AiOutlineHeart} from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { ExtendedUser } from '../share/module'



  interface DHours {
  hour: string,
  minute: string
}


const Lists = () => {
  const otherUsers = useSelector((home) => home.profilUser.otherUsers)
  console.log(otherUsers);

  return (
   <div>
   {
    otherUsers.map((profil:ExtendedUser, index: number) =>   <NavLink to={`/description/${profil}`} key={index}>
      <div className="flex flex-col ml-4 mt-6 mr-4" >
    <div className="flex">
        <img src="/assets/image-juliusomo.webp" alt="profil photo" className="w-12 h-12"/>
        {/* Name, Pseudo, time, Status */}
      <div className="ml-4">
      <div className="flex flex-row">
        <p className="font-bold " >
    {profil.username}
      </p>
       <p className="ml-2 text-gray-400">
         {profil.pseudo}
      </p>
      <p className="ml-1 text-gray-400">
        {/* //TODO:  À FAIRE*/}
        ·{profil.date}
      
      </p>
      </div>
      <p className="">
        {profil.content}
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
     {profil.tweets.length}
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
    </NavLink>
)
   }
    <div className="bg-gray-500 w-full h-[0.2vh] mt-4 "></div>
</div>

  )
}

export default Lists