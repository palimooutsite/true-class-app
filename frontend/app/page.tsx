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
    <main className="page">
      <header className="hero">
        <nav className="nav">
          <div className="logo">True Class</div>
          <div className="nav-links">
            <a href="#kelas">Kelas</a>
            <a href="#alur">Alur Belajar</a>
            <a href="#harga">Harga</a>
            <button className="secondary-button">Masuk</button>
          </div>
        </nav>

        <section className="hero-content">
          <div>
            <p className="badge">Platform belajar online #1 untuk skill digital</p>
            <h1>
              Bangun karier digitalmu dengan kelas yang dirancang untuk hasil nyata.
            </h1>
            <p className="subtitle">
              True Class membantu kamu belajar lebih cepat lewat kurikulum terstruktur,
              mentor yang responsif, dan komunitas yang saling mendukung.
            </p>
            <div className="hero-actions">
              <button className="primary-button">Mulai Belajar</button>
              <button className="ghost-button">Lihat Kurikulum</button>
            </div>
            <div className="stats">
              {stats.map((stat) => (
                <div key={stat.label} className="stat-item">
                  <h3>{stat.value}</h3>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="hero-card">
            <div className="card-header">
              <span>Upcoming Live Class</span>
              <strong>Jumat, 19.00 WIB</strong>
            </div>
            <h2>Full Stack Web Development</h2>
            <p>
              Pelajari cara membangun aplikasi modern dengan React, Node.js, dan
              deployment cloud.
            </p>
            <div className="card-footer">
              <div>
                <p className="label">Durasi</p>
                <strong>12 Minggu</strong>
              </div>
              <div>
                <p className="label">Level</p>
                <strong>Pemula - Menengah</strong>
              </div>
            </div>
            <button className="primary-button full">Daftar Kelas Ini</button>
          </div>
        </section>
      </header>

      <section id="kelas" className="section">
        <div className="section-heading">
          <p className="eyebrow">Fitur Unggulan</p>
          <h2>Belajar dengan pengalaman kelas yang lengkap.</h2>
          <p className="section-subtitle">
            Semua yang kamu butuhkan untuk meningkatkan skill digital ada dalam
            satu platform.
          </p>
        </div>
        <div className="grid">
          {features.map((feature) => (
            <div key={feature.title} className="feature-card">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="alur" className="section highlight">
        <div className="section-heading">
          <p className="eyebrow">Alur Belajar</p>
          <h2>Langkah terarah untuk mencapai targetmu.</h2>
          <p className="section-subtitle">
            Ikuti proses belajar yang terstruktur, fleksibel, dan terukur.
          </p>
        </div>
        <div className="steps">
          {steps.map((step, index) => (
            <div key={step.title} className="step">
              <span className="step-number">0{index + 1}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="harga" className="section">
        <div className="cta">
          <div>
            <p className="eyebrow">Paket Belajar</p>
            <h2>Mulai dari Rp149.000/bulan.</h2>
            <p className="section-subtitle">
              Pilih paket yang sesuai, dengan akses kelas dan mentor eksklusif.
            </p>
          </div>
          <div className="cta-actions">
            <button className="primary-button">Lihat Paket</button>
            <button className="ghost-button">Hubungi Tim</button>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div>
          <h3>True Class</h3>
          <p>Belajar terarah, tumbuh lebih cepat, dan siap bersaing.</p>
        </div>
        <div className="footer-links">
          <a href="#kelas">Kelas</a>
          <a href="#alur">Alur Belajar</a>
          <a href="#harga">Harga</a>
        </div>
      </footer>
    </main>
  );
}
