import styles from "./index.module.css"

export default function MainTitle({children}: {children:React.ReactNode}){
    return(
        <h2 className={styles.miniTitle}>
            {children}
        </h2>
    )
}