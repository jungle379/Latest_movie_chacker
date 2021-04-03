import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="toppage">
      <Head>
        <title>Latest_Movie_Checker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen bg-green-100">
        <h1 className="container ml-10 text-6xl font-thin text-red-400 underline mb-40">
        <Link href="">Latest Movie Checker</Link>
        </h1>

        <div className="flex h-10">
          <Link href="/newest/latest">
            <h2 className="bg-center text-2xl text-blue-300 justify-between ml-20 mr-10">最新の映画</h2>
          </Link>
          <Link href="/newest/nextweek">
            <h3 className="bg-center text-2xl text-blue-300 justify-between ml-20 mr-10">来週公開予定の映画</h3>
          </Link>
          <Link href="/newest/nextweek">
            <h3 className="bg-center text-2xl text-blue-300 justify-between ml-20 mr-10">今月公開予定の映画</h3>
          </Link>
        </div>
      </main>

      <footer className="bg-bottom text-0.5xl h-300">
        <div className="flex">
        <Link href="/footer/beginner">
          <h4 className="flex-auto text-0.5xl ml-40 m-5 w-10">初めての方へ</h4>
        </Link>
        <Link href="/footer/creater">
          <h5 className="flex-auto text-0.5xl ml-40 m-5 w-10">作成者について</h5>
        </Link>
        </div>
      <Link href="">
           <div className="m-3 ml-80 pl-80">To_movie_fun.inc</div>
          </Link>
      </footer>
    </div>
  )
}
