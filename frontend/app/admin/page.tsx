"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const menuItems = [
  {
    section: "Utama",
    items: [
      { id: "dashboard", label: "Dashboard", badge: "Aktif" },
      { id: "users", label: "Kelola Pengguna" },
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

const menuContent = {
  dashboard: {
    eyebrow: "Dashboard Admin",
    title: "Selamat datang, Admin Sistem",
    description:
      "Pantau performa platform dan pastikan pengalaman belajar berjalan lancar.",
    primaryAction: "Buat Pengumuman",
    secondaryAction: "Export Laporan"
  },
  users: {
    eyebrow: "Manajemen Pengguna",
    title: "Kelola pengguna & mentor",
    description:
      "Atur akses, verifikasi mentor, dan pantau aktivitas siswa secara real-time.",
    primaryAction: "Tambah Pengguna",
    secondaryAction: "Unduh Daftar"
  },
  classes: {
    eyebrow: "Manajemen Kelas",
    title: "Perbarui kurikulum kelas",
    description:
      "Susun modul baru, revisi materi, dan cek progres tiap kelas aktif.",
    primaryAction: "Buat Kelas Baru",
    secondaryAction: "Tinjau Draft"
  },
  schedule: {
    eyebrow: "Operasional",
    title: "Atur jadwal live session",
    description:
      "Sinkronkan jadwal mentor dan pastikan sesi live berjalan sesuai SLA.",
    primaryAction: "Tambah Jadwal",
    secondaryAction: "Lihat Kalender"
  },
  payments: {
    eyebrow: "Keuangan",
    title: "Kelola transaksi & pembayaran",
    description:
      "Pantau pembayaran masuk, verifikasi invoice, dan kirim pengingat tagihan.",
    primaryAction: "Rekonsiliasi",
    secondaryAction: "Lihat Riwayat"
  },
  reports: {
    eyebrow: "Laporan",
    title: "Analitik performa platform",
    description:
      "Unduh laporan mingguan dan evaluasi tren pertumbuhan siswa.",
    primaryAction: "Generate Laporan",
    secondaryAction: "Bagikan Ringkasan"
  },
  content: {
    eyebrow: "Konten",
    title: "Kelola konten & banner",
    description:
      "Perbarui materi promosi, banner beranda, dan informasi event terbaru.",
    primaryAction: "Unggah Banner",
    secondaryAction: "Lihat Asset"
  },
  settings: {
    eyebrow: "Pengaturan",
    title: "Perbarui pengaturan sistem",
    description:
      "Atur preferensi keamanan, notifikasi, dan konfigurasi platform.",
    primaryAction: "Simpan Pengaturan",
    secondaryAction: "Audit Log"
  }
};

const summaryCards = [
  {
    title: "Total Mentor",
    value: "48",
    note: "+6 mentor baru bulan ini"
  },
  {
    title: "Kelas Aktif",
    value: "132",
    note: "12 kelas menunggu review"
  },
  {
    title: "Pendapatan Bulanan",
    value: "Rp 324 Jt",
    note: "+18% dibanding bulan lalu"
  }
];

const recentActivities = [
  {
    title: "Mentor UI/UX Design menambahkan modul baru",
    time: "15 menit lalu"
  },
  {
    title: "Harga kelas Data Analytics diperbarui",
    time: "1 jam lalu"
  },
  {
    title: "5 siswa baru menyelesaikan pembayaran",
    time: "Hari ini, 09.30 WIB"
  }
];

export default function AdminPage() {
  const [activeMenu, setActiveMenu] = useState("dashboard");
  const activeContent = useMemo(
    () => menuContent[activeMenu as keyof typeof menuContent],
    [activeMenu]
  );

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
              Kelola sistem, mentor, dan transaksi dari satu dashboard.
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
                    item.id === "users" ? (
                      <Link
                        key={item.id}
                        className="flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-slate-200 transition hover:bg-white/10"
                        href="/admin/users"
                      >
                        <span>{item.label}</span>
                        {item.badge ? (
                          <span className="rounded-full bg-blue-500/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-blue-200">
                            {item.badge}
                          </span>
                        ) : null}
                      </Link>
                    ) : (
                      <button
                        key={item.id}
                        className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left transition ${
                          activeMenu === item.id
                            ? "bg-white/15 text-white shadow-lg shadow-blue-500/20"
                            : "text-slate-200 hover:bg-white/10"
                        }`}
                        onClick={() => setActiveMenu(item.id)}
                        type="button"
                      >
                        <span>{item.label}</span>
                        {item.badge ? (
                          <span className="rounded-full bg-blue-500/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-blue-200">
                            {item.badge}
                          </span>
                        ) : null}
                      </button>
                    )
                  )}
                </div>
              </div>
            ))}
          </nav>

          <div className="rounded-2xl bg-white/10 p-4 text-sm text-slate-200">
            <p className="text-xs uppercase tracking-[0.2em] text-blue-200">
              Ringkasan Sistem
            </p>
            <p className="mt-2 leading-relaxed">
              3 notifikasi menunggu aksi admin hari ini.
            </p>
          </div>
        </aside>

        <main className="flex w-full flex-col gap-6">
          <header className="flex flex-col gap-6 rounded-3xl bg-white px-6 py-8 shadow-lg shadow-slate-200/70 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
                {activeContent.eyebrow}
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-900">
                {activeContent.title}
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                {activeContent.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button className="rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-slate-300 hover:text-slate-900">
                {activeContent.secondaryAction}
              </button>
              <button className="rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-700">
                {activeContent.primaryAction}
              </button>
            </div>
          </header>

          <section className="grid gap-6 lg:grid-cols-3">
            {summaryCards.map((card) => (
              <div
                key={card.title}
                className="rounded-3xl bg-white p-6 shadow-lg shadow-slate-200/60"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
                  {card.title}
                </p>
                <h3 className="mt-4 text-3xl font-semibold text-slate-900">
                  {card.value}
                </h3>
                <p className="mt-3 text-sm text-slate-500">{card.note}</p>
              </div>
            ))}
          </section>

          <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-3xl bg-white p-6 shadow-lg shadow-slate-200/60">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-slate-900">
                  Aktivitas Terbaru
                </h3>
                <button
                  className="text-sm font-semibold text-blue-600 hover:text-blue-700"
                  type="button"
                >
                  Lihat semua
                </button>
              </div>
              <div className="mt-6 space-y-4">
                {recentActivities.map((activity) => (
                  <div
                    key={activity.title}
                    className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3"
                  >
                    <div>
                      <p className="text-sm font-medium text-slate-800">
                        {activity.title}
                      </p>
                      <p className="mt-1 text-xs text-slate-400">
                        {activity.time}
                      </p>
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-500">
                      Baru
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="rounded-3xl bg-white p-6 shadow-lg shadow-slate-200/60">
                <h3 className="text-lg font-semibold text-slate-900">
                  Status Validasi
                </h3>
                <p className="mt-3 text-sm text-slate-500">
                  5 kelas menunggu persetujuan harga dan kurikulum.
                </p>
                <button className="mt-6 w-full rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-slate-400/40 transition hover:bg-slate-800">
                  Tinjau Sekarang
                </button>
              </div>

              <div className="rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-sky-500 p-6 text-white shadow-2xl shadow-blue-500/30">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-100">
                  Target Mingguan
                </p>
                <h3 className="mt-3 text-2xl font-semibold">
                  92% SLA terpenuhi
                </h3>
                <p className="mt-3 text-sm text-blue-100/90">
                  18 tiket support selesai, 2 tiket tersisa untuk hari ini.
                </p>
                <button className="mt-6 rounded-full border border-white/40 px-5 py-2 text-sm font-semibold text-white transition hover:bg-white/10">
                  Lihat Detail
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
