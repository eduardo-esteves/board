import Head from 'next/head'
import { FiPlus, FiCalendar, FiEdit2, FiTrash, FiClock } from 'react-icons/fi'
import SupportButton from '../../components/SupportButton'

import S from './styles.module.scss'

const Board = () => {
  return (
    <>
      <Head>
        <title>Organizando minhas tarefas - Board</title>
        <meta name="description" content="O Board organiza suas tarefas do dia a dia" />
      </Head>
      <main className={S.container}>
        <form>
          <input
            type="text"
            placeholder="Digite sua tarefa..."
          />

          <button type="submit">
            <FiPlus size={25} color="#17181f" />
          </button>
        </form>

        <h1>Você tem 2 tarefas!</h1>

        <section>
          <article className={S.taskList}>
            <p>Aprender criar projetos usando NextJS e aplicando firebase com back.</p>
            <div className={S.actions}>
              <div>
                <div>
                  <FiCalendar size={20} color="#FFB800" />
                  <time>17 de Julho de 2021</time>
                </div>

                <button>
                  <FiEdit2 size={20} color="#FFF" />
                  <span>Editar</span>
                </button>
              </div>

              <button>
                <FiTrash size={20} color="#FF3636" />
                <span>Excluir</span>
              </button>
            </div>
          </article>
        </section>

      </main>

      <div className={S.vipContainer}>
        <h3>Obrigado por apoiar esse projeto.</h3>
        <div>
          <FiClock size={28} color="#FFF" />
          <time>
            Última doação foi a 3 dias.
          </time>
        </div>
      </div>

      <SupportButton />

    </>
  )
}

export default Board
