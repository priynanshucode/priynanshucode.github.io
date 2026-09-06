import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Priyanshu Gupta — Data Engineer', description: 'Priyanshu Gupta: data engineering, SQL, database workflows, troubleshooting and root cause analysis. Explore a working data-quality demo with fictional data.' };
export default function RootLayout({children}: {children: React.ReactNode}) { return <html lang="en"><body>{children}</body></html>; }

