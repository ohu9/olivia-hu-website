import Link from 'next/link'
import styles from './notfound.module.css'

export default function NotFound() {
    return (
        <div className={styles.main}>
            <h1>Hi there!</h1>
            <p className={styles.message}>Unfortunately, we could not find the page you were looking for.</p>
            <Link href="/">
                <div className={styles.button}>return home</div>
            </Link>
        </div>
)}