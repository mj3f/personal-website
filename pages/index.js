import Head from 'next/head'

export default function Home() {
  return (
    <div className="bg-white dark:bg-slate-800 flex w-full h-screen items-center justify-center">
      <Head>
        <title>Mike Pratt - Software Engineer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-4xl text-blue-600 font-semibold">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>
    </div>
  )
}
