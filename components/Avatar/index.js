import Image from 'next/image'
import styles from './styles.module.css'

export default function Avatar ({ alt, src, text, width = 46, height = 46 }) {
  return (
    <div className={styles.container}>
      <Image
        className={styles.avatar}
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
      {text && <strong>{text}</strong>}
    </div>
  )
}
