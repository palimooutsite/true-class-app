export default function LoginPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 px-6 py-12 sm:px-10 lg:px-20">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-10 lg:flex-row lg:items-stretch">
        <section className="w-full max-w-xl rounded-3xl bg-white/80 p-8 shadow-xl shadow-slate-200/60 backdrop-blur lg:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
            True Class
          </p>
          <h1 className="mt-4 text-3xl font-semibold text-slate-900">
            Masuk ke akunmu
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            Kelola kelas, progres belajar, dan jadwal live session langsung dari
            dashboard True Class.
          </p>

          <form className="mt-8 space-y-5">
            <label className="block text-sm font-medium text-slate-700">
              Email
              <input
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                placeholder="nama@email.com"
                type="email"
              />
            </label>
            <label className="block text-sm font-medium text-slate-700">
              Kata sandi
              <input
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                placeholder="Masukkan kata sandi"
                type="password"
              />
            </label>
            <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
              <label className="flex items-center gap-2 text-slate-600">
                <input
                  className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                  type="checkbox"
                />
                Ingat saya
              </label>
              <button
                className="font-semibold text-blue-600 hover:text-blue-700"
                type="button"
              >
                Lupa kata sandi?
              </button>
            </div>
            <button className="w-full rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-700">
              Masuk
            </button>
          </form>

          <div className="mt-8 flex items-center gap-4 text-xs text-slate-400">
            <span className="h-px flex-1 bg-slate-200" />
            atau lanjut dengan
            <span className="h-px flex-1 bg-slate-200" />
          </div>

          <button className="mt-6 flex w-full items-center justify-center gap-3 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-slate-300 hover:text-slate-900">
            <svg
              aria-hidden="true"
              className="h-5 w-5"
              viewBox="0 0 24 24"
            >
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.07 5.07 0 01-2.2 3.33v2.77h3.56c2.08-1.92 3.28-4.75 3.28-8.11z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.64l-3.56-2.77c-.99.66-2.26 1.06-3.72 1.06-2.86 0-5.29-1.93-6.16-4.52H2.18v2.84A10.99 10.99 0 0012 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.13A6.57 6.57 0 015.5 12c0-.74.13-1.46.34-2.13V7.03H2.18A10.99 10.99 0 001.5 12c0 1.77.42 3.45 1.18 4.97l3.16-2.84z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.36c1.62 0 3.06.56 4.2 1.64l3.15-3.15C17.46 2.09 14.97 1 12 1 7.53 1 3.66 3.58 2.18 7.03l3.16 2.84C6.71 7.29 9.14 5.36 12 5.36z"
                fill="#EA4335"
              />
            </svg>
            Masuk dengan Google
          </button>

          <p className="mt-6 text-center text-sm text-slate-600">
            Belum punya akun?{" "}
            <button className="font-semibold text-blue-600 hover:text-blue-700">
              Daftar sekarang
            </button>
          </p>
        </section>

        <aside className="flex w-full flex-1 flex-col justify-between rounded-3xl bg-slate-900 p-8 text-white shadow-2xl shadow-slate-400/40 lg:p-12">
          <div>
            <p className="text-sm font-semibold text-blue-200">
              Selamat datang kembali
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight">
              Masuk dan lanjutkan perjalanan belajarmu di True Class.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-200">
              Akses kelas favoritmu, cek jadwal live mentoring, dan pantau progres
              mingguan dari satu tempat.
            </p>
          </div>
          <div className="mt-10 space-y-4">
            <div className="rounded-2xl bg-white/10 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-blue-200">
                Notifikasi Kelas
              </p>
              <p className="mt-2 text-sm text-white">
                Live session UI/UX Design hari ini pukul 19.00 WIB.
              </p>
            </div>
            <div className="rounded-2xl bg-white/10 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-blue-200">
                Progress Mingguan
              </p>
              <p className="mt-2 text-sm text-white">
                4 modul terselesaikan, 2 lagi untuk capai target mingguanmu.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
