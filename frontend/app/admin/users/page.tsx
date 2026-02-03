"use client";

import Link from "next/link";
import { useMemo, useState, type ChangeEvent, type FormEvent } from "react";

const menuItems = [
  {
    section: "Utama",
    items: [
      { id: "dashboard", label: "Dashboard", href: "/admin" },
      { id: "users", label: "Kelola Pengguna", href: "/admin/users" },
      { id: "classes", label: "Manajemen Kelas" }
    ]
  },
  {
    section: "Operasional",
    items: [
      { id: "schedule", label: "Jadwal Live Session" },
      { id: "payments", label: "Transaksi & Pembayaran" },
      { id: "reports", label: "Laporan & Analitik" }
    ]
  },
  {
    section: "Pengaturan",
    items: [
      { id: "content", label: "Konten & Banner" },
      { id: "settings", label: "Pengaturan Sistem" }
    ]
  }
];

const userStats = [
  { label: "Total Pengguna", value: "1.248" },
  { label: "Mentor Aktif", value: "48" },
  { label: "Siswa Premium", value: "312" }
];

const initialUsers = [
  {
    name: "Rania Putri",
    role: "Mentor UI/UX",
    status: "Terverifikasi",
    updated: "Hari ini, 09.12 WIB"
  },
  {
    name: "Ahmad Fauzi",
    role: "Siswa Data Analytics",
    status: "Aktif",
    updated: "Kemarin, 18.30 WIB"
  },
  {
    name: "Shelly Nabilla",
    role: "Mentor Front-End",
    status: "Menunggu Review",
    updated: "2 hari lalu"
  },
  {
    name: "Yusuf Pratama",
    role: "Siswa Mobile Developer",
    status: "Aktif",
    updated: "3 hari lalu"
  }
];

const statusStyles: Record<string, string> = {
  Aktif: "bg-emerald-100 text-emerald-700",
  Terverifikasi: "bg-blue-100 text-blue-700",
  "Menunggu Review": "bg-amber-100 text-amber-700"
};

