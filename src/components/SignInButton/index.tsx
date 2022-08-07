import S from './styles.module.scss'
import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

function SignInButton () {

  const session = false

  return session ? (
    <button
      type="button"
      className={S.signInButton}
      onClick={() => {}}
    >
      <img src="/img/steve.png" alt="Foto do usuario" />
      Olá Eduardo
      <FiX color="#737380" className={S.closeIcon}/>
    </button>
  ) : (
    <button
      type="button"
      className={S.signInButton}
      onClick={() => {}}
    >
      <FaGithub color="#FFB800" />
      Entrar com GitHub
    </button>
  )
}

export default SignInButton
