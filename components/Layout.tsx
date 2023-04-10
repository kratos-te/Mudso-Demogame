
const Layout = ({ children }: any) => {
  return (
    <div className="h-screen bg-gradient-to-b from-yellow-200 via-grey-200 to-blue-200 relative">    
        <>
          {children}
        </>
    </div>
  )
}

export default Layout;