export default function AdminUsersPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [users, setUsers] = useState(initialUsers);
  const [formState, setFormState] = useState({
    name: "",
    role: "",
    status: "Aktif"
  });

  const nextStats = useMemo(() => {
    return userStats.map((stat) => {
      if (stat.label === "Total Pengguna") {
        return {
          ...stat,
          value: (1248 + users.length - initialUsers.length).toLocaleString(
            "id-ID"
          )
        };
      }
      return stat;
    });
  }, [users.length]);

  const handleFormChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formState.name.trim() || !formState.role.trim()) {
      return;
    }

    setUsers((prev) => [
      {
        name: formState.name.trim(),
        role: formState.role.trim(),
        status: formState.status,
        updated: "Baru saja"
      },
      ...prev
    ]);

    setFormState({ name: "", role: "", status: "Aktif" });
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="flex min-h-screen w-full gap-0 px-0 py-6">
        <aside className="hidden w-72 flex-col gap-8 bg-slate-900 px-6 py-8 text-white lg:flex">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-200">
              Admin Panel
            </p>
            <h1 className="mt-2 text-2xl font-semibold">True Class</h1>
            <p className="mt-3 text-sm text-slate-300">
              Akses cepat untuk memantau seluruh pengguna platform.
            </p>
          </div>

          <nav className="space-y-6">
            {menuItems.map((menu) => (
              <div key={menu.section}>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                  {menu.section}
                </p>
                <div className="mt-3 space-y-2 text-sm text-slate-200">
                  {menu.items.map((item) =>
                    item.href ? (
                      <Link
                        key={item.id}
                        className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left transition ${
                          item.id === "users"
                            ? "bg-white/15 text-white shadow-lg shadow-blue-500/20"
                            : "text-slate-200 hover:bg-white/10"
                        }`}
                        href={item.href}
                      >
                        <span>{item.label}</span>
                        {item.id === "users" ? (
                          <span className="rounded-full bg-blue-500/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-blue-200">
                            Aktif
                          </span>
                        ) : null}
                      </Link>
                    ) : (
                      <div
                        key={item.id}
                        className="flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-slate-200/70"
                      >
                        <span>{item.label}</span>
                      </div>
                    )
                  )}
                </div>
              </div>
            ))}
          </nav>

          <div className="rounded-2xl bg-white/10 p-4 text-sm text-slate-200">
            <p className="text-xs uppercase tracking-[0.2em] text-blue-200">
              Notifikasi Pengguna
            </p>
            <p className="mt-2 leading-relaxed">
              12 permintaan verifikasi mentor menunggu persetujuan.
            </p>
          </div>
        </aside>

        <main className="flex w-full flex-col gap-6">
          <header className="flex flex-col gap-6 rounded-3xl bg-white px-6 py-8 shadow-lg shadow-slate-200/70 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
                Manajemen Pengguna
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-900">
                Kelola pengguna dengan cepat
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                Pantau status mentor, siswa, dan admin dari satu tempat.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button className="rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-slate-300 hover:text-slate-900">
                Unduh Data
              </button>
              <button
                className="rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-700"
                onClick={() => setIsModalOpen(true)}
                type="button"
              >
                Tambah Pengguna
              </button>
            </div>
          </header>

          <section className="grid gap-6 lg:grid-cols-3">
            {nextStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl bg-white p-6 shadow-lg shadow-slate-200/60"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
                  {stat.label}
                </p>
                <h3 className="mt-4 text-3xl font-semibold text-slate-900">
                  {stat.value}
                </h3>
              </div>
            ))}
          </section>

          <section className="rounded-3xl bg-white p-6 shadow-lg shadow-slate-200/60">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Daftar pengguna terbaru
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  Update aktivitas pengguna terbaru di platform.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <button className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700">
                  Filter Role
                </button>
                <button className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700">
                  Status
                </button>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {users.map((user) => (
                <div
                  key={user.name}
                  className="flex flex-col justify-between gap-4 rounded-2xl border border-slate-100 bg-slate-50 px-4 py-4 sm:flex-row sm:items-center"
                >
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      {user.name}
                    </p>
                    <p className="mt-1 text-sm text-slate-500">{user.role}</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-sm">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        statusStyles[user.status] ??
                        "bg-slate-200 text-slate-700"
                      }`}
                    >
                      {user.status}
                    </span>
                    <span className="text-xs text-slate-400">
                      {user.updated}
                    </span>
                    <button className="rounded-full border border-slate-200 px-4 py-1 text-xs font-semibold text-slate-600">
                      Lihat Profil
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
      {isModalOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/40 px-4 py-6">
          <div className="w-full max-w-xl rounded-3xl bg-white p-6 shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
                  Tambah Pengguna
                </p>
                <h3 className="mt-2 text-xl font-semibold text-slate-900">
                  Input data pengguna baru
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  Lengkapi informasi dasar untuk menambah pengguna baru.
                </p>
              </div>
              <button
                className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-500"
                onClick={() => setIsModalOpen(false)}
                type="button"
              >
                Tutup
              </button>
            </div>

            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Nama Lengkap
                </label>
                <input
                  className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  name="name"
                  onChange={handleFormChange}
                  placeholder="Masukkan nama pengguna"
                  required
                  type="text"
                  value={formState.name}
                />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Peran
                </label>
                <input
                  className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  name="role"
                  onChange={handleFormChange}
                  placeholder="Contoh: Mentor UI/UX"
                  required
                  type="text"
                  value={formState.role}
                />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Status
                </label>
                <select
                  className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  name="status"
                  onChange={handleFormChange}
                  value={formState.status}
                >
                  <option value="Aktif">Aktif</option>
                  <option value="Terverifikasi">Terverifikasi</option>
                  <option value="Menunggu Review">Menunggu Review</option>
                </select>
              </div>
              <div className="flex flex-wrap justify-end gap-3 pt-2">
                <button
                  className="rounded-full border border-slate-200 px-5 py-2 text-sm font-semibold text-slate-600"
                  onClick={() => setIsModalOpen(false)}
                  type="button"
                >
                  Batalkan
                </button>
                <button
                  className="rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-700"
                  type="submit"
                >
                  Simpan Pengguna
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </div>
  );
}
