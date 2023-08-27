import Image from 'next/image'
import styles from './page.module.css'
import Feedbacks from './components/Feedbacks'
import Navbar from './components/Navbar'
import Allfeedback from './allfeedback/page'


export default function Home() {
  return (
    <>
    <Allfeedback/>
    </>
  )
}
