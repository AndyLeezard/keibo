import { NextPage } from "next"
import Navbar from "../components/layout/navbar"
import TestingComponent from "../components/TestingComponent/TestingComponent"

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <TestingComponent />
      <h1 style={{ textAlign: "center" }}>{`AYO LET'S BUILD THIS THING 🚀`}</h1>
    </>
  )
}

export default Home
