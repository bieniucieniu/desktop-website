import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col text-white">
      <nav className="flex flex-row justify-around text-3xl underline">
        <a target="_blank" href="https://github.com/bieniucieniu">
          github
        </a>
        <Link href="/breakout">breakout</Link>
        <Link href="/sorting">sorting</Link>
        <Link href="/beakout">beakout (pre breakout)</Link>
      </nav>
    </main>
  );
}
