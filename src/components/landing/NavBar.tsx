import Link from "next/link";

export function NavBar() {
  return (
    <header className="flex items-center justify-between px-6 py-4">
      <span className="text-lg font-semibold">Burgerbot</span>
      <nav className="flex gap-4 text-sm">
        <Link href="/">Landing</Link>
        <Link href="/about">About</Link>
        <Link href="/technology">Technology</Link>
      </nav>
    </header>
  );
}

