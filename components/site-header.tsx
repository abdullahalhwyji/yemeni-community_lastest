"use client"

import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Logo } from "./logo"
import { TopBar } from "./top-bar"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const { language, setLanguage, t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  // Define submenu items for About section
  const aboutSubmenu = [
    { href: "/about/community", label: language === "ar" ? "عن الجالية" : "Tentang Komunitas" },
    { href: "/about/management", label: language === "ar" ? "إدارة الجالية" : "Manajemen Komunitas" },
    { href: "/about/regulations", label: language === "ar" ? "لوائح الجالية التنظيمية" : "Peraturan Komunitas" },
  ]

  // Define submenu items for Our Work section
  const ourWorkSubmenu = [
    { href: "/our-work/business-cluster", label: language === "ar" ? "التكتل التجاري" : "Klaster Bisnis" },
    { href: "/our-work/national-occasions", label: language === "ar" ? "المناسبات الوطنية" : "Acara Nasional" },
    { href: "/our-work/events-activities", label: language === "ar" ? "الفعاليات والأنشطة" : "Acara dan Kegiatan" },
  ]

  // Define submenu items for Media Center section
  const mediaCenterSubmenu = [
    { href: "/media/news", label: language === "ar" ? "الأخبار" : "Berita" },
    { href: "/media/articles", label: language === "ar" ? "المقالات" : "Artikel" },
    { href: "/media/photos", label: language === "ar" ? "ألبوم الصور" : "Galeri Foto" },
    { href: "/media/videos", label: language === "ar" ? "معرض الفيديو" : "Galeri Video" },
  ]

  // Define submenu items for Partners section
  const partnersSubmenu = [
    { href: "/partners/strategic-partners", label: language === "ar" ? "الشركاء الاستراتيجيون" : "Mitra Strategis" },
    { href: "/partners/executive-partners", label: language === "ar" ? "الشركاء التنفيذيون" : "Mitra Eksekutif" },
  ]

  // Main menu items
  const menuItems = [
    { href: "/", label: t("home") },
    {
      label: t("about"),
      submenu: aboutSubmenu,
    },
    {
      label: t("our_work"),
      submenu: ourWorkSubmenu,
    },
    {
      label: language === "ar" ? "المركز الإعلامي" : "Pusat Media",
      submenu: mediaCenterSubmenu,
    },
    {
      label: t("partners"),
      submenu: partnersSubmenu,
    },
    { href: "/indonesia-guide", label: t("indonesia_guide") },
    { href: "/contact", label: t("contact") },
  ]

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setActiveDropdown(null)
    }

    document.addEventListener("click", handleClickOutside)
    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [])

  // Add this useEffect after the existing useEffect
  useEffect(() => {
    if (!isOpen) {
      setActiveDropdown(null)
    }
  }, [isOpen])

  return (
    <>
      <TopBar />
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          {/* Layout for Arabic (RTL) */}
          {language === "ar" ? (
            <>
              {/* Logo first (right side) */}
              <Logo />

              {/* Navigation second (center-right) */}
              <nav className="hidden md:flex items-center">
                {menuItems.map((item, index) => (
                  <div
                    key={index}
                    className="relative nav-item-container"
                    onMouseEnter={() => {
                      if (item.submenu) {
                        setActiveDropdown(item.label)
                      }
                    }}
                    onMouseLeave={() => {
                      if (item.submenu) {
                        setActiveDropdown(null)
                      }
                    }}
                    onClick={(e) => {
                      if (item.submenu) {
                        e.preventDefault()
                        e.stopPropagation()
                        setActiveDropdown(activeDropdown === item.label ? null : item.label)
                      }
                    }}
                  >
                    {item.submenu ? (
                      <div className="nav-item-wrapper">
                        <button className={cn("nav-item", activeDropdown === item.label ? "active" : "")}>
                          {item.label}
                          <svg
                            className={`ml-1 h-3 w-3 transition-transform duration-200 ${activeDropdown === item.label ? "rotate-180" : ""}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        {activeDropdown === item.label && (
                          <div className="nav-dropdown dropdown-rtl">
                            {item.submenu.map((subItem, subIndex) => (
                              <Link
                                key={subIndex}
                                href={subItem.href}
                                className="nav-dropdown-item"
                                onClick={() => setActiveDropdown(null)}
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link href={item.href} className="nav-item-wrapper">
                        <span className="nav-item">{item.label}</span>
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              {/* Register button and mobile menu (left side) */}
              <div className="flex items-center gap-4">
                <Button asChild className="hidden md:flex bg-yemen-brown hover:bg-yemen-brown-dark text-white">
                  <Link href="/register">
                    <span>{t("register")}</span>
                  </Link>
                </Button>

                {/* Mobile Navigation */}
                <div className="md:hidden">
                  <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full">
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Toggle menu</span>
                      </Button>
                    </SheetTrigger>
                    <SheetContent side={language === "ar" ? "right" : "left"} className="w-[85%] sm:w-[350px] p-0">
                      <div className="flex flex-col h-full">
                        <div className="border-b p-4 bg-yemen-brown-dark text-white">
                          <div className="flex justify-between items-start mb-4">
                            <Logo inMobileMenu={true} />
                            {/* Close button - repositioned */}
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => setIsOpen(false)}
                              className="h-8 w-8 rounded-full bg-white/10 hover:bg-white/20 text-white ml-2"
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>

                        {/* Language Switcher Section for Mobile - Smaller and with brown title */}
                        <div className="p-3 bg-gradient-to-b from-yemen-brown-dark/80 to-yemen-brown-dark/30">
                          <h3 className="text-sm font-medium mb-2 text-yemen-brown-light">
                            {language === "ar" ? "اختر اللغة" : "Pilih Bahasa"}
                          </h3>
                          <div className="flex flex-col gap-2">
                            <button
                              onClick={() => setLanguage("ar")}
                              className={`flex items-center gap-2 p-2 rounded-md transition-all duration-200 ${
                                language === "ar"
                                  ? "bg-white text-yemen-brown-dark shadow-sm"
                                  : "bg-white/10 text-white hover:bg-white/20"
                              }`}
                            >
                              <div className="w-6 h-4 rounded-sm overflow-hidden flex-shrink-0 shadow-sm border border-white/20">
                                <div className="w-full h-1/3 bg-red-600"></div>
                                <div className="w-full h-1/3 bg-white"></div>
                                <div className="w-full h-1/3 bg-black"></div>
                              </div>
                              <div className="flex flex-col items-start">
                                <span className="text-sm font-medium">العربية</span>
                                <span className={`text-xs ${language === "ar" ? "text-yemen-brown" : "text-white/60"}`}>
                                  Arabic
                                </span>
                              </div>
                              {language === "ar" && (
                                <span className="ml-auto bg-yemen-brown text-white h-5 w-5 rounded-full flex items-center justify-center text-xs">
                                  ✓
                                </span>
                              )}
                            </button>

                            <button
                              onClick={() => setLanguage("id")}
                              className={`flex items-center gap-2 p-2 rounded-md transition-all duration-200 ${
                                language === "id"
                                  ? "bg-white text-yemen-brown-dark shadow-sm"
                                  : "bg-white/10 text-white hover:bg-white/20"
                              }`}
                            >
                              <div className="w-6 h-4 rounded-sm overflow-hidden flex-shrink-0 shadow-sm border border-white/20">
                                <div className="w-full h-1/2 bg-red-600"></div>
                                <div className="w-full h-1/2 bg-white"></div>
                              </div>
                              <div className="flex flex-col items-start">
                                <span className="text-sm font-medium">Bahasa Indonesia</span>
                                <span className={`text-xs ${language === "id" ? "text-yemen-brown" : "text-white/60"}`}>
                                  Indonesian
                                </span>
                              </div>
                              {language === "id" && (
                                <span className="ml-auto bg-yemen-brown text-white h-5 w-5 rounded-full flex items-center justify-center text-xs">
                                  ✓
                                </span>
                              )}
                            </button>
                          </div>
                        </div>

                        <div
                          className="flex flex-col gap-1 p-4 overflow-y-auto flex-grow"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {menuItems.map((item, index) => (
                            <div key={index} className="w-full" onClick={(e) => e.stopPropagation()}>
                              {item.submenu ? (
                                <div>
                                  <button
                                    onClick={(e) => {
                                      e.preventDefault()
                                      e.stopPropagation()
                                      setActiveDropdown(activeDropdown === item.label ? null : item.label)
                                    }}
                                    className="mobile-nav-item w-full flex justify-between items-center"
                                  >
                                    <span>{item.label}</span>
                                    <svg
                                      className={`h-4 w-4 transition-transform duration-200 ${
                                        activeDropdown === item.label ? "rotate-180" : ""
                                      }`}
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                      />
                                    </svg>
                                  </button>
                                  {activeDropdown === item.label && (
                                    <div className="mobile-dropdown">
                                      {item.submenu.map((subItem, subIndex) => (
                                        <Link
                                          key={subIndex}
                                          href={subItem.href}
                                          onClick={() => setIsOpen(false)}
                                          className="mobile-dropdown-item"
                                        >
                                          {subItem.label}
                                        </Link>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              ) : (
                                <Link
                                  href={item.href}
                                  onClick={() => setIsOpen(false)}
                                  className="mobile-nav-item block"
                                >
                                  <span>{item.label}</span>
                                </Link>
                              )}
                            </div>
                          ))}
                        </div>
                        <div className="border-t p-4">
                          <Button
                            asChild
                            onClick={() => setIsOpen(false)}
                            className="w-full bg-yemen-brown hover:bg-yemen-brown-dark text-white"
                          >
                            <Link href="/register">
                              <span>{t("register")}</span>
                            </Link>
                          </Button>
                          <div className="mt-4 grid grid-cols-1 gap-2">
                            <a
                              href="https://wa.me/6282211112217"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm flex items-center gap-2 text-muted-foreground hover:text-foreground"
                            >
                              <span className="h-8 w-8 rounded-full bg-yemen-brown-light/20 text-yemen-brown flex items-center justify-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg>
                              </span>
                              <span>+6282211112217</span>
                            </a>
                            <a
                              href="mailto:komunitasyaman@gmail.com"
                              className="text-sm flex items-center gap-2 text-muted-foreground hover:text-foreground"
                            >
                              <span className="h-8 w-8 rounded-full bg-yemen-brown-light/20 text-yemen-brown flex items-center justify-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <rect width="20" height="16" x="2" y="4" rx="2" />
                                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                </svg>
                              </span>
                              <span>komunitasyaman@gmail.com</span>
                            </a>
                            <a
                              href="https://g.co/kgs/fcujx8K"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm flex items-center gap-2 text-muted-foreground hover:text-foreground"
                            >
                              <span className="h-8 w-8 rounded-full bg-yemen-brown-light/20 text-yemen-brown flex items-center justify-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                                  <circle cx="12" cy="10" r="3" />
                                </svg>
                              </span>
                              <span>{language === "ar" ? "جاكرتا، إندونيسيا" : "Jakarta, Indonesia"}</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </SheetContent>
                  </Sheet>
                </div>
              </div>
            </>
          ) : (
            /* Layout for Indonesian (LTR) */
            <>
              {/* Logo first (left side) */}
              <Logo />

              {/* Navigation and Register button (right side) */}
              <div className="hidden md:flex md:items-center md:gap-4">
                <nav className="flex items-center space-x-1">
                  {menuItems.map((item, index) => (
                    <div
                      key={index}
                      className="relative nav-item-container mx-1"
                      onMouseEnter={() => {
                        if (item.submenu) {
                          setActiveDropdown(item.label)
                        }
                      }}
                      onMouseLeave={() => {
                        if (item.submenu) {
                          setActiveDropdown(null)
                        }
                      }}
                      onClick={(e) => {
                        if (item.submenu) {
                          e.preventDefault()
                          e.stopPropagation()
                          setActiveDropdown(activeDropdown === item.label ? null : item.label)
                        }
                      }}
                    >
                      {item.submenu ? (
                        <div className="nav-item-wrapper">
                          <button
                            className={cn("nav-item px-2 md:px-3", activeDropdown === item.label ? "active" : "")}
                            style={{ height: "3.5rem" }}
                          >
                            {item.label}
                            <svg
                              className={`ml-1 h-3 w-3 transition-transform duration-200 ${activeDropdown === item.label ? "rotate-180" : ""}`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>
                          {activeDropdown === item.label && (
                            <div className="nav-dropdown dropdown-ltr">
                              {item.submenu.map((subItem, subIndex) => (
                                <Link
                                  key={subIndex}
                                  href={subItem.href}
                                  className="nav-dropdown-item"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  {subItem.label}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <Link href={item.href} className="nav-item-wrapper">
                          <span className="nav-item px-2 md:px-3" style={{ height: "3.5rem" }}>
                            {item.label}
                          </span>
                        </Link>
                      )}
                    </div>
                  ))}
                </nav>

                <Button asChild className="bg-yemen-brown hover:bg-yemen-brown-dark text-white ml-2">
                  <Link href="/register">
                    <span>{t("register")}</span>
                  </Link>
                </Button>
              </div>

              {/* Mobile Navigation */}
              <div className="md:hidden">
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full">
                      <Menu className="h-5 w-5" />
                      <span className="sr-only">Toggle menu</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-[85%] sm:w-[350px] p-0">
                    <div className="flex flex-col h-full">
                      <div className="border-b p-4 bg-yemen-brown-dark text-white">
                        <div className="flex justify-between items-start mb-4">
                          <Logo inMobileMenu={true} />
                          {/* Close button - repositioned */}
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsOpen(false)}
                            className="h-8 w-8 rounded-full bg-white/10 hover:bg-white/20 text-white ml-2"
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>

                      {/* Language Switcher Section for Mobile - Smaller and with brown title */}
                      <div className="p-3 bg-gradient-to-b from-yemen-brown-dark/80 to-yemen-brown-dark/30">
                        <h3 className="text-sm font-medium mb-2 text-yemen-brown-light">
                          {language === "ar" ? "اختر اللغة" : "Pilih Bahasa"}
                        </h3>
                        <div className="flex flex-col gap-2">
                          <button
                            onClick={() => setLanguage("ar")}
                            className={`flex items-center gap-2 p-2 rounded-md transition-all duration-200 ${
                              language === "ar"
                                ? "bg-white text-yemen-brown-dark shadow-sm"
                                : "bg-white/10 text-white hover:bg-white/20"
                            }`}
                          >
                            <div className="w-6 h-4 rounded-sm overflow-hidden flex-shrink-0 shadow-sm border border-white/20">
                              <div className="w-full h-1/3 bg-red-600"></div>
                              <div className="w-full h-1/3 bg-white"></div>
                              <div className="w-full h-1/3 bg-black"></div>
                            </div>
                            <div className="flex flex-col items-start">
                              <span className="text-sm font-medium">العربية</span>
                              <span className={`text-xs ${language === "ar" ? "text-yemen-brown" : "text-white/60"}`}>
                                Arabic
                              </span>
                            </div>
                            {language === "ar" && (
                              <span className="ml-auto bg-yemen-brown text-white h-5 w-5 rounded-full flex items-center justify-center text-xs">
                                ✓
                              </span>
                            )}
                          </button>

                          <button
                            onClick={() => setLanguage("id")}
                            className={`flex items-center gap-2 p-2 rounded-md transition-all duration-200 ${
                              language === "id"
                                ? "bg-white text-yemen-brown-dark shadow-sm"
                                : "bg-white/10 text-white hover:bg-white/20"
                            }`}
                          >
                            <div className="w-6 h-4 rounded-sm overflow-hidden flex-shrink-0 shadow-sm border border-white/20">
                              <div className="w-full h-1/2 bg-red-600"></div>
                              <div className="w-full h-1/2 bg-white"></div>
                            </div>
                            <div className="flex flex-col items-start">
                              <span className="text-sm font-medium">Bahasa Indonesia</span>
                              <span className={`text-xs ${language === "id" ? "text-yemen-brown" : "text-white/60"}`}>
                                Indonesian
                              </span>
                            </div>
                            {language === "id" && (
                              <span className="ml-auto bg-yemen-brown text-white h-5 w-5 rounded-full flex items-center justify-center text-xs">
                                ✓
                              </span>
                            )}
                          </button>
                        </div>
                      </div>

                      <div
                        className="flex flex-col gap-1 p-4 overflow-y-auto flex-grow"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {menuItems.map((item, index) => (
                          <div key={index} className="w-full" onClick={(e) => e.stopPropagation()}>
                            {item.submenu ? (
                              <div>
                                <button
                                  onClick={(e) => {
                                    e.preventDefault()
                                    e.stopPropagation()
                                    setActiveDropdown(activeDropdown === item.label ? null : item.label)
                                  }}
                                  className="mobile-nav-item w-full flex justify-between items-center"
                                >
                                  <span>{item.label}</span>
                                  <svg
                                    className={`h-4 w-4 transition-transform duration-200 ${
                                      activeDropdown === item.label ? "rotate-180" : ""
                                    }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M19 9l-7 7-7-7"
                                    />
                                  </svg>
                                </button>
                                {activeDropdown === item.label && (
                                  <div className="mobile-dropdown">
                                    {item.submenu.map((subItem, subIndex) => (
                                      <Link
                                        key={subIndex}
                                        href={subItem.href}
                                        onClick={() => setIsOpen(false)}
                                        className="mobile-dropdown-item"
                                      >
                                        {subItem.label}
                                      </Link>
                                    ))}
                                  </div>
                                )}
                              </div>
                            ) : (
                              <Link href={item.href} onClick={() => setIsOpen(false)} className="mobile-nav-item block">
                                <span>{item.label}</span>
                              </Link>
                            )}
                          </div>
                        ))}
                      </div>
                      <div className="border-t p-4">
                        <Button
                          asChild
                          onClick={() => setIsOpen(false)}
                          className="w-full bg-yemen-brown hover:bg-yemen-brown-dark text-white"
                        >
                          <Link href="/register">
                            <span>{t("register")}</span>
                          </Link>
                        </Button>
                        <div className="mt-4 grid grid-cols-1 gap-2">
                          <a
                            href="https://wa.me/6282211112217"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm flex items-center gap-2 text-muted-foreground hover:text-foreground"
                          >
                            <span className="h-8 w-8 rounded-full bg-yemen-brown-light/20 text-yemen-brown flex items-center justify-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                              </svg>
                            </span>
                            <span>+6282211112217</span>
                          </a>
                          <a
                            href="mailto:komunitasyaman@gmail.com"
                            className="text-sm flex items-center gap-2 text-muted-foreground hover:text-foreground"
                          >
                            <span className="h-8 w-8 rounded-full bg-yemen-brown-light/20 text-yemen-brown flex items-center justify-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <rect width="20" height="16" x="2" y="4" rx="2" />
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                              </svg>
                            </span>
                            <span>komunitasyaman@gmail.com</span>
                          </a>
                          <a
                            href="https://g.co/kgs/fcujx8K"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm flex items-center gap-2 text-muted-foreground hover:text-foreground"
                          >
                            <span className="h-8 w-8 rounded-full bg-yemen-brown-light/20 text-yemen-brown flex items-center justify-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                                <circle cx="12" cy="10" r="3" />
                              </svg>
                            </span>
                            <span>{language === "ar" ? "جاكرتا، إندونيسيا" : "Jakarta, Indonesia"}</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </>
          )}
        </div>
      </header>
    </>
  )
}
