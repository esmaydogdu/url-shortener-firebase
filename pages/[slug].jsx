import Link from 'next/link'
import { API_URL } from '../utils/config'
//this is the page for receiving domain/key requests
//it makes an api call in getServerSideProps so that it happens pre-render
//that api will return us the relevant long url
export async function getServerSideProps(context) {
  const key = context.params.slug
  const response = await fetch(`${API_URL}/api/check/${key}`).then(res => res.json())
  const { longUrl } = response

  if (longUrl) {
    return {
      redirect: {
        destination: longUrl,
        permanent: false,
      },
    }
  }
  return {
    props: {}
  }
}

export default function Redirect() {
  return (
    <>
      <h1>This key doesn't exist.</h1>
      <Link href='/'><a>Go back to homepage</a></Link>
    </>
  )
}