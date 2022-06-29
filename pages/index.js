import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import home from '../styles/Home.module.css'
import NewsIMG from '../public/blog/allgames-card-v6-final-lesstext-1920.jpg'

export default function Home() {
  const isCompact = false
  return (
    <section id="site">
      <Head>
        <title>WolFWarrioR</title>
        <meta name="description" content="WolFWarrioR is a developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={`${home.main} ${home.header} bg-gradient-to-r from-cyan-500 to-fuchsia-500`}>
        {/* <h1 className={home.title}>
          Welcome to <a href="/">my site!</a>
        </h1> */}
        <div className={home.video_overlay}></div>
        <div className={`${home.inner} ${home.container} ${home.container_wide}`}>
          <h1  className={`${home.title} text-white`}>WolFWarrioR</h1>
        </div>
      </section>

      <section className={`${home.news} bg-neutral-900 ${home.spacing_padding_large}`}>
        <div className={`${home.news_container} content-center ${home.content_gutter__large} content-center--large`}>
          <div className={home.news_title}>
            <h2>Новости</h2>
            <Link href='/blog'>
              <a className={`btn ${home.btn_standard} ${home.btn_standard__black} ${home.btn_standard__small}`}>
                <span>Посмотреть все</span>
              </a>
            </Link>
          </div>
          <div className={home.news_wrapper}>
            <div className={home.news_main_wrapper}>
              <Link href='/blog'>
                <a className={home.news_main}>
                  <div className={`responsive_media pb-[80%]`}>
                    <Image
                      src={NewsIMG}
                      alt="BLOGIMG"
                      placeholder='blur'
                      blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
                    />
                    <div className={home.news_main_content}>
                      <h3>Игры Riot в Xbox Game Pass</h3>
                      <div className={home.news_category}>Новости</div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <ul className={home.news_articles}>
              <li className={home.news_article}>
                <Link href='/blog'>
                  <a className={home.news_article_card}>
                    <div className={home.news_article_title_wrapper}>
                      <h3 className={home.news_article_title}>Главные события месяца культурного наследия AAPI</h3>
                      <div className={home.news_category}>Новости</div>
                    </div>
                    <div className={home.news_article_image} style={{ backgroundImage: "url(https://www.riotgames.com/darkroom/500/2353ba37b71a758b0fe3264fc9eab970:1ba7e483917f56cc67f2113ae1324923/rg-statespace-logo.png)" }}></div>
                  </a>
                </Link>
              </li>
              <li className={home.news_article}>
                <Link href='/blog'>
                  <a className={home.news_article_card}>
                    <div className={home.news_article_title_wrapper}>
                      <h3 className={home.news_article_title}>Главные события месяца культурного наследия AAPI</h3>
                      <div className={home.news_category}>Новости</div>
                    </div>
                    <div className={home.news_article_image} style={{ backgroundImage: "url(https://www.riotgames.com/darkroom/500/2353ba37b71a758b0fe3264fc9eab970:1ba7e483917f56cc67f2113ae1324923/rg-statespace-logo.png)" }}></div>
                  </a>
                </Link>
              </li>
              <li className={home.news_article}>
                <Link href='/blog'>
                  <a className={home.news_article_card}>
                    <div className={home.news_article_title_wrapper}>
                      <h3 className={home.news_article_title}>Главные события месяца культурного наследия AAPI</h3>
                      <div className={home.news_category}>Новости</div>
                    </div>
                    <div className={home.news_article_image} style={{ backgroundImage: "url(https://www.riotgames.com/darkroom/500/2353ba37b71a758b0fe3264fc9eab970:1ba7e483917f56cc67f2113ae1324923/rg-statespace-logo.png)" }}></div>
                  </a>
                </Link>
              </li>
              <li className={home.news_article}>
                <Link href='/blog'>
                  <a className={home.news_article_card}>
                    <div className={home.news_article_title_wrapper}>
                      <h3 className={home.news_article_title}>Главные события месяца культурного наследия AAPI</h3>
                      <div className={home.news_category}>Новости</div>
                    </div>
                    <div className={home.news_article_image} style={{ backgroundImage: "url(https://www.riotgames.com/darkroom/500/2353ba37b71a758b0fe3264fc9eab970:1ba7e483917f56cc67f2113ae1324923/rg-statespace-logo.png)" }}></div>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </section>
  )
}


const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`

const toBase64 = (str) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str)
