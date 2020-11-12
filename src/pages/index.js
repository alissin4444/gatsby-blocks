import React from "react"

import { Link } from "gatsby"

import Header from "../components/header"

export default function Home() {
  return (
    <>
      <Header title="Home" subTitle={'Hi, see us on "about" page'} />
      <Link to="/about">About</Link>
    </>
  )
}
