import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HooksApp } from './HooksApp'
// import { CounterWithCustomeHook } from './01-useState/CounterWithCustomeHook'
// import {FormWithCustomHook} from "./02-useEffect/FormWithCustomHook"
// import { MultipleCustomHook } from './03-examples/MultipleCustomHook'
// import { FocusScreen } from './04-useRef/FocusScreen'
import { Layout } from './05-useLayoutEffect/Layout'

import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <HooksApp /> */}
    {/* <CounterWithCustomeHook/> */}
    {/* <FormWithCustomHook/> */}
    {/* <MultipleCustomHook/>  */}
    {/* <FocusScreen/> */}
    <Layout/>
  </StrictMode>,
)
