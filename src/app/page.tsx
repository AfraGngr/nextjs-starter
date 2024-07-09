import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div>
        <Link href="/performance">Performance Page</Link>
        <Link href="/reliability">Reliability Page</Link>
        <Link href="/scale">Scale Page</Link>
      </div>
      Home Page
    </div>  
  );
}
