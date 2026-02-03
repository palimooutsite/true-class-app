import "./globals.css";

export const metadata = {
  title: "True Class | Platform Belajar Online",
  description: "Landing page untuk platform pembelajaran online True Class."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
