import Layout from "@/src/components/Layout";
import "./globals.css";
import type { Metadata } from "next";
import ReduxProvider from "@/src/store/ReduxProvider";

export const metadata: Metadata = {
  title: "Blog App",
  description: "MERN Blog App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <Layout>{children}</Layout>
        </ReduxProvider>
      </body>
    </html>
  );
}
