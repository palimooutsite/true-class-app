const menuItems = [
  {
    section: "Utama",
    items: [
      { label: "Dashboard", badge: "Aktif" },
      { label: "Kelola Pengguna" },
      { label: "Manajemen Kelas" }
    ]
  },
  {
    section: "Operasional",
    items: [
      { label: "Jadwal Live Session" },
      { label: "Transaksi & Pembayaran" },
      { label: "Laporan & Analitik" }
    ]
  },
  {
    section: "Pengaturan",
    items: [{ label: "Konten & Banner" }, { label: "Pengaturan Sistem" }]
  }
];

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
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto flex min-h-screen max-w-7xl gap-6 px-4 py-6 sm:px-8 lg:px-12">
        <aside className="hidden w-72 flex-col gap-8 rounded-3xl bg-slate-900 px-6 py-8 text-white shadow-2xl shadow-slate-300/50 lg:flex">
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
                  {menu.items.map((item) => (
                    <button
                      key={item.label}
                      className="flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left transition hover:bg-white/10"
                      type="button"
                    >
                      <span>{item.label}</span>
                      {item.badge ? (
                        <span className="rounded-full bg-blue-500/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-blue-200">
                          {item.badge}
                        </span>
                      ) : null}
                    </button>
                  ))}
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
                Dashboard Admin
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-900">
                Selamat datang, Admin Sistem
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                Pantau performa platform dan pastikan pengalaman belajar berjalan
                lancar.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button className="rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-slate-300 hover:text-slate-900">
                Export Laporan
              </button>
              <button className="rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-700">
                Buat Pengumuman
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
