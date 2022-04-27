import Head from 'next/head'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import withAuth from '../components/withAuth'
import config from '../config/config'
import Link from 'next/link'

const foo1 = ({ token }) => {

    const [user, setUser] = useState({})

    useEffect(() => {
        fooUser()
    }, [])

    const fooUser = async () => {
        try {
            // console.log('token: ', token)
            const users = await axios.get(`${config.URL}/foo`, {
                headers: { Authorization: `Bearer ${token}` }
            })
            // console.log('user: ', users.data)
            setUser(users.data)
        }
        catch (e) {
            console.log(e)
        }

    }
 
    return (
         <Layout>
    <Head>
        <title>Profile</title>
    </Head>
      <>
        <link
          href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
          rel="stylesheet"
        />
             <header className="flex justify-between bg-pink-900">
                <Navbar />
                </header>
          <div className="flex items-center">
            
          </div>
        <main className="flex flex-col sm:flex-row flex-1 justify-center bg-gradient-to-r from-indigo-900">
          {/*     Top main div */}
          <div className="flex flex-col justify-center items-center sm:w-1/2 ">
          <img
            className="w-2/3 sm:h-1/3 rounded-full bg-origin-border p-2 border-2 border-dashed"
            src="https://i.pinimg.com/564x/3f/b6/69/3fb6698a8bf81d9029adec620d8b6091.jpg"
            alt="Cat"/>
            <h1 className="text-3xl mt-4 mb-4 ">ร้านอาหารทำมือ!!</h1>
            <p className="ml-4 mr-4 whitespace-normal">
              {" "}
             ประวัติร้านอาหาร 
             อาหารไทย เป็นอาหารที่ประกอบด้วยรสเข้มข้นมีเครื่องปรุงหลายอย่างรสชาติอาหารแต่ละ อย่างมีรสเฉพาะตัวการใช้เครื่องปรุงรสต่างๆก็ไม่เหมือนกันผู้ประกอบอาหารไทย 
             ต้องศึกษาจากตำราอาหารไทยและผู้เชี่ยวชาญการทำอาหารไทยให้อร่อยต้องใช้ความ ชำนาญและประสบการณ์ตลอดจนกรรมวิธีในการประกอบอาหารไทยผู้ทำจะต้องพิถีพิถัน ประณีต 
             มีขั้นตอนเพื่อให้อาหารน่ารับประทาน อาหารไทยขึ้นชื่อได้ว่ามี ประวัติมาช้านาน ผู้คนส่วนใหญ่ทั้งในและต่างประเทศต่างนิยมชมชอบในอาหารไทยกันมากมาย 
             โดยเฉพาะชื่อเสียงในด้านความเข้มข้นและจัดจ้านของรสอาหารที่ติดปากติดใจผู้ คนมานับศตวรรษ{" "}
            </p>
            <div className="flex flex-row">
            <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto bg-origin-border p-1 border-2 border-dashed"
              src="https://i.pinimg.com/564x/f6/6d/3c/f66d3c84838d097262ea4251a88d522b.jpg"
            alt=""width={1084}height={1084}/>
             <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto bg-origin-border p-1 border-2 border-dashed"
              src="https://i.pinimg.com/564x/ad/69/26/ad6926d897051083e6ad7caa5f3edccc.jpg"
            alt=""width={1084}height={1084}/>
            </div>
            </div>
            
            <div className="flex mt-4 mb-4 ">
             
            </div>
            
           
          {/*     Bottom main div */}
          <div className="p-2 flex sm:flex-col justify-center  sm:items-center ">
           
           
          </div>
        </main>
     
        <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 ">
          
          <div className="pt-6 md:p-8 text-center md:text-left space-y-4 ">
            <blockquote>
              <p className="text-lg font-medium text-slate-300">
              “ความอร่อยคู่ตะหลิว ความหิวคู่กับเรา”            
             </p>
            </blockquote>
            <figcaption className="font-medium">
              <div className="text-sky-500 dark:text-sky-400">
                kriengsak Sajjapiromruk
              </div>
              <div className="text-slate-700 dark:text-slate-500">CoE, sak</div>
            </figcaption>
          </div>
        
        </figure>
   <div className=' flex justify-center bg-pink-700 hover:bg-pink-900 text-white font-bold py-2 px-4 rounded-full '>
        <Link href="/bear"><a> Add Menu </a></Link> 
        </div>
        <footer className="flex justify-center mt-4 bg-pink-900 p-4">
          <div>Copy right by Kriengsak Sajjapiromruk</div>
        </footer>
      </>
  
</Layout>
    )
}

export default withAuth(foo1)

export function getServerSideProps({ req, res }) {
    return { props: { token: req.cookies.token || "" } };
}
