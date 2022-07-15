import Head from "next/head"
import { useRouter } from "next/router"

export default function MetaTags() {
  const router = useRouter()

  let SITE_TITLE = "Paco Drawing Stats"

  let title = SITE_TITLE
  let description =
    "An open source statistics website that collects drawing artwork from an experienced furry artist and illustrator Panda Paco (or pandapaco), written in TypeScript, Python, and Go."

  if (router.pathname === "/about") {
    title = `About | ${SITE_TITLE}`
    description = "About page"
  }

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Head>
  )
}
