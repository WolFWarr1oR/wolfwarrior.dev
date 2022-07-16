import Head from 'next/head'
import Image from 'next/image'
import home from '../styles/Home.module.css'

export default function Home() {
    return (
        <div className={home.container}>
            <Head>
                <title>WolFWarrioR</title>
                <meta name="description" content="WolFWarrioR is a developer" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={home.main}>
                <h1 className={home.title}>
                    Welcome to <a href="/">my site!</a>
                </h1>

                <p className={home.description}>
                    Get started by editing{' '}
                    <code className={home.code}>pages/index.js</code>
                </p>

                <div className={home.grid}>
                    <a href="/blog" className={home.card}>
                        <h2>My blog &rarr;</h2>
                        <p>Find in-depth information about Next.js features and API.</p>
                    </a>
                    <a href="https://nextjs.org/docs" className={home.card}>
                        <h2>Documentation &rarr;</h2>
                        <p>Find in-depth information about Next.js features and API.</p>
                    </a>

                    <a href="https://nextjs.org/learn" className={home.card}>
                        <h2>Learn &rarr;</h2>
                        <p>Learn about Next.js in an interactive course with quizzes!</p>
                    </a>

                    <a
                        href="https://github.com/vercel/next.js/tree/canary/examples"
                        className={home.card}
                    >
                        <h2>Examples &rarr;</h2>
                        <p>Discover and deploy boilerplate example Next.js projects.</p>
                    </a>

                    <a
                        href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        className={home.card}
                    >
                        <h2>Deploy &rarr;</h2>
                        <p>
                            Instantly deploy your Next.js site to a public URL with Vercel.
                        </p>
                    </a>
                </div>
            </main>

            <footer className={home.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <span className={home.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
                </a>
            </footer>
        </div>
    )
}
