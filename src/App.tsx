import { Toaster } from "react-hot-toast"
import Header from "./component/header"
import MainSection from "./containers/mainsection"


function App() {

  return (
    <>
      <Toaster/>
      <Header/>
      <MainSection />
    </>
  )
}

export default App
