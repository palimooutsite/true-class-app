"use client";

import Link from "next/link";

const menuItems = [
  {
    section: "Utama",
    items: [
      { id: "dashboard", label: "Dashboard", href: "/admin" },
      { id: "users", label: "Kelola Pengguna", href: "/admin/users" },
      { id: "classes", label: "Manajemen Kelas", href: "/admin/classes" }
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
      { id: "settings", label: "Pengaturan Sistem", href: "/admin/settings" }
    ]
  }
];

const systemCards = [
  {
    title: "Keamanan Akun",
    description:
      "Atur kebijakan password, SSO, dan proteksi login untuk admin.",
    action: "Kelola Keamanan"
  },
  {
    title: "Notifikasi Sistem",
    description:
      "Tentukan kanal pengiriman notifikasi dan jadwal pengingat otomatis.",
    action: "Atur Notifikasi"
  },
  {
    title: "Konfigurasi Platform",
    description:
      "Sesuaikan parameter SLA, kuota kelas, dan limit transaksi harian.",
    action: "Update Konfigurasi"
  }
];

const auditLogs = [
  {
    title: "Admin memperbarui batas kuota kelas",
    time: "Hari ini, 08.45 WIB"
  },
  {
    title: "Kebijakan password minimum diperketat",
    time: "Kemarin, 18.10 WIB"
  },
  {
    title: "Notifikasi email diaktifkan untuk mentor baru",
    time: "2 hari lalu"
  }
];

export default function AdminSettingsPage() {
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
              Kelola konfigurasi sistem dan keamanan platform.
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
                          item.id === "settings"
                            ? "bg-white/15 text-white shadow-lg shadow-blue-500/20"
                            : "text-slate-200 hover:bg-white/10"
                        }`}
                        href={item.href}
                      >
                        <span>{item.label}</span>
                        {item.id === "settings" ? (
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
              Status Sistem
            </p>
            <p className="mt-2 leading-relaxed">
              Semua layanan stabil, 1 perubahan konfigurasi menunggu review.
            </p>
          </div>
        </aside>

        <main className="flex w-full flex-col gap-6 px-6">
          <header className="flex flex-col gap-6 rounded-3xl bg-white px-6 py-8 shadow-lg shadow-slate-200/70 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
                Pengaturan Sistem
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-900">
                Konfigurasi platform utama
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                Perbarui keamanan, notifikasi, dan parameter sistem dalam satu
                halaman.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button className="rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-slate-300 hover:text-slate-900">
                Audit Log
              </button>
              <button className="rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-700">
                Simpan Pengaturan
              </button>
            </div>
          </header>

          <section className="grid gap-6 lg:grid-cols-3">
            {systemCards.map((card) => (
              <div
                key={card.title}
                className="rounded-3xl bg-white p-6 shadow-lg shadow-slate-200/60"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
                  {card.title}
                </p>
                <p className="mt-4 text-sm text-slate-500">
                  {card.description}
                </p>
                <button className="mt-6 rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 transition hover:border-slate-300 hover:text-slate-800">
                  {card.action}
                </button>
              </div>
            ))}
          </section>

          <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-3xl bg-white p-6 shadow-lg shadow-slate-200/60">
              <h3 className="text-lg font-semibold text-slate-900">
                Ringkasan Perubahan
              </h3>
              <p className="mt-2 text-sm text-slate-500">
                Review perubahan konfigurasi yang baru saja dilakukan tim admin.
              </p>
              <div className="mt-6 space-y-4">
                {auditLogs.map((log) => (
                  <div
                    key={log.title}
                    className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3"
                  >
                    <div>
                      <p className="text-sm font-medium text-slate-800">
                        {log.title}
                      </p>
                      <p className="mt-1 text-xs text-slate-400">{log.time}</p>
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-500">
                      Audit
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="rounded-3xl bg-white p-6 shadow-lg shadow-slate-200/60">
                <h3 className="text-lg font-semibold text-slate-900">
                  Checklist Kepatuhan
                </h3>
                <p className="mt-3 text-sm text-slate-500">
                  Pastikan semua konfigurasi memenuhi standar keamanan internal.
                </p>
                <ul className="mt-6 space-y-3 text-sm text-slate-600">
                  <li className="flex items-center justify-between">
                    <span>Backup otomatis mingguan</span>
                    <span className="text-emerald-500">Aktif</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Monitoring API real-time</span>
                    <span className="text-emerald-500">Aktif</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Rotasi token akses admin</span>
                    <span className="text-amber-500">Perlu Review</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-sky-500 p-6 text-white shadow-2xl shadow-blue-500/30">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-100">
                  Status Infrastruktur
                </p>
                <h3 className="mt-3 text-2xl font-semibold">
                  99.9% uptime minggu ini
                </h3>
                <p className="mt-3 text-sm text-blue-100/90">
                  Tidak ada insiden besar, semua SLA terpenuhi sesuai target.
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
