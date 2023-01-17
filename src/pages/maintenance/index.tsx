import React from "react"
import Layout from "../../components/Layout"

const textStyle = {
  textAlign: "center",
  color: "white",
}

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  minHeight: "500px",
  flexDirection: "column",
}

const Maintenance = () => {
  return (
    <Layout footerClasses="transparent">
      <div style={containerStyle} className="container">
        <h1 style={textStyle}>Under Maintenance</h1>
        <p style={textStyle}>This page is currently undergoing some changes. Please try again later. </p>
      </div>
    </Layout>
  )
}

export default Maintenance
