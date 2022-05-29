import React from "react"
import Layout from "../../components/Layout"
import SEO from "../../components/Seo"

import "./styles.scss"

const DiscordInvitePage = () => {
  return (
    <Layout footerClasses="transparent">
      <SEO title="Archive Notification LP" />
      <div className="mailing-list-signup discord-invite">
        <h3>
          <a
            href="https://discord.gg/hE2JZcj"
            className="white-text text-decoration-none"
            target="_blank"
            rel="noreferrer"
          >
            Click Here To Join Our Discord - <br />
            <img
              className="discord-logo"
              src={require("../../svgs/discord-logo-white.svg")}
              alt="White Discord Logo"
            />
          </a>
        </h3>
        <p className="white-text">
          *If the link above stops working, please let us know by email at
          selftdev@gmail.com
        </p>
      </div>
    </Layout>
  )
}

export default DiscordInvitePage
