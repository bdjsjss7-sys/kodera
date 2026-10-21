import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "KODERA — студия цифровой разработки", description: "Разработка сайтов, UX/UI, SEO и цифровых продуктов для бизнеса в России и Беларуси." };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="ru"><body>{children}</body></html>; }
