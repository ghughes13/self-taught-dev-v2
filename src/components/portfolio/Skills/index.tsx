import React from "react"
import "./styles.scss"
import DownArrows from "../../Animations/DownArrows"

const Skills = () => {
  return (
    <div className="skills">
      <h2>Skills</h2>
      <div className="skill-logo-container">
        <img
          className="html-logo skill"
          src={require("../../../svgs/skills/html-logo.svg").default}
          alt="logo"
          title="HTML"
        />
        <img
          className="css-logo skill"
          src={require("../../../svgs/skills/css-logo.svg").default}
          alt="logo"
          title="CSS"
        />
        <img
          className="javascript-logo skill"
          src={require("../../../svgs/skills/javascript-logo.svg").default}
          alt="logo"
          title="JavaWcript"
        />
        <img
          className="typescript-logo skill"
          src={require("../../../svgs/skills/typescript-logo.svg").default}
          alt="logo"
          title="TypeScript"
        />
        <img
          className="react-logo skill"
          src={require("../../../svgs/skills/react-logo.svg").default}
          alt="logo"
          title="React"
        />
        <img
          className="sass-logo skill"
          src={require("../../../svgs/skills/sass-logo.svg").default}
          alt="logo"
          title="SASS"
        />
        <img
          className="gatsby-logo skill"
          src={require("../../../svgs/skills/gatsby-logo.svg").default}
          alt="logo"
          title="Gatsby"
        />
        <img
          className="linux-logo skill"
          src={require("../../../svgs/skills/linux-logo.svg").default}
          alt="logo"
          title="Linux"
        />
        <img
          className="git-logo skill"
          src={require("../../../svgs/skills/git-logo.svg").default}
          alt="logo"
          title="GIT"
        />
        <img
          className="react-native-logo skill"
          src={require("../../../svgs/skills/react-native-logo.svg").default}
          alt="logo"
          title="React Native"
        />
        <img
          className="premier-pro-logo skill"
          src={require("../../../svgs/skills/premiere-pro-logo.svg").default}
          alt="logo"
          title="Adobe Premiere Pro"
        />
        <img
          className="photoshop-logo skill"
          src={require("../../../svgs/skills/photoshop-logo.svg").default}
          alt="logo"
          title="Adobe Photoshop"
        />
        <img
          className="adobe-xd-logo skill"
          src={require("../../../svgs/skills/adobe-xd-logo.svg").default}
          alt="logo"
          title="Adobe XD"
        />
      </div>
      <DownArrows />
    </div>
  )
}

export default Skills
