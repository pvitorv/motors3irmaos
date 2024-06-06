"use client"

import {useState, useEffect } from 'react'
import styles from './style.module.scss'
import Link from 'next/link'


export function Header(){

    const[top, setTop] = useState(true);

    const scrollHandler = () => {
        window.scrollY > 10 ? setTop(false) : setTop(true);
    }

    useEffect(() => {

        window.addEventListener("scroll", scrollHandler)

        return () => window.removeEventListener("scroll", scrollHandler)

    }, [top])

    return(
        <header className={`${styles.header} ${!top ? styles.fixed : styles.background }`}>

            <div className={styles.container}>

                <div className={styles.content}>

                    <div className={styles.contentLogo}>
                        <a href='/'>
                            Motors 3 Irmãos
                        </a>
                    </div>

                    <nav className={styles.nav}>
                        <a href='/'>
                            HOME
                        </a>

                        <a href='/#servicos'>
                            SERVIÇOS
                        </a>

                        <a href='/#contatos'>
                            CONTATOS
                        </a>
                    </nav>

                </div>

            </div>

        </header>
    )
}
