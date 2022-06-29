import Link from 'next/link'
import nav from '../styles/Navbar.module.css'

export default function Navbar() {
  return(
    <nav className={`${nav.navbar} `}>
    {/* // <nav className={[isCompact && 'is-compact', nav.navbar]}> */}
      <div className={nav.container}>
        <div className={nav.desktop}>
          <Link href="/">
            <a className={nav.logo}><span></span></a>
          </Link>
          <Link href="/">
            <a className={nav.logo}><span></span></a>
          </Link>
          <div className={nav.items}>
            <Link href="/">
              <a className={nav.item}>
                <div className={nav.label}>Проекты</div>
              </a>
            </Link>
            <Link href="/blog">
              <a className={nav.item}>
                <div className={nav.label}>Блог</div>
              </a>
            </Link>
            <Link href="/portfolio">
              <a className={nav.item}>
                <div className={nav.label}>Портфолио</div>
              </a>
            </Link>
            <Link href="/contacts">
              <a className={nav.item}>
                <div className={nav.label}>Контакты</div>
              </a>
            </Link>
            <Link href="/donate">
              <a className={nav.item}>
                <div className={nav.label}>Донат</div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}