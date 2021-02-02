

import Link from 'next/link'

export default function Index() {
  return (
    <div>
      <h1>Let's crunch some numbers</h1>
      <p>Before we can offset your carbon footprint, we need to work out how big it is. We know things aren't normal right now, so tell us what you'd normally get up to. It'll take about 3 minutes.</p>

      <Link href="/transport">
        <button>Start</button>
      </Link>
    </div>
  )
}
