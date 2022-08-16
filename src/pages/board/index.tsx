import React, {FormEvent} from 'react'
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/react'

import { FiPlus, FiCalendar, FiEdit2, FiTrash, FiClock } from 'react-icons/fi'
import SupportButton from '../../components/SupportButton'
import { default as connection } from '../../services/firebaseConnection'
import { addDoc, collection, getFirestore } from 'firebase/firestore'

import S from './styles.module.scss'


interface BoardProps {
  user: {
    id: string;
    name: string;
  }
}

const Board = ({ user }: BoardProps) => {
  const [ task, setTask ] = React.useState('')

  const db = getFirestore(connection)

  const handleAddTask = async (e: FormEvent) => {
    e.preventDefault()

    try {
      const docRef = await addDoc(collection(db, 'tarefas'), {
        created: new Date(),
        tarefa: task,
        userId: user.id,
        nome: user.name
      })
      console.log("Document written with ID: ", docRef.id)
    } catch(e) {
      console.error("Error adding document: ", e)
    }
  }

  return (
    <>
      <Head>
        <title>Organizando minhas tarefas - Board</title>
        <meta name="description" content="O Board organiza suas tarefas do dia a dia" />
      </Head>
      <main className={S.container}>
        <form onSubmit={handleAddTask}>
          <input
            type="text"
            placeholder="Digite sua tarefa..."
            value={task}
            onChange={ ({target}) => setTask(target.value)}
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

export const getServerSideProps: GetServerSideProps = async ({ req }) => {

  const session = await getSession({ req })

  if (!session?.id) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  const user = {
    id: session.id,
    name: session.user.name,
  }

  return {
    props: {
      user
    }
  }

}

export default Board
