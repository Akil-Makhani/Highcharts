
import { Inter } from 'next/font/google'
import EngagementChart from '../../components/EngagementChart'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
    <EngagementChart  />
  </div>
  )
}
