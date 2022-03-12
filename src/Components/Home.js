import React from 'react'
import { Provider } from './Createcontext'
import Top from './Top'
import Topaccs from './Topaccs'
import Topfas from './Topfas'
import Toplap from './Toplap'
import Topmob from './Topmob'

function Home() {
  return (
    <div>
      <Provider>
        <Top/>
        <Toplap/>
        <Topmob/>
        <Topfas/>
        <Topaccs/>
      </Provider>
    </div>
  )
}

export default Home