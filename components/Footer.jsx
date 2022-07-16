import Link from "next/link";
import footer from '../styles/Footer.module.css'


export default function Footer() {
    return(
        <div className={footer.container}>
            <footer>
                <div className={footer.selector}>
                    <div className={`${footer.icon} ${footer.icon_selector}`}></div>
                    <label htmlFor="" className={footer.selector_label}>Русский</label>
                    <div className={`${footer.icon} ${footer.icon_selector_arrow}`}></div>
                </div>
                <div className={footer.logo_container}>
                    <svg></svg>
                </div>
                <div className={`${footer.links} ${footer.links_main}`}>
                    {/*Link[href='/']>a[className={footer.anchor}] */}
                    <div className={`${footer.link} ${footer.link_main}`}>
                        <Link href='/'>
                            <a className={footer.anchor}>TEST</a>
                        </Link>
                    </div>
                    <div className={`${footer.link} ${footer.link_main}`}>
                        <Link href='/'>
                            <a className={footer.anchor}>TEST</a>
                        </Link>
                    </div>
                    <div className={`${footer.link} ${footer.link_main}`}>
                        <Link href='/'>
                            <a className={footer.anchor}>TEST</a>
                        </Link>
                    </div>
                    <div className={`${footer.link} ${footer.link_main}`}>
                        <Link href='/'>
                            <a className={footer.anchor}>TEST</a>
                        </Link>
                    </div>
                    <div className={`${footer.link} ${footer.link_main}`}>
                        <Link href='/'>
                            <a className={footer.anchor}>TEST</a>
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    )
}