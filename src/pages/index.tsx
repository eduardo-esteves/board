import { GetStaticProps } from 'next'
import Head from 'next/head'

import S from '../styles/styles.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Bem vindo a Board! - Organizando suas tarefas.</title>
        <meta name="description" content="Bem vindo ao app que organiza suas tarefas do dia a dia" />
      </Head>
      <main className={S.contentContainer}>
        <img src="/img/board-user.svg" alt="Ferramenta board" />

        <section className={S.callToAction}>
          <h1>Uma ferramenta para seu dia a dia Escreva, planeje e organize-se...</h1>
          <p><span>100% Gratuita</span> e online.</p>
        </section>

        <div className={S.donaters}>
          <img src="/img/steve.png" alt="Usuario 1" />
        </div>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props : {

    },
    revalidate: 60 * 60 // Atualiza a cada 1 hora
  }
}
