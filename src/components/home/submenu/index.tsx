"use client"


import { useState, useEffect } from 'react'
import styles from './styles.module.scss'
import {X, Menu} from "lucide-react"

export function Submenu(){
    const[isOpen, setIsOpen] = useState(false);
    useEffect(()=>{
        const handleResize = () =>{
            if(window.innerWidth > 768){
                setIsOpen(false);
            }
        }
        window.addEventListener("resize", handleResize)

        return () => window.removeEventListener("resize", handleResize)

    },[])

    function toggMenu(){
        setIsOpen(!isOpen);
    }

    return(
        <section className={styles.submenu}>
           <div className={styles.submenuIcon} onClick={toggMenu}>
                <Menu size={34} color="#121212"/>
                Serviços
           </div>
            <ul className={`${styles.ul} ${isOpen ? styles.open : ""}`}>

                {isOpen && (
                    <button onClick={toggMenu} className={styles.closeButton}>
                        <X size={54} color='#121212' />
                    </button>
                )}

                <li>
                    <a href="/post/pagina-1">Página 1</a>               
                </li>

                <li>
                    <a href="/post/pagina-2">Página 2</a>
                </li>
            </ul>
        </section>
    )
}