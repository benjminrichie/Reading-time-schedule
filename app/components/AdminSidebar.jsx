import Link from 'next/link';

export default function AdminSidebar() {
  return (
    <aside className="w-64 min-h-screen p-6 bg-gray-100 border-r">
      <nav className="flex flex-col space-y-4">
        <Link href="/admin/dashboard" className="font-semibold text-gray-800 hover:text-blue-600">Dashboard</Link>
        <Link href="#" className="text-gray-800 hover:text-blue-600">Users</Link>
        <Link href="#" className="text-gray-800 hover:text-blue-600">Settings</Link>
      </nav>
    </aside>
  );
}
