import Link from 'next/link'

// Dom components go here
export default function Page(props) {
  return (
    <>
    <h1>Welcome to 360 Tour VR Experience</h1>
    <ul>
      <li>
        <Link href="/tour1">Tour 1</Link>
      </li>
      <li>
        <Link href="/tour2">Tour 2</Link>
      </li>
    </ul>
    </>
  )
}

export async function getStaticProps() {
  return { props: { title: 'Index' } }
}
