import Navigation from '@components/navigation'
import Image from 'next/image'

const HelloThere = () => (
  <>
    <Navigation />
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
