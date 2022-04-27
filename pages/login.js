import Head from 'next/head'
import Layout from '../components/layout'
import { useState } from 'react'
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import config from '../config/config'
import Link from 'next/link'
import Script from 'next/script'
import { useRouter } from 'next/router'
export default function Login({ token }) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [status, setStatus] = useState('')
    const [ischeck, setIscheck] = useState('')
    const router = useRouter()

    const login = async (req, res) => {
        try {
            let result = await axios.post(`${config.URL}/login`,
                { username, password },
                { withCredentials: true })
            console.log('result: ', result)
            console.log('result.data:  ', result.data)
            console.log('token:  ', token)
            setStatus(result.status + ' : ' + result.data.user.username + '  ' )

        }
        catch (e) {
            console.log('error: ', JSON.stringify(e.response))
            setStatus(JSON.stringify(e.response).substring(0, 80) + "...")
        }
    }

    const loginForm = () => (
        <div className={styles.gridContainer}>
            <div>
                Username:
            </div>
            <div>
                <input type="text"
                    name="username"
                    placeholder="username"
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div>
                Password:
            </div>
            <div>
                <input type="password"
                    name="password"
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)} />
            </div>
        </div>
    )

    const copyText = () => {
        navigator.clipboard.writeText(token)
    }




    return (
        <Layout>
            <Head>
                <title>Login</title>
            </Head>
             <header className="flex justify-between bg-pink-900 ">
            <Navbar />
            </header>
            <div className="flex  justify-center h-screen bg-gray-800">

            <div className='flex flex-col justify-center h-screen  '>
            <div className='flex flex-col justify-center  flex-col space-y-5 '>
            <div className='flex  flex-row  justify-center text-5xl font-extrabold '>
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-lime-500  '>
                Login
                </span>
                </div>
                <div  className='flex flex-row justify-center  bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-lime-500 '>
                <b>Token:</b> {token.substring(0, 15)}...
                <button onClick={copyText}> Copy token </button>
                </div>
                <br/>
                <div  className='flex flex-row justify-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-lime-500   '>
                    Status:  {status}
                    check: {ischeck} 
                </div>
            </div>
            <div className='flex flex-row justify-center '>
                <br />
                {loginForm()}
            </div>
                <div  className='flex flex-col justify-center  '>
                <div  className='flex flex-row justify-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-lime-500  '>
                    <input type="checkbox"
                        name="IsRememberMe"
                        onChange={ (e) => router.push('#')??setIscheck(e.target.value)}
                    />Remember me!
                    <br /><br />
                </div>
                </div>
                <div className='flex flex-col flex flex-col space-y-4 '>
                 <div  className='flex flex-col justify-center  '>
                <button className='bg-pink-700 hover:bg-pink-900 text-white font-bold py-2 px-4 rounded-full' onClick={() => router.push('/profile')}>
                            Go to Profile
                </button>
                </div>
               
                <div  className='flex flex-col justify-center  '>
                     <button className='bg-pink-700 hover:bg-pink-900 text-white font-bold py-2 px-4 rounded-full' onClick={() => router.push('/register')}>
                            Register
                </button>
                </div>
                <div></div>
                 <div  className='flex flex-col justify-center  '>
                    <button className='bg-pink-700 hover:bg-pink-900 text-white font-bold py-2 px-4 rounded-full' onClick={login} >Login</button>
                </div>
                </div>
                </div>
            </div>
              <footer className="flex justify-center mt-4 bg-pink-900 p-4">
          <div>Copy right by Kriengsak Sajjapiromruk</div>
        </footer>
        </Layout>
    )
}

export function getServerSideProps({ req, res }) {
    return { props: { token: req.cookies.token || "" } };
}

