import Wrapper from "./Wrapper"
import Link from "next/link"

export default function Header() {
  return (
    <header>
      <Wrapper>
        <nav>
          <ul className="flex gap-x-4">
            <li className="py-5">
              <Link href="/">
                <a className="py-5 px-2">Home</a>
              </Link>
            </li>
            <li className="py-5">
              <Link href="/about">
                <a className="py-5 px-2">About</a>
              </Link>
            </li>
          </ul>
        </nav>
      </Wrapper>
    </header>
  )
}
