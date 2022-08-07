import Head from 'next/head'
import S from '../styles/styles.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Bem vindo a Board! - Organizando suas tarefas.</title>
        <meta name="description" content="Bem vindo ao app que organiza suas tarefas do dia a dia" />
      </Head>
      <div>
        <h1 className={S.title}>Bem vindo ao projeto <span>Board</span>!</h1>
      </div>
    </>
  )
}
