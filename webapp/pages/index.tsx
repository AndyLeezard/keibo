import type { ReactElement } from "react"
import Layout from "../components/layout"
import type { NextPageWithLayout } from "./_app"
//import NestedLayout from '../components/nested-layout'

const Page: NextPageWithLayout = () => {
  return <h1>{`AYO LET'S BUILD THIS THING 🚀`}</h1>
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {/* <NestedLayout> */}
      {page}
      {/* </NestedLayout> */}
    </Layout>
  )
}

export default Page
