import styles from "./index.module.css"

interface MainTitleProps {
    children:React.ReactNode,
    size?: "one" | "two",
    direction?: "left" | "center" | "right",
    wide?: boolean
}
export default function MainTitle({children, size = "one", direction = "center", wide = true}: MainTitleProps){
    return(
        <h1 className={`${styles.mainTitle} ${styles[size]} ${styles[direction]} ${!wide && "font-[500]"}`}>
            {children}
        </h1>
    )
}