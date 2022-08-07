import Link from 'next/link'
import SignInButton from '../SignInButton'

import S from './styles.module.scss'

export function Header() {
  return (
    <header className={S.headerContainer}>
      <div className={S.headerContent}>
        <Link href="/">
          <img src="/img/logo.svg" alt="Logo Meu Board" />
        </Link>

        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/board">
            <a>Meu Board</a>
          </Link>
        </nav>

        <SignInButton />
      </div>
    </header>
  )
}
