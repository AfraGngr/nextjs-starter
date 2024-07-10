import Hero from '@/components/hero'
import reliabilityImg from 'public/reliability.jpg'

export default function ReliabilityPage() {
    return (
        <div>
            <Hero
                image={reliabilityImg}
                imgAlt="welding"
                title="Super high reliability hosting"
            />
        </div>
    )
}