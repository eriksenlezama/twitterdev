import css from '../../styles/Layout.module.css'
import styles, { globalStyles } from './styles'

export default function AppLayout ({ children }) {
  return (
    <>
      <div>
        <main className={css.main}>
          {children}
        </main>
      </div>

      <style jsx>{styles}</style>
      <style jsx global>{globalStyles}</style>
    </>
  )
}
