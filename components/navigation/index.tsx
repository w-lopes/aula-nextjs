import Link from 'next/link'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'
import Links from './links'
import styles from './navigation.module.css'

type NavAnchorT = {
  path: string;
  children: ReactNode;
}

const NavAnchor = ({ path, children }: NavAnchorT) => {
  return (
    <Link href={path}>
      <a className={styles.navAnchor}>{children}</a>
    </Link>
  )
}

const Navigation = () => {
  const { pathname } = useRouter()

  return (
    <nav>
      <ul className={styles.list}>
        {Links.map(link => (
          <li key={link.path}>
            { pathname === link.path
              ? <b>{link.name}</b>
              : <NavAnchor path={link.path}>{link.name}</NavAnchor>
            }
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
