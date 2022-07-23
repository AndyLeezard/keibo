import { NextPage } from "next"
import { useEffect } from "react"
import { doc, getDoc } from "firebase/firestore"
import { firestore } from "../firebase"
import { useSession, signIn, signOut } from "next-auth/react"
import Navbar from "../components/layout/navbar"

const Home: NextPage = () => {
  const { data: session } = useSession()
  useEffect(() => {
    const docRef = doc(firestore, "env", "vars")
    getDoc(docRef).then((docSnap) => {
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data())
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!")
      }
    })
  }, [])

  return (
    <>
      <Navbar
        signIn={() => signIn()}
        signOut={() => signOut()}
        session={session}
      />
      <h1 style={{ textAlign: "center" }}>{`AYO LET'S BUILD THIS THING 🚀`}</h1>
    </>
  )
}

export default Home
