import { ClientSafeProvider, signIn } from "next-auth/react"
import React, { useState } from "react"
import Image from "next/image"
import {
  h2r,
  keibo_accent_1,
  keibo_accent_2,
  keibo_accent_3,
} from "../../lib/palette"
import styles from "./styles.module.css"

type SignInContainerProps = {
  providers: ClientSafeProvider[]
}

const SignInContainer = ({ providers }: SignInContainerProps) => {
  const [hoverID, setHoverID] = useState<string>("")
  const [agreed, setAgreed] = useState(false)

  return (
    <div
      className={styles.container}
      style={{
        backgroundColor: keibo_accent_1,
      }}
    >
      <div className={styles.logo}>
        <Image src={`/letter_64.png`} alt={"Keibo"} width={24} height={24} />
        <span>Keibo</span>
      </div>
      <div className={styles.conditions}>
        <div
          className={`${styles.checkbox}`}
          style={{
            border: `2px solid ${agreed ? "transparent" : "#ffffff"}`,
            backgroundColor: agreed ? keibo_accent_3 : "rgba(0, 0, 0, 0.5)",
            zIndex: 1,
          }}
          onMouseEnter={() => setHoverID("checkbox")}
          onMouseLeave={() => setHoverID("")}
          onClick={() => setAgreed((prev) => !prev)}
        >
          <div
            className={styles.checkbox_halo}
            style={{
              backgroundColor: `rgba(255, 255, 255, ${
                hoverID === "checkbox" ? "0.25" : "0"
              })`,
            }}
          />
          {agreed ? (
            <Image
              className="filter-white"
              src={"/icons/check.svg"}
              alt="check"
              width={16}
              height={16}
            />
          ) : (
            <></>
          )}
        </div>
        <span>
          I agree to the Keibo <a href="/conditions">Terms of Service</a>.
        </span>
      </div>
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
          onClick={() => {
            agreed
              ? signIn(provider.id)
              : window.alert("Accept the Terms of Service to proceed")
          }}
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
