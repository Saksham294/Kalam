import Image from 'next/image'
import styles from './page.module.css'
import { Typography } from '@mui/material'
import LeftSection from './components/LeftSection/LeftSection'
import RightSection from './components/RightSection/RightSection'
import StickyPlayer from './components/StickyPlayer/StickyPlayer'
import {Montserrat} from 'next/font/google'
import MiddleSection from './components/MiddleSection/MiddleSection'

const montserrat=Montserrat({
  subsets: ['latin-ext'],
})

export default function Home() {
  return (
    <main className={montserrat.className}>
      <div className={styles.description}>
        {/* <LeftSection/>
        <MiddleSection/>
        <RightSection/> */}
        <StickyPlayer/>
      </div>
    </main>
  )
}
