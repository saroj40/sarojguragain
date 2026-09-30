"use client";

import { ThemeProvider } from "next-themes";

const Providers = ({ children }) => (
  <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
    {children}
  </ThemeProvider>
);

export default Providers;
