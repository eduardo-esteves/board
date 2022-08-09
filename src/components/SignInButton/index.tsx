import S from './styles.module.scss'
import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

import { signIn, signOut, useSession } from 'next-auth/react'

function SignInButton () {

  const { data: session } = useSession()

  return session ? (
    <button
      type="button"
      className={S.signInButton}
      onClick={() => signOut()}
    >
      <img src={session.user.image} alt="Imagem do usuário logado" />
      Olá {session.user.name}
      <FiX color="#737380" className={S.closeIcon}/>
    </button>
  ) : (
    <button
      type="button"
      className={S.signInButton}
      onClick={() => signIn('github')}
    >
      <FaGithub color="#FFB800" />
      Entrar com GitHub
    </button>
  )
}

export default SignInButton
