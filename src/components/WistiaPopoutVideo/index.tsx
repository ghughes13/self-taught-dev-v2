import React, { ReactElement, useEffect } from "react"
import "./styles.scss"


type WistiaPopOutVideoProps = {
  id: string,
  children: ReactElement
}

const WistiaPopOutVideo = ({ id, children }: WistiaPopOutVideoProps) => {
  useEffect(() => {
    const script1 = document.createElement("script")
    const script2 = document.createElement("script")
    script1.src = "https://fast.wistia.com/embed/medias/" + id + ".jsonp"
    script1.async = true
    script2.src = "https://fast.wistia.com/assets/external/E-v1.js"
    script2.async = true
    document.body.appendChild(script1)
    document.body.appendChild(script2)
  })
  
  const allowedProps = {popover: true, popoverContent: "link"}
  
  return (
    <span className={`wistia_embed wistia_async_${id}`} {...allowedProps} >
      <a href="#">{children}</a>
    </span>
  )
}

export default WistiaPopOutVideo
