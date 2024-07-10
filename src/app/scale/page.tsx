import Hero from '@/components/hero'
import scaleImg from 'public/scale.jpg'

export default function ScalePage() {
    return (
        <div>
            <Hero
                image={scaleImg}
                imgAlt="steel factory"
                title="Scale your up to infinite"
            />
        </div>
    )
}