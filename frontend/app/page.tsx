const features = [
  {
    title: "Kelas Interaktif",
    description:
      "Belajar dengan video, kuis, dan live session yang membuat materi terasa hidup."
  },
  {
    title: "Mentor Berpengalaman",
    description:
      "Dapatkan bimbingan langsung dari mentor industri yang siap membantumu berkembang."
  },
  {
    title: "Jalur Belajar Terarah",
    description:
      "Kurasi materi sesuai tujuan kariermu, dari pemula hingga siap kerja."
  }
];

const stats = [
  { value: "120+", label: "Kelas Terbit" },
  { value: "45K", label: "Siswa Aktif" },
  { value: "98%", label: "Tingkat Kepuasan" }
];

const steps = [
  {
    title: "Pilih Fokus Belajar",
    description:
      "Tentukan skill yang ingin dikuasai, mulai dari data hingga desain produk."
  },
  {
    title: "Ikuti Jadwal Belajar",
    description:
      "Kombinasi video, tugas, dan diskusi komunitas membuat progres konsisten."
  },
  {
    title: "Bangun Portofolio",
    description:
      "Setiap modul menghasilkan proyek nyata untuk menunjukkan kemampuanmu."
  }
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <header className="bg-gradient-to-br from-violet-50 via-indigo-50 to-sky-100 px-6 py-10 sm:px-10 lg:px-20 lg:py-20">
        <nav className="mb-12 flex flex-col items-start justify-between gap-6 lg:mb-16 lg:flex-row lg:items-center">
          <div className="text-xl font-bold text-slate-900">True Class</div>
          <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-700 sm:gap-6">
            <a className="hover:text-slate-900" href="#kelas">
              Kelas
            </a>
            <a className="hover:text-slate-900" href="#alur">
              Alur Belajar
            </a>
            <a className="hover:text-slate-900" href="#harga">
              Harga
            </a>
            <button className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-slate-300 hover:text-slate-900">
              Masuk
            </button>
          </div>
        </nav>

        <section className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
          <div>
            <p className="mb-5 inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600">
              Platform belajar online #1 untuk skill digital
            </p>
            <h1 className="text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Bangun karier digitalmu dengan kelas yang dirancang untuk hasil nyata.
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              True Class membantu kamu belajar lebih cepat lewat kurikulum terstruktur,
              mentor yang responsif, dan komunitas yang saling mendukung.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <button className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-700">
                Mulai Belajar
              </button>
              <button className="rounded-full border border-blue-200 bg-white px-6 py-3 text-sm font-semibold text-blue-600 transition hover:border-blue-300 hover:text-blue-700">
                Lihat Kurikulum
              </button>
            </div>
            <div className="mt-8 flex flex-wrap gap-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <h3 className="text-2xl font-semibold text-slate-900">
                    {stat.value}
                  </h3>
                  <p className="text-sm text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl bg-white p-8 shadow-2xl shadow-slate-200/70">
            <div className="flex items-center justify-between text-sm text-slate-500">
              <span>Upcoming Live Class</span>
              <strong className="text-slate-700">Jumat, 19.00 WIB</strong>
            </div>
            <h2 className="mt-4 text-xl font-semibold text-slate-900">
              Full Stack Web Development
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Pelajari cara membangun aplikasi modern dengan React, Node.js, dan
              deployment cloud.
            </p>
            <div className="mt-6 flex flex-col gap-4 text-sm text-slate-700 sm:flex-row sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-400">
                  Durasi
                </p>
                <strong>12 Minggu</strong>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-400">
                  Level
                </p>
                <strong>Pemula - Menengah</strong>
              </div>
            </div>
            <button className="mt-6 w-full rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-700">
              Daftar Kelas Ini
            </button>
          </div>
        </section>
      </header>

      <section id="kelas" className="px-6 py-16 sm:px-10 lg:px-20">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
            Fitur Unggulan
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
            Belajar dengan pengalaman kelas yang lengkap.
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-500">
            Semua yang kamu butuhkan untuk meningkatkan skill digital ada dalam satu
            platform.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl bg-white p-6 shadow-xl shadow-slate-200/60"
            >
              <h3 className="text-lg font-semibold text-slate-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="alur"
        className="bg-slate-900 px-6 py-16 text-white sm:px-10 lg:px-20"
      >
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-300">
            Alur Belajar
          </p>
          <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
            Langkah terarah untuk mencapai targetmu.
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-200">
            Ikuti proses belajar yang terstruktur, fleksibel, dan terukur.
          </p>
        </div>
        <div className="mt-10 grid gap-6">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="flex flex-col gap-4 rounded-2xl bg-white/10 p-6 sm:flex-row sm:items-start"
            >
              <span className="text-xl font-semibold text-sky-300">
                0{index + 1}
              </span>
              <div>
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-200">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="harga" className="px-6 py-16 sm:px-10 lg:px-20">
        <div className="flex flex-col gap-6 rounded-3xl bg-white p-8 shadow-xl shadow-slate-200/70 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
              Paket Belajar
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
              Mulai dari Rp149.000/bulan.
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-500">
              Pilih paket yang sesuai, dengan akses kelas dan mentor eksklusif.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <button className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-700">
              Lihat Paket
            </button>
            <button className="rounded-full border border-blue-200 bg-white px-6 py-3 text-sm font-semibold text-blue-600 transition hover:border-blue-300 hover:text-blue-700">
              Hubungi Tim
            </button>
          </div>
        </div>
      </section>

      <footer className="flex flex-col gap-6 bg-slate-900 px-6 py-10 text-slate-200 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-20 lg:py-12">
        <div>
          <h3 className="text-lg font-semibold text-white">True Class</h3>
          <p className="mt-2 text-sm text-slate-300">
            Belajar terarah, tumbuh lebih cepat, dan siap bersaing.
          </p>
        </div>
        <div className="flex flex-wrap gap-6 text-sm">
          <a className="hover:text-white" href="#kelas">
            Kelas
          </a>
          <a className="hover:text-white" href="#alur">
            Alur Belajar
          </a>
          <a className="hover:text-white" href="#harga">
            Harga
          </a>
        </div>
      </footer>
    </main>
  );
}
