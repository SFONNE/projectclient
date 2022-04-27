import Head from 'next/head' 
import Layout from '../components/layout' 
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home({ token }) {
 
  return (
    <Layout>
    <Head>
        <title>Home</title>
    </Head>
    <header className="flex justify-between bg-pink-900">
        <Navbar />
    </header>
    <div className='flex justify-center bg-gray-800'>
        <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
  <title>Tailwind Profile Card Template : Tailwind Toolbox</title>
  <meta name="description" content="" />
  <meta name="keywords" content="" />
  <meta name="author" content="" />
  {/* Font Awesome if you need it
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css">
  */}
  <link
    rel="stylesheet"
    href="https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css"
  />
  {/*Replace with your tailwind.css once created*/}
  <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
    {/*Main Col*/}
    <div
      id="profile"
      className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0"
    >
      <div className="p-4 md:p-12 text-center lg:text-left">
        {/* Image for mobile view*/}
        <div
          className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
          style={{
            backgroundImage: 'url("hhttps://i.pinimg.com/564x/98/cf/aa/98cfaa43344df7238e3f3516e52c4f60.jpg")'
          }}
        />
        <h1 className="text-3xl font-bold pt-8 lg:pt-0">ร้านอาหารทำมือ</h1>
        <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25" />
        <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
          <svg
            className="h-4 fill-current text-green-700 pr-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
          </svg>{" "}
          "ร้านอาหารที่เปิดมา 150 ปี"
        </p>
        <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
          <svg
            className="h-4 fill-current text-green-700 pr-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z" />
          </svg>{" "}
          ภูเก็ต 
        </p>
        <p className="pt-8 text-sm">
          ร้านอาหารไทย ที่ทำจากมือสดๆ 
        </p>
        <div className="pt-12 pb-8">
        <button className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full">
        <Link href="/register"><a> Go To Register </a></Link>                      
          </button>
        </div>
        <div className="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between">
          <a className="link" href="https://www.facebook.com/kriengsaksajjapiromruk/" data-tippy-content="@facebook_handle">
            <svg
              className="h-6 fill-current text-gray-600 hover:text-green-700"
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Facebook</title>
              <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0" />
            </svg>
          </a>
         
        

        </div>
        {/* Use https://simpleicons.org/ to find the svg for your preferred product */}
      </div>
    </div>
    {/*Img Col*/}
    <div className="w-full lg:w-2/5">
      {/* Big profile image for side bar (desktop) */}
      <img
        src="https://i.pinimg.com/564x/98/cf/aa/98cfaa43344df7238e3f3516e52c4f60.jpg"
        className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
      />
      {/* Image from: http://unsplash.com/photos/MP0IUfwrn0A */}
    </div>
    {/* Pin to top right corner */}
    <div className="absolute top-0 right-0 h-12 w-18 p-4">
      <button className="js-change-theme focus:outline-none">👏 𝙏𝙪𝙢𝙈𝙪𝙚 𝙧𝙚𝙨𝙩𝙖𝙪𝙧𝙖𝙣𝙩🤝</button>
    </div>
  </div>
     </div>
  
</Layout>
  )
}

export function getServerSideProps({ req, res }) {
  // console.log("token from cookie: ",cookie.get("token")) 
  // console.log('req: ', req.headers)
  return { props: { token: req.cookies.token || "" } };
}
