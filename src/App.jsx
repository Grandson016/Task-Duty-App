import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import AllTasks from "./pages/AllTasks"
import NewTasks from "./pages/NewTasks"
import ErrorPage from "./pages/ErrorPage"
import Navbar from "./layouts/Navbar"

function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all-tasks" element={<AllTasks />} />
          <Route path="/new-tasks" element={<NewTasks />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
