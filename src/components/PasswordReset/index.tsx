import React, { useEffect, useState } from "react"
// import { useIdentityContext } from "react-netlify-identity-gotrue"
import { Link } from "gatsby"
import Loader from "../Animations/Loader"

import "./styles.scss"

type PasswordResetFormProps = {
  pageTitle: string
  formTitle: string
  urlToPostTo: string
  btnText: string
  successMessage: string
  navigateTarget?: string
}

const PasswordResetForm = ({
  pageTitle,
  formTitle,
  urlToPostTo,
  btnText,
  successMessage,
  navigateTarget,
}: PasswordResetFormProps) => {
  // const identity = useIdentityContext()
  const [email, setEmail] = useState(" ")
  const [password, setPassword] = useState(" ")
  const [formError, setFormError] = useState(false)
  const [showPasswordField, setShowPasswordField] = useState(false)
  const [passwordResetEmailSent, setPasswordResetEmailSent] = useState(false)
  const [passwordResetSuccessful, setPasswordResetSuccessful] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    // if (identity.urlToken && identity.urlToken.type) {
    //   setShowPasswordField(true)
    // }
  })

  const sendPasswordResetEmail = e => {
    e.preventDefault()
    setFormError(false)
    setSubmitting(true)

    // identity
    //   .sendPasswordRecovery({
    //     email,
    //   })
    //   .then(() => {
    //     setPasswordResetEmailSent(true)
    //   })
    //   .catch(e => setFormError(e.message))
  }

  const resetPassword = e => {
    e.preventDefault()
    setFormError(false)
    setSubmitting(true)

    // identity
    //   .completeUrlTokenTwoStep({ password })
    //   .then(() => {
    //     setPasswordResetSuccessful(true)
    //   })
    //   .catch(e => setFormError(e.message))
  }

  const handleEmailFieldChange = e => {
    setEmail(e.target.value)
    console.log(e.target.value)
  }

  const handlePasswordFieldChange = e => {
    setPassword(e.target.value)
  }

  return (
    <div className="password-reset">
      <h1>Password Reset</h1>
      <form
        id={formTitle}
        method="POST"
        encType="multipart/form-data"
        name={formTitle}
        action={urlToPostTo}
      >
        {!showPasswordField ? (
          !passwordResetEmailSent ? (
            submitting ? (
              <Loader />
            ) : (
              <>
                <p className="white-text reset-text">
                  Submit your email and a link will be sent to reset your
                  password.
                </p>
                <div className="form-info-div">
                  <label htmlFor="email">
                    <input
                      type="email"
                      placeholder="Email"
                      name="email"
                      id="email"
                      required
                      value={email}
                      onChange={e => {
                        handleEmailFieldChange(e)
                      }}
                    />
                  </label>
                  <button
                    id="sbmt-form-btn"
                    className="btn-style-1"
                    onClick={sendPasswordResetEmail}
                  >
                    Send Reset Email
                  </button>
                </div>
              </>
            )
          ) : (
            <div id="thanks">
              <p>
                If an account exists with that email, a password reset link will
                be sent to it.
              </p>
            </div>
          )
        ) : !passwordResetSuccessful ? (
          submitting ? (
            <Loader />
          ) : (
            <>
              <label htmlFor="password">
                <input
                  className="margin-top-input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  id="password"
                  required
                  value={password}
                  onChange={e => {
                    handlePasswordFieldChange(e)
                  }}
                />
              </label>
              <button
                id="sbmt-form-btn"
                className="btn-style-1"
                onClick={resetPassword}
              >
                Reset Password
              </button>
            </>
          )
        ) : (
          <div id="thanks">
            <p>
              Your password has been reset. You may now{" "}
              <Link to="/login" className="white-text">
                {" "}
                Login
              </Link>
              .
            </p>
          </div>
        )}
        {formError && (
          <p id="error-msg" className="error-msg">
            Error submitting form. <br />
            Ensure all fields are filled out.
          </p>
        )}
        <div className="other-options">
          <Link to="/new-user">Create Account</Link>
          <Link to="/login">Login</Link>
        </div>
      </form>
    </div>
  )
}

export default PasswordResetForm
