import Link from "next/link"
import Wrapper from "../components/Wrapper"

export default function Home() {
  return (
    <Wrapper>
      <div style={{ height: "calc(100vh - 7.65rem)" }}>
        <article className="flex flex-col items-center text-center gap-y-2 lg:text-lg text-base">
          <h1 className="mt-[15.5vh]">Home</h1>
          <span className="text-[75%]">(Yes original name I know)</span>
          <p>
            An open source statistics website that collects drawing artwork from
            an experienced furry artist and illustrator Panda Paco (or
            pandapaco), written in TypeScript, Python, and Go.
          </p>
          <p>
            The project is still in the works, for an in-depth explanation and
            overall process of this project so far,{" "}
            <Link href="/about">click here!</Link>
          </p>
        </article>
      </div>
    </Wrapper>
  )
}
