import { ReactElement } from "react"
import MetaTags from "./MetaTags"
import Header from "./Header"
import Footer from "./Footer"

export default function Layout({ children }: { children: ReactElement }) {
  return (
    <>
      <Header />
      <MetaTags />
      {children}
      <Footer />
    </>
  )
}
