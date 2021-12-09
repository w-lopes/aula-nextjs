import Navigation from '@components/navigation'
import Head from 'next/head'
import Image from 'next/image'

const HelloThere = () => (
  <>
    <Navigation />
    <Head>
      <title>Hello There</title>
      <meta property="og:title" content="Hello There" />
    </Head>
    <article>
      <h1>Hello There</h1>
      <Image
        src='/posts/hello-there/hello.jpg'
        alt='Hello There'
        width='509'
        height='339'
      />
    </article>
  </>
)

export default HelloThere
