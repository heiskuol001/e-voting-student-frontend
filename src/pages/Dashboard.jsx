import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import UserInfo from '../components/UserInfo'
import Election from '../components/Election'
import Container from '../components/Container'
import Container1 from '../components/Container1'
import Footer from '../components/Footer'

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className='min-h-screen w-full bg-gray-100'>
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
      <main className='flex min-w-0 flex-1 flex-col overflow-x-hidden md:ml-20 lg:ml-64'>
        <Navbar
          isSidebarOpen={isSidebarOpen}
          onMenuClick={() => setIsSidebarOpen(true)}
        />
        <UserInfo />
        <Election />
        <Container />
        <Container1 />
        <Footer />
      </main>
    </div>
  )
}

export default Dashboard
