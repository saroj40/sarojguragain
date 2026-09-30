import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import profile from "@/config/profile";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const instrument = Instrument_Serif({ variable: "--font-instrument", subsets: ["latin"], weight: "400", style: ["normal", "italic"] });

const description =
  "Software engineer building enterprise platforms with .NET Core, React, PostgreSQL and Kafka. Portfolio and engineering blog.";

export const metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: `${profile.name} | ${profile.role}`,
    template: `%s | ${profile.name}`,
  },
  description,
  alternates: { types: { "application/rss+xml": "/rss.xml" } },
  openGraph: {
    type: "website",
    title: `${profile.name} | ${profile.role}`,
    description,
    siteName: profile.name,
  },
  twitter: { card: "summary", title: `${profile.name} | ${profile.role}`, description },
};

// Runs before first paint so there is no theme flash. Lives in a server component,
// so React never re-renders it on the client. Default theme is dark.
const themeScript = `(function(){try{if(localStorage.getItem("theme")!=="light")document.documentElement.classList.add("dark")}catch(e){document.documentElement.classList.add("dark")}})();`;

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${instrument.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen bg-paper font-sans text-ink antialiased">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
