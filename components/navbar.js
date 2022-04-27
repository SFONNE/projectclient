import Link from 'next/link'

const Navbar = () => (
    <div className='flex flex-row h-10'>
    <img className="ml-4 mr-4  h-9  rounded-full"
              src="https://i.pinimg.com/564x/29/50/3b/29503b354e0ee8c1440b77d2e08127d2.jpg"
              alt="cat_logo"/>
        <div className='mr-4 bg-indigo-500 p-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-lime-500'>
        <Link href="/"><a> Home </a></Link> 
        </div>
        <div className='mr-4 bg-indigo-500 p-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-lime-500'>
        <Link href="/register"><a> Register </a></Link>
        </div>
         <div className='mr-4 bg-indigo-500 p-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-lime-500'>
        <Link href="/login"><a> Login </a></Link> 
        </div>
        <div className='mr-4 bg-indigo-500 p-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-lime-500'>
        <Link href="/profile"><a> Profile </a></Link> 
        </div>
        <div className='mr-4 bg-indigo-500 p-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-lime-500 '>
        <Link href="/logout"><a> Logout </a></Link> 
        </div>
    </div>
    
)

export default Navbar