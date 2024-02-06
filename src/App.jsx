import { useState } from "react";
import Loader from "./components/Loader/Loader";
import Main from "./components/Main";
import { motion, AnimatePresence } from 'framer-motion'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <AnimatePresence mode="wait">
      {isLoading ? <Loader setIsLoading={setIsLoading} /> :
      <Main />}
    </AnimatePresence>
  )
}

export default App
