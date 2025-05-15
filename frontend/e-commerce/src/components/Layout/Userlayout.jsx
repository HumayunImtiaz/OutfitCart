import React from 'react'
import Header from '../Common/Header'
import Footer from '../Common/Footer'
import { Outlet } from 'react-router-dom'

function Userlayout() {
  return (
    <div>
        {/* Header file mai hmara topbar or navbar hai */}
        <Header/>
        {/* main Content */}
        <main>
          {/* ye Outlet child Routes ko Access krny kylye hai */}
          <Outlet/>
        </main>

        {/* foeter hmara common folder mai hai  */}
        <Footer/>
    </div>
  )
}

export default Userlayout