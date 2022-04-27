
import { useState } from 'react'
import Head from 'next/head'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import axios from 'axios'
import config from '../config/config'
import Link from 'next/link'

export default function Register({ token }) {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [status, setStatus] = useState('')

    const profileUser = async () => {
        console.log('token: ', token)
        const users = await axios.get(`${config.URL}/profile`, {
            headers: { Authorization: `Bearer ${token}` }
        })
        console.log('user: ', users.data)
    }

    const register = async (req, res) => {
        try {
            let result = await axios.post(`${config.URL}/register`,
                { username, email, password })
            console.log('result: ', result)
            console.log('result.data:  ', result.data)
            console.log('token:  ', token)
            setStatus(result.data.message)
        }
        catch (e) {
            console.log(e)
        }

    }

    const registerForm = () => (
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
                Email:
            </div>
            <div>
                <input type="email"
                    name="email"
                    placeholder="email"
                    onChange={(e) => setEmail(e.target.value)} />
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


    return (
        <Layout>
            <Head>
                <title>Register</title>
            </Head>
            <header className="flex justify-between bg-pink-900 ">

            <Navbar />
            </header>
            <div className="flex  justify-center h-screen bg-gray-800">
            <div >
                <div className='flex flex-col justify-center h-50 flex-col space-y-4 ' >
                <div className=' flex justify-center'>
                <div className="text-5xl font-extrabold  ">

                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-lime-500 ">

                    Register
                    
                </span>
                </div>
                </div>
                <div className=' flex justify-center'>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-lime-500 ">

                <b>Token:</b> {token.substring(0, 15)}...
                </span>
                </div>
                <button className=' bg-pink-700 hover:bg-pink-900 text-white font-bold py-2 px-4 rounded-full'
                        onClick={() => { navigator.clipboard.writeText(token) }}>
                        Copy token
                </button>
                </div>
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-lime-500 ">
            Status:  {status}
            </span>
                <br /><br />
                <div className='bg-gray ' >
                    {registerForm()}
                </div>

                <div className='flex flex-col justify-center h-50 flex-col space-y-4'>
                    <button className=' bg-pink-700 hover:bg-pink-900 text-white font-bold py-2 px-4 rounded-full ' onClick={register}>Register</button>
                
                <button className=' bg-pink-700 hover:bg-pink-900 text-white font-bold py-2 px-4 rounded-full'>
                <Link href="/login"><a> Go To Login </a></Link> 
                </button>
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
