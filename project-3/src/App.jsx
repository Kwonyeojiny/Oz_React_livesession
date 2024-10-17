import {BrowserRouter, Route, Routes, useLocation} from "react-router-dom"
import './App.css'
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import Contents from "./pages/Contents"
import Login from "./pages/Login"
import Layout from "./components/Layout"
import User from "./components/User"
import ContentDetail from "./pages/ContentDetail"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home/>} />
          <Route path="/contents" element={<Contents/>}>
            <Route path=":id" element={<ContentDetail/>}/>
          </Route>
          <Route path="*" element={<NotFound/>} />
          <Route path="/user/:userId" element={<User/>} />
        </Route>
        <Route path="/login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
  )
}


// function AppContent () {
//   // BrowserBouter안에서만 쓸수있어서 라우트 담은 함수 따로 빼줌
//   const nowlocation = useLocation();

//   return (
//     <>
//       {nowlocation.pathname !== '/login' && <Layout/>}
//       <Routes>
//         <Route path="/" element={<Home/>} />
//         <Route path="/contents" element={<Contents/>}>
//           <Route path=":id" element={<ContentDetail/>}/>
//         </Route>
//         <Route path="/login" element={<Login/>}>
//           <Route />
//         </Route>
//         <Route path="*" element={<NotFound/>} />
//         <Route path="/user/:userId" element={<User/>} />
//       </Routes>
//     </>
//   )
// }

// function App() {
//   return (
//     <BrowserRouter>
//       <AppContent/>
//     </BrowserRouter>
//   )
// }

export default App
