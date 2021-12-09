import styles from './header.module.css'

const Header = () => {
  return (
    <header className={styles.container}>
      <h1 className={styles.title}>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
    </header>
  )
}

export default Header
