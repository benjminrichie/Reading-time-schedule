import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white px-4 py-3 flex justify-between items-center">
      <div className="font-bold text-xl">
        <Link href="/">MyApp</Link>
      </div>
      <div className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/auth/sign-in">Login</Link>
        <Link href="/admin/dashboard">Admin Dashboard</Link>
      </div>
    </nav>
  );
}
