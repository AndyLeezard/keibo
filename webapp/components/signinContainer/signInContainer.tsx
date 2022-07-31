import { ClientSafeProvider, signIn } from "next-auth/react"
import React, { useState } from "react"
import Image from "next/image"
import { h2r, keibo_accent_1, keibo_accent_2 } from "../../lib/palette"
import styles from "./styles.module.css"

type SignInContainerProps = {
  providers: ClientSafeProvider[]
}

const SignInContainer = ({ providers }: SignInContainerProps) => {
  const [hoverID, setHoverID] = useState<string>("")
  return (
    <div
      className={styles.container}
      style={{
        backgroundColor: keibo_accent_1,
      }}
    >
      {Object.values(providers).map((provider) => (
        <div
          className={styles.button}
          style={{
            backgroundColor: h2r(
              keibo_accent_2,
              hoverID === provider.id ? 1 : 0.75
            ),
          }}
          key={provider.name}
          onMouseEnter={() => setHoverID(provider.id)}
          onMouseLeave={() => setHoverID("")}
          onClick={() => signIn(provider.id)}
        >
          <span>Sign in with {provider.name}</span>
          <div className={styles.button_icon}>
            <Image
              src={`/icons/${provider.name}.svg`}
              alt={provider.name}
              width={24}
              height={24}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default SignInContainer
