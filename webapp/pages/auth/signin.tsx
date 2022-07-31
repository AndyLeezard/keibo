import { ClientSafeProvider, getProviders } from "next-auth/react"
import Navbar from "../../components/layout/navbar"
import SigninContainer from "../../components/signinContainer"

type SignInProps = {
  providers: ClientSafeProvider[]
}

export default function SignIn({ providers }: SignInProps) {
  return (
    <>
      <Navbar hideSignin />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          //backgroundColor: "rgba(255, 255, 255, 0.5)"
        }}
      >
        <SigninContainer providers={providers} />
      </div>
    </>
  )
}

export async function getServerSideProps(context: any) {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}
