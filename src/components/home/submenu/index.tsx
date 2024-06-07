import styles from './styles.module.scss'
import {X, Menu} from "lucide-react"

export function Submenu(){
    return(
        <section className={styles.submenu}>
           <div className={styles.submenuIcon}>
            <Menu size={34} color="#121212"/>
           </div>
            <ul className={styles.ul}>
                <li>
                    <a href="/post/pagina-1">Página 1</a>
                
                    <a href="/post/pagina-2">Página 2</a>
                </li>
            </ul>
        </section>
    )
}