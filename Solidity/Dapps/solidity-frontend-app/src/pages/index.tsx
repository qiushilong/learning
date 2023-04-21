import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <ul>
        <li><Link href="/auction">拍卖合约</Link></li>
      </ul>
    </main>
  )
}
