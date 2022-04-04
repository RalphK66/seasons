
import styles from './Layout.module.css'
import StickyFooter from '../StickyFooter'
import Header from '../Header/Header'

const LayoutBox = ({ children }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}>
      {children}
    </div>
  )
}
const Layout = ({ children }) => {
  return (
    <LayoutBox>
      <Header />
      {children}
      <StickyFooter />
    </LayoutBox>
  )
}

export default Layout
