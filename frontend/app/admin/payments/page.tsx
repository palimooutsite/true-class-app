const paymentSummary = [
  {
    label: "Total transaksi hari ini",
    value: "Rp 48.500.000",
    note: "+12% dibanding kemarin"
  },
  {
    label: "Invoice menunggu verifikasi",
    value: "18",
    note: "3 prioritas tinggi"
  },
  {
    label: "Pembayaran tertunda",
    value: "7",
    note: "Butuh follow up"
  }
];

const paymentTasks = [
  {
    title: "Verifikasi invoice batch April",
    owner: "Tim Keuangan",
    due: "Hari ini, 14.00 WIB"
  },
  {
    title: "Kirim reminder tagihan siswa",
    owner: "Admin Operasional",
    due: "Besok, 09.00 WIB"
  },
  {
    title: "Rekonsiliasi pembayaran mitra",
    owner: "Finance Ops",
    due: "Jumat, 16.30 WIB"
  }
];

const paymentHistory = [
  {
    id: "INV-2404-192",
    name: "Kelas Data Analytics",
    amount: "Rp 2.450.000",
    status: "Berhasil",
    channel: "Virtual Account"
  },
  {
    id: "INV-2404-184",
    name: "Bootcamp UI/UX",
    amount: "Rp 1.980.000",
    status: "Menunggu",
    channel: "Transfer Manual"
  },
  {
    id: "INV-2404-177",
    name: "Kelas Product Design",
    amount: "Rp 2.250.000",
    status: "Perlu Tindak Lanjut",
    channel: "Kartu Kredit"
  },
  {
    id: "INV-2404-165",
    name: "Program Data Science",
    amount: "Rp 3.200.000",
    status: "Berhasil",
    channel: "E-Wallet"
  }
];

const statusStyles: Record<string, string> = {
  Berhasil: "bg-emerald-100 text-emerald-700",
  Menunggu: "bg-amber-100 text-amber-700",
  "Perlu Tindak Lanjut": "bg-rose-100 text-rose-700"
};

export default function PaymentsPage() {
  return (
    <div className="min-h-screen bg-slate-50 px-6 py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
        <header className="rounded-3xl bg-white px-8 py-10 shadow-lg shadow-slate-200/70">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
            Transaksi & Pembayaran
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-slate-900">
            Pantau arus kas dan validasi invoice masuk
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-500">
            Kelola transaksi terbaru, cek status pembayaran, dan pastikan semua
            invoice tervalidasi agar laporan keuangan tetap rapi.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button className="rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-slate-300 hover:text-slate-900">
              Export Rekap
            </button>
            <button className="rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-700">
              Buat Tagihan Baru
            </button>
          </div>
        </header>

        <section className="grid gap-6 md:grid-cols-3">
          {paymentSummary.map((card) => (
            <div
              key={card.label}
              className="rounded-3xl bg-white p-6 shadow-lg shadow-slate-200/60"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
                {card.label}
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-slate-900">
                {card.value}
              </h2>
              <p className="mt-3 text-sm text-slate-500">{card.note}</p>
            </div>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl bg-white p-6 shadow-lg shadow-slate-200/60">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-slate-900">
                  Riwayat Transaksi Terbaru
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Update pembayaran dari kelas aktif minggu ini.
                </p>
              </div>
              <button className="text-sm font-semibold text-blue-600 hover:text-blue-700">
                Lihat semua
              </button>
            </div>

            <div className="mt-6 space-y-4">
              {paymentHistory.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col gap-4 rounded-2xl border border-slate-100 bg-slate-50 px-5 py-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      {item.name}
                    </p>
                    <p className="mt-1 text-xs font-medium text-slate-400">
                      {item.id} • {item.channel}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-sm font-semibold text-slate-900">
                      {item.amount}
                    </span>
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        statusStyles[item.status]
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-3xl bg-white p-6 shadow-lg shadow-slate-200/60">
              <h2 className="text-lg font-semibold text-slate-900">
                Tugas Prioritas
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                Susun workflow verifikasi agar tidak ada invoice terlewat.
              </p>
              <div className="mt-5 space-y-4">
                {paymentTasks.map((task) => (
                  <div
                    key={task.title}
                    className="rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3"
                  >
                    <p className="text-sm font-semibold text-slate-900">
                      {task.title}
                    </p>
                    <p className="mt-1 text-xs text-slate-400">
                      {task.owner} • {task.due}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-700 p-6 text-white shadow-2xl shadow-blue-500/30">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-200">
                Pengingat Otomatis
              </p>
              <h3 className="mt-3 text-2xl font-semibold">
                12 tagihan akan jatuh tempo minggu ini
              </h3>
              <p className="mt-3 text-sm text-blue-100/90">
                Jadwalkan reminder agar tim sales dapat menindaklanjuti lebih
                cepat.
              </p>
              <button className="mt-6 rounded-full border border-white/40 px-5 py-2 text-sm font-semibold text-white transition hover:bg-white/10">
                Jadwalkan Reminder
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
