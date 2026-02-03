"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const classData = [
  {
    id: "cls-ux",
    title: "UI/UX Product Design",
    mentor: "Rika Mahendra",
    status: "Aktif",
    cohort: "Batch Mei 2024",
    students: 128,
    completion: 76,
    lastUpdate: "2 hari lalu"
  },
  {
    id: "cls-data",
    title: "Data Analytics Fundamental",
    mentor: "Bagus Wibowo",
    status: "Review",
    cohort: "Batch Jun 2024",
    students: 92,
    completion: 54,
    lastUpdate: "4 jam lalu"
  },
  {
    id: "cls-fe",
    title: "Front-End Engineering",
    mentor: "Nadia Purnama",
    status: "Aktif",
    cohort: "Batch Apr 2024",
    students: 164,
    completion: 81,
    lastUpdate: "1 hari lalu"
  },
  {
    id: "cls-marketing",
    title: "Digital Marketing Bootcamp",
    mentor: "Samuel Hartono",
    status: "Draft",
    cohort: "Batch Jul 2024",
    students: 0,
    completion: 12,
    lastUpdate: "30 menit lalu"
  }
];

const statusPills: Record<string, string> = {
  Aktif: "bg-emerald-100 text-emerald-700",
  Review: "bg-amber-100 text-amber-700",
  Draft: "bg-slate-100 text-slate-600"
};

const quickActions = [
  {
    title: "Tambah Kelas",
    description: "Buat kelas baru dan atur mentor serta jadwalnya.",
    action: "Buat Kelas",
    tone: "bg-blue-600 text-white hover:bg-blue-700"
  },
  {
    title: "Unduh Template",
    description: "Gunakan template kurikulum untuk mempercepat setup.",
    action: "Unduh",
    tone: "bg-white text-slate-700 border border-slate-200 hover:border-slate-300"
  },
  {
    title: "Jadwalkan Review",
    description: "Atur review kurikulum bersama mentor utama.",
    action: "Jadwalkan",
    tone: "bg-slate-900 text-white hover:bg-slate-800"
  }
];

