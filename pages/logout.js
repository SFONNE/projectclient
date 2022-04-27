import Head from 'next/head'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import config from '../config/config'

export default function Logout({ token }) {

    const [status, setStatus] = useState('')

    useEffect(() => {
        logout()
    }, [])

    const logout = async () => {
        console.log('remove token: ', token)
        let result = await axios.get(`${config.URL}/logout`, { withCredentials: true })
        setStatus("Logout successful")
    }
 
    return (
        <Layout>
            <Head>
                <title>Logout</title>
            </Head>
            <div className=''>
                 <header className="flex justify-between bg-pink-900">
                <Navbar />
                </header>
                <div className='flex  justify-center h-screen bg-gray-800  '> 
                <div className='flex flex-row'>
                <div className='text-5xl font-extrabold'>
                 <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-lime-500 ">

                    {status}  
                </span>

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
