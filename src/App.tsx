import { lazy } from "react"
import { Route, Routes } from "react-router-dom";

const Home = lazy(async() => await import('../src/modules/Home/Pages/HomePage'));
const Plans = lazy(async() => await import('../src/modules/Plans/Pages/PlanPage'));
const SummaryPage = lazy(async() => await import('../src/modules/Plans/Pages/SummaryPage'));
function App() {

  return (
    <>
      <Routes>
      <Route path={'*'} element={<Home/>}/>
      <Route path={'/'} element={<Home/>}/>
      <Route path={'/plans'} element={<Plans/>}/>
      <Route path={'/summary'} element={<SummaryPage/>}/>
      </Routes>
    </>
  )
}

export default App
