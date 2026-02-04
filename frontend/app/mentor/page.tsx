"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const menuItems = [
  {
    section: "Utama",
    items: [
      { id: "dashboard", label: "Dashboard", badge: "Aktif" },
      { id: "classes", label: "Kelas Saya", href: "/mentor/classes" },
      { id: "students", label: "Daftar Siswa", href: "/mentor/students" }
    ]
  },
  {
    section: "Operasional",
    items: [
      { id: "sessions", label: "Jadwal Live Session" },
      { id: "materials", label: "Materi & Tugas", href: "/mentor/materials" },
      { id: "reviews", label: "Review & Penilaian" }
    ]
  },
  {
    section: "Akun",
    items: [
      { id: "earnings", label: "Pendapatan & Insentif" },
      { id: "profile", label: "Profil Mentor", href: "/mentor/profile" }
    ]
  }
];

const menuContent = {
  dashboard: {
    eyebrow: "Dashboard Mentor",
    title: "Selamat datang kembali, Mentor",
    description:
      "Lihat perkembangan kelas, jadwal live session, dan progres siswa terbaru.",
    primaryAction: "Buat Pengumuman",
    secondaryAction: "Lihat Jadwal"
  },
  classes: {
    eyebrow: "Kelas Saya",
    title: "Kelola kelas yang Anda ampu",
    description:
      "Perbarui silabus, atur modul, dan pastikan materi siap sebelum kelas dimulai.",
    primaryAction: "Tambah Modul",
    secondaryAction: "Edit Silabus"
  },
  students: {
    eyebrow: "Siswa",
    title: "Pantau progres siswa",
    description:
      "Cek kehadiran, capaian tugas, dan berikan feedback yang relevan.",
    primaryAction: "Kirim Feedback",
    secondaryAction: "Unduh Laporan"
  },
  sessions: {
    eyebrow: "Live Session",
    title: "Atur jadwal dan agenda sesi live",
    description:
      "Sinkronkan kalender, siapkan agenda kelas, dan bagikan link meeting.",
    primaryAction: "Buat Jadwal",
    secondaryAction: "Lihat Kalender"
  },
  materials: {
    eyebrow: "Materi",
    title: "Kelola materi & tugas",
    description:
      "Unggah materi terbaru, tetapkan tugas, dan beri instruksi yang jelas.",
    primaryAction: "Unggah Materi",
    secondaryAction: "Buat Tugas"
  },
  reviews: {
    eyebrow: "Penilaian",
    title: "Review tugas siswa",
    description:
      "Berikan penilaian cepat dan catatan perbaikan untuk siswa.",
    primaryAction: "Mulai Review",
    secondaryAction: "Lihat Rubrik"
  },
  earnings: {
    eyebrow: "Pendapatan",
    title: "Pantau pendapatan & insentif",
    description:
      "Lihat estimasi payout dan riwayat insentif dari kelas Anda.",
    primaryAction: "Lihat Detail",
    secondaryAction: "Unduh Slip"
  },
  profile: {
    eyebrow: "Profil Mentor",
    title: "Perbarui profil & portofolio",
    description:
      "Pastikan profil Anda terkini agar siswa mendapatkan informasi terbaik.",
    primaryAction: "Edit Profil",
    secondaryAction: "Kelola Portofolio"
  }
};

const summaryCards = [
  {
    title: "Kelas Aktif",
    value: "7",
    note: "2 kelas akan mulai minggu ini"
  },
  {
    title: "Siswa Aktif",
    value: "126",
    note: "15 siswa baru bergabung"
  },
  {
    title: "Rating Mentor",
    value: "4.9/5",
    note: "Naik 0.2 poin bulan ini"
  }
];

const recentActivities = [
  {
    title: "Materi UI Design minggu 3 telah dipublikasikan",
    time: "20 menit lalu"
  },
  {
    title: "Sesi live Data Analytics dijadwalkan ulang",
    time: "1 jam lalu"
  },
  {
    title: "12 tugas siswa menunggu review",
    time: "Hari ini, 10.15 WIB"
  }
];

export default function MentorPage() {
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
              Mentor Panel
            </p>
            <h1 className="mt-2 text-2xl font-semibold">True Class</h1>
            <p className="mt-3 text-sm text-slate-300">
              Kelola kelas, siswa, dan materi Anda dalam satu dashboard.
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
                        className="flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-slate-200 transition hover:bg-white/10"
                        href={item.href}
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
              Fokus Hari Ini
            </p>
            <p className="mt-2 leading-relaxed">
              12 tugas menunggu review & 1 live session sore ini.
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
                  Tugas Prioritas
                </h3>
                <p className="mt-3 text-sm text-slate-500">
                  4 tugas perlu review sebelum deadline besok.
                </p>
                <button className="mt-6 w-full rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-slate-400/40 transition hover:bg-slate-800">
                  Review Sekarang
                </button>
              </div>

              <div className="rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-sky-500 p-6 text-white shadow-2xl shadow-blue-500/30">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-100">
                  Target Mingguan
                </p>
                <h3 className="mt-3 text-2xl font-semibold">
                  88% materi tersampaikan
                </h3>
                <p className="mt-3 text-sm text-blue-100/90">
                  3 kelas tersisa untuk mencapai target minggu ini.
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
