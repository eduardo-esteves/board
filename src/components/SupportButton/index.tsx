import Link from 'next/link'

import S from './styles.module.scss'

const SupportButton = () => {
  return (
    <div className={S.doanteContainer}>
      <Link href="/donate">
        <button>Apoiar</button>
      </Link>
    </div>
  )
}


export default SupportButton
