import { Providers } from "./providers";
import "./globals.css";

export const metadata = {
  title: "ZeKshop",
  description: "ZeKshop",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <Providers>{children}</Providers>
    </html>
  );
}
