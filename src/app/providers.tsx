"use client";
import { ThemeProvider } from "next-themes";
import { PagesProgressBar as ProgressBar } from "next-nprogress-bar";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
      {children}
      <ProgressBar
        height="4px"
        color="primary"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </ThemeProvider>
  );
}
