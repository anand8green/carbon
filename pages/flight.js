
import Link from 'next/link'

export default function Flight() {
    return (
        <div>
            <h1>How many flights have you taken in the past 12 months?</h1>

            <Link href="/">
                <button>
                    Next
                </button>
            </Link>
        </div>
    )
}
