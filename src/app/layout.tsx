import type {Metadata} from 'next'
import {Inter} from "next/font/google";
import './globals.css'

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <div className="grid min-h-screen grid-cols-app">
            <aside className="border-r border-zinc-200 px-5 py-8">sidebar</aside>
            <main className="px-4 pb-12 pt-8">{children}</main>
        </div>
        </body>
        </html>
    )
}
