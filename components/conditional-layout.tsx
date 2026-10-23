"use client"

import { usePathname } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const hideHeaderFooter =
    pathname === "/admin" ||
    pathname === "/admin/register" ||
    pathname === "/admin/dashboard" ||
    pathname === "/staff/dashboard" ||
    pathname === "/manager/dashboard" ||
    pathname === "/admin/staff" ||
    pathname === "/admin/news" ||
    pathname === "/admin/event" ||
    pathname === "/admin/publication" ||
    pathname === "/admin/adminnewsmanagement" ||
    pathname === "/admin/admineventmanagement" ||
    pathname === "/admin/adminpublicationmanagement" ||
    pathname === "/staff/news" ||
    pathname === "/staff/event" ||
    pathname === "/staff/publication" ||
    pathname === "/manager/news" ||
    pathname === "/manager/event" ||
    pathname === "/manager/publication" ||
    pathname === "/admin/staff/add" ||
    pathname === "/admin/staff/edit" ||
    pathname === "/admin/news/add" ||
    pathname === "/admin/news/edit" ||
    pathname === "/admin/news/delete" ||
    pathname === "/admin/publication/add" ||
    pathname === "/admin/publication/edit" ||
    pathname === "/admin/publication/delete" ||
    pathname === "/admin/event/add" ||
    pathname === "/admin/event/edit" ||
    pathname === "/admin/event/delete"

  if (hideHeaderFooter) {
    return <>{children}</>
  }

  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  )
}
