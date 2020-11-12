import React from "react"

import { Link } from "gatsby"

export default function Header({ title, subTitle }) {
  return (
    <>
      <h1>{title}</h1>
      <p>{subTitle}</p>
    </>
  )
}
