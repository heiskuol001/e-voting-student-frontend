import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import UserInfo from '../components/UserInfo'
import Election from '../components/Election'
import Container from '../components/Container'
import Container1 from '../components/Container1'

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className='flex h-screen w-full overflow-hidden bg-gray-100'>
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
      <main className='flex min-w-0 flex-1 flex-col overflow-y-auto overflow-x-hidden md:overflow-hidden'>
        <Navbar
          isSidebarOpen={isSidebarOpen}
          onMenuClick={() => setIsSidebarOpen(true)}
        />
        <UserInfo />
        <Election />
        <Container />
        <Container1 />
      </main>
    </div>
  )
}

export default Dashboard
