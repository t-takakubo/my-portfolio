"use client";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const Providers = ({ children }: { children: React.ReactNode }) => (
  <NextUIProvider>
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
    >
      <div className="flex">
        <main className="w-full max-w-[75rem] mx-auto my-2">
          <Header />
          {children}
          <Footer />
        </main>
      </div>
    </NextThemesProvider>
  </NextUIProvider>
);

export default Providers;
