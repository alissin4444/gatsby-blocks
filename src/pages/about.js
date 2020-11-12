import React from "react"

import { Link } from "gatsby"

import Header from "../components/header"

export default function About() {
  return (
    <>
      <Header
        title="About"
        subTitle="In this page you can see something about this page."
      />
      <Link to="/">Back</Link>
    </>
  )
}
