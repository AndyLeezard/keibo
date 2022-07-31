import { ClientSafeProvider, signIn } from "next-auth/react"
import React, { useEffect, useState } from "react"
import Image from "next/image"
import {
  h2r,
  keibo_accent_1,
  keibo_accent_2,
  keibo_accent_3,
  keibo_crimson,
} from "../../lib/palette"
import styles from "./styles.module.css"
import router, { useRouter } from "next/router"

type SignInContainerProps = {
  providers: ClientSafeProvider[]
}

const SignInContainer = ({ providers }: SignInContainerProps) => {
  const [hoverID, setHoverID] = useState<string>("")
  const [agreed, setAgreed] = useState(false)
  const { error } = useRouter().query

  useEffect(() => {
    if (!agreed && error) {
      setAgreed(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error])

  return (
    <div
      className={styles.container}
      style={{
        backgroundColor: keibo_accent_1,
      }}
    >
      <div className={styles.logo} onClick={() => router.push("/")}>
        <Image src={`/letter_64.png`} alt={"Keibo"} width={24} height={24} />
        <span>Keibo</span>
      </div>
      {error ? (
        <div
          className={styles.error_message}
          style={{
            color: keibo_crimson,
          }}
        >
          <span>
            {error === "OAuthAccountNotLinked"
              ? "The same email address has been already used via another authentification provider. To confirm your identity, sign in with the same account you used originally."
              : error}
          </span>
        </div>
      ) : (
        <></>
      )}
      <div className={styles.conditions}>
        <div
          className={`${styles.checkbox}`}
          style={{
            border: `2px solid ${agreed ? "transparent" : "#ffffff"}`,
            backgroundColor: agreed
              ? keibo_accent_3
              : hoverID === "checkbox"
              ? "rgba(255, 255, 255, 0.5)"
              : "rgba(0, 0, 0, 0.5)",
            zIndex: 1,
          }}
          onMouseEnter={() => setHoverID("checkbox")}
          onMouseLeave={() => setHoverID("")}
          onClick={() => setAgreed((prev) => !prev)}
        >
          <div
            className={`${styles.checkbox_halo} ${
              agreed ? "" : styles.checkbox_halo_animated
            }`}
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
