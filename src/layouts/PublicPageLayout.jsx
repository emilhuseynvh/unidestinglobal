import { Outlet } from 'react-router'
import Footer from '../components/Footer'

const PublicPageLayout = () => {
  return (
    <>
        <Outlet />
        <Footer />
    </>
  )
}

export default PublicPageLayout;
