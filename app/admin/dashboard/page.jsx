import Navbar from "../../components/Navbar";
import AdminSidebar from "../../components/AdminSidebar";

export default function AdminDashboard() {
  return (
    <>
      <Navbar />
      <div className="flex min-h-[80vh]">
        <AdminSidebar />
        <main className="flex-1 p-8">
          <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
          <div className="bg-white shadow rounded p-6">
            <p className="text-gray-700">Welcome to the admin dashboard. Here you can manage users, view analytics, and update settings.</p>
          </div>
        </main>
      </div>
    </>
  );
}
