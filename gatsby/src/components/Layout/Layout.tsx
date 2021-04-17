import React from 'react'
import Footer from '../Footer'
import HelmetHeader from '../HelmetHeader'
import Navbar from '../Navbar'
export interface LayoutProps {}

const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <>
      <HelmetHeader />
      <Navbar />
      {props.children}
      <Footer />
    </>
  )
}

export default Layout