export default function AdminClassesPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("Semua");
  const [selectedClass, setSelectedClass] = useState<string | null>(null);
  const [activeIds, setActiveIds] = useState(() => new Set(["cls-ux", "cls-fe"]));

  const filteredClasses = useMemo(() => {
    const normalized = search.toLowerCase();
    return classData.filter((item) => {
      const matchesSearch =
        item.title.toLowerCase().includes(normalized) ||
        item.mentor.toLowerCase().includes(normalized) ||
        item.cohort.toLowerCase().includes(normalized);
      const matchesStatus = statusFilter === "Semua" || item.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [search, statusFilter]);

  const summary = useMemo(() => {
    const total = classData.length;
    const active = classData.filter((item) => item.status === "Aktif").length;
    const reviewing = classData.filter((item) => item.status === "Review").length;
    return { total, active, reviewing };
  }, []);

  const toggleActive = (id: string) => {
    setActiveIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
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
              Fokus pada kurikulum, mentor, dan progres kelas.
            </p>
          </div>

          <nav className="space-y-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                Utama
              </p>
              <div className="mt-3 space-y-2 text-sm text-slate-200">
                <Link
                  className="flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left transition hover:bg-white/10"
                  href="/admin"
                >
                  <span>Dashboard</span>
                </Link>
                <Link
                  className="flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left transition hover:bg-white/10"
                  href="/admin/users"
                >
                  <span>Kelola Pengguna</span>
                </Link>
                <div className="flex w-full items-center justify-between rounded-2xl bg-white/15 px-4 py-3 text-left text-white shadow-lg shadow-blue-500/20">
                  <span>Manajemen Kelas</span>
                  <span className="rounded-full bg-blue-500/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-blue-200">
                    Aktif
                  </span>
                </div>
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                Operasional
              </p>
              <div className="mt-3 space-y-2 text-sm text-slate-200">
                <button
                  className="flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left transition hover:bg-white/10"
                  type="button"
                >
                  Jadwal Live Session
                </button>
                <button
                  className="flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left transition hover:bg-white/10"
                  type="button"
                >
                  Transaksi & Pembayaran
                </button>
                <button
                  className="flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left transition hover:bg-white/10"
                  type="button"
                >
                  Laporan & Analitik
                </button>
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                Pengaturan
              </p>
              <div className="mt-3 space-y-2 text-sm text-slate-200">
                <button
                  className="flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left transition hover:bg-white/10"
                  type="button"
                >
                  Konten & Banner
                </button>
                <button
                  className="flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left transition hover:bg-white/10"
                  type="button"
                >
                  Pengaturan Sistem
                </button>
              </div>
            </div>
          </nav>

          <div className="rounded-2xl bg-white/10 p-4 text-sm text-slate-200">
            <p className="text-xs uppercase tracking-[0.2em] text-blue-200">
              Fokus Hari Ini
            </p>
            <p className="mt-2 leading-relaxed">
              3 kurikulum menunggu approval dan 2 mentor butuh review.
            </p>
          </div>
        </aside>

        <main className="flex w-full flex-col gap-6 px-6">
          <header className="flex flex-col gap-6 rounded-3xl bg-white px-6 py-8 shadow-lg shadow-slate-200/70 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
                Manajemen Kelas
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-900">
                Kelola kelas aktif dan kurikulum terbaru
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                Pantau progres, status review, dan update modul dalam satu halaman.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button className="rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-slate-300 hover:text-slate-900">
                Export Data
              </button>
              <button className="rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-700">
                Tambah Kelas
              </button>
            </div>
          </header>

          <section className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl bg-white p-6 shadow-lg shadow-slate-200/60">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
                Total Kelas
              </p>
              <h3 className="mt-4 text-3xl font-semibold text-slate-900">
                {summary.total}
              </h3>
              <p className="mt-3 text-sm text-slate-500">
                {summary.active} aktif dan {summary.reviewing} menunggu review.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-lg shadow-slate-200/60">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
                Rata-rata Progres
              </p>
              <h3 className="mt-4 text-3xl font-semibold text-slate-900">68%</h3>
              <p className="mt-3 text-sm text-slate-500">
                Naik 6% dibanding bulan lalu.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-lg shadow-slate-200/60">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
                Pengingat Mentor
              </p>
              <h3 className="mt-4 text-3xl font-semibold text-slate-900">4</h3>
              <p className="mt-3 text-sm text-slate-500">
                Mentor belum update modul minggu ini.
              </p>
            </div>
          </section>

          <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-3xl bg-white p-6 shadow-lg shadow-slate-200/60">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    Daftar Kelas
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    Klik kelas untuk melihat ringkasan cepat.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <div className="relative">
                    <input
                      className="w-64 rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-700 shadow-sm outline-none transition focus:border-blue-400"
                      onChange={(event) => setSearch(event.target.value)}
                      placeholder="Cari kelas atau mentor"
                      type="search"
                      value={search}
                    />
                  </div>
                  <select
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm"
                    onChange={(event) => setStatusFilter(event.target.value)}
                    value={statusFilter}
                  >
                    <option value="Semua">Semua Status</option>
                    <option value="Aktif">Aktif</option>
                    <option value="Review">Review</option>
                    <option value="Draft">Draft</option>
                  </select>
                </div>
              </div>
              <div className="mt-6 space-y-4">
                {filteredClasses.map((item) => (
                  <button
                    key={item.id}
                    className={`w-full rounded-2xl border px-4 py-4 text-left transition ${
                      selectedClass === item.id
                        ? "border-blue-500 bg-blue-50"
                        : "border-slate-100 bg-slate-50 hover:border-blue-200"
                    }`}
                    onClick={() => setSelectedClass(item.id)}
                    type="button"
                  >
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h4 className="text-base font-semibold text-slate-900">
                          {item.title}
                        </h4>
                        <p className="mt-1 text-sm text-slate-500">
                          Mentor: {item.mentor} · {item.cohort}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${
                            statusPills[item.status]
                          }`}
                        >
                          {item.status}
                        </span>
                        <button
                          className={`rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-wide transition ${
                            activeIds.has(item.id)
                              ? "bg-emerald-500 text-white hover:bg-emerald-600"
                              : "bg-slate-200 text-slate-600 hover:bg-slate-300"
                          }`}
                          onClick={(event) => {
                            event.stopPropagation();
                            toggleActive(item.id);
                          }}
                          type="button"
                        >
                          {activeIds.has(item.id) ? "Aktif" : "Nonaktif"}
                        </button>
                      </div>
                    </div>
                    <div className="mt-4 grid gap-4 text-sm text-slate-500 sm:grid-cols-3">
                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                          Siswa
                        </p>
                        <p className="mt-1 text-base font-semibold text-slate-700">
                          {item.students} siswa
                        </p>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                          Progres
                        </p>
                        <div className="mt-2 h-2 w-full rounded-full bg-slate-200">
                          <div
                            className="h-2 rounded-full bg-blue-500"
                            style={{ width: `${item.completion}%` }}
                          />
                        </div>
                        <p className="mt-1 text-xs text-slate-400">
                          {item.completion}% modul selesai
                        </p>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                          Update Terakhir
                        </p>
                        <p className="mt-1 text-base font-semibold text-slate-700">
                          {item.lastUpdate}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
                {filteredClasses.length === 0 ? (
                  <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-6 text-center text-sm text-slate-500">
                    Tidak ada kelas yang cocok dengan filter kamu.
                  </div>
                ) : null}
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="rounded-3xl bg-white p-6 shadow-lg shadow-slate-200/60">
                <h3 className="text-lg font-semibold text-slate-900">
                  Ringkasan Kelas
                </h3>
                <p className="mt-2 text-sm text-slate-500">
                  {selectedClass
                    ? "Detail singkat untuk kelas terpilih."
                    : "Pilih kelas untuk melihat ringkasan cepat."}
                </p>
                <div className="mt-4 space-y-3 text-sm text-slate-600">
                  {selectedClass ? (
                    <>
                      <p>
                        Status aktif: {activeIds.has(selectedClass) ? "Ya" : "Tidak"}
                      </p>
                      <p>Checklist kurikulum: 8 modul inti selesai.</p>
                      <p>Feedback terakhir: "Materi minggu ini sangat relevan".</p>
                    </>
                  ) : (
                    <>
                      <p>Gunakan filter di kiri untuk mempersempit kelas.</p>
                      <p>Checklist kurikulum otomatis diperbarui setiap hari.</p>
                    </>
                  )}
                </div>
                <button className="mt-6 w-full rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-700">
                  Lihat Detail Kelas
                </button>
              </div>

              <div className="rounded-3xl bg-white p-6 shadow-lg shadow-slate-200/60">
                <h3 className="text-lg font-semibold text-slate-900">
                  Quick Actions
                </h3>
                <div className="mt-4 space-y-4">
                  {quickActions.map((action) => (
                    <div
                      key={action.title}
                      className="rounded-2xl border border-slate-100 bg-slate-50 p-4"
                    >
                      <p className="text-sm font-semibold text-slate-800">
                        {action.title}
                      </p>
                      <p className="mt-1 text-xs text-slate-500">
                        {action.description}
                      </p>
                      <button
                        className={`mt-4 w-full rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide transition ${
                          action.tone
                        }`}
                        type="button"
                      >
                        {action.action}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
