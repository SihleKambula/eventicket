import type { Metadata } from "next";

//components
import { Navbar } from "@/components";
import ThemeRegistry from "./ThemeRegistry";

export const metadata: Metadata = {
  title: "Eventicket",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <ThemeRegistry options={{ key: "mui" }}>
          <Navbar />
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
