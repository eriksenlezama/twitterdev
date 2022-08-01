import Image from 'next/image'
import styles from './styles.module.css'

export default function Avatar ({ alt, src, text }) {
  return (
    <div className={styles.container}>
      <Image
        className={styles.avatar}
        src={src}
        alt={alt}
        width={100}
        height={100}
      />
      {text && <strong>{text}</strong>}
    </div>
  )
}
