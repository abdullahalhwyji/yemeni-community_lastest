"use client"

import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Search, Phone, Mail, MapPin } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { CustomSearchModal } from "@/components/custom-search-modal"
import { useState } from "react"

export function TopBar() {
  const { language, setLanguage } = useLanguage()
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <>
      <div className="bg-primary text-white py-3">
        <div className="container flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <a
              href="https://wa.me/6282211112217"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:bg-background/10 px-3 py-1.5 rounded-md transition-all duration-200 hover:scale-105"
            >
              <Phone className="h-4 w-4 text-background" />
              <span className="hover:text-background transition-colors hidden sm:inline text-background">
                +6282211112217
              </span>
            </a>

            <a
              href="mailto:info@cyindo.org"
              className="flex items-center gap-2 hover:bg-background/10 px-3 py-1.5 rounded-md transition-all duration-200 hover:scale-105"
            >
              <Mail className="h-4 w-4 text-background" />
              <span className="hover:text-background transition-colors hidden sm:inline text-background">
                info@cyindo.org
              </span>
            </a>

            <a
              href="https://g.co/kgs/fcujx8K"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:bg-background/10 px-3 py-1.5 rounded-md transition-all duration-200 hover:scale-105"
            >
              <MapPin className="h-4 w-4 text-background" />
              <span className="hover:text-background transition-colors hidden sm:inline text-background">
                {language === "ar" ? "جاكرتا، إندونيسيا" : "Jakarta, Indonesia"}
              </span>
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsSearchOpen(true)}
              className="h-9 px-3 text-background hover:bg-white hover:text-primary rounded-lg transition-all duration-200 flex items-center gap-2"
            >
              <Search className="h-4 w-4" />
              <span className="hidden sm:inline">{language === "ar" ? "بحث..." : "Cari..."}</span>
            </Button>

            {/* Language switcher - only show on desktop */}
            <div className="hidden md:block">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-10 px-4 text-background hover:bg-white hover:text-primary rounded-lg transition-all duration-200 flex items-center gap-3 border border-white/20"
                  >
                    <div className="flex items-center gap-2">
                      {language === "ar" ? (
                        <>
                          <div className="w-6 h-4 rounded-sm overflow-hidden flex-shrink-0 shadow-sm">
                            <div className="w-full h-1/3 bg-red-600"></div>
                            <div className="w-full h-1/3 bg-white"></div>
                            <div className="w-full h-1/3 bg-black"></div>
                          </div>
                          <span className="font-medium">العربية</span>
                        </>
                      ) : (
                        <>
                          <div className="w-6 h-4 rounded-sm overflow-hidden flex-shrink-0 shadow-sm">
                            <div className="w-full h-1/2 bg-red-600"></div>
                            <div className="w-full h-1/2 bg-white"></div>
                          </div>
                          <span className="font-medium">Indonesia</span>
                        </>
                      )}
                    </div>
                    <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="bg-white border border-gray-200 shadow-xl min-w-[180px] p-2"
                >
                  <DropdownMenuItem
                    onClick={() => setLanguage("ar")}
                    className={`hover:bg-gray-100 flex items-center gap-3 px-4 py-3 rounded-md cursor-pointer ${language === "ar" ? "bg-yemen-brown/10 border border-yemen-brown/20" : ""}`}
                  >
                    <div className="w-6 h-4 rounded-sm overflow-hidden flex-shrink-0 shadow-sm">
                      <div className="w-full h-1/3 bg-red-600"></div>
                      <div className="w-full h-1/3 bg-white"></div>
                      <div className="w-full h-1/3 bg-black"></div>
                    </div>
                    <div className="flex flex-col">
                      <span className={`font-medium ${language === "ar" ? "text-yemen-brown" : ""}`}>العربية</span>
                      <span className="text-xs text-gray-500">Arabic</span>
                    </div>
                    {language === "ar" && <span className="ml-auto text-yemen-brown font-bold">✓</span>}
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => setLanguage("id")}
                    className={`hover:bg-gray-100 flex items-center gap-3 px-4 py-3 rounded-md cursor-pointer ${language === "id" ? "bg-yemen-brown/10 border border-yemen-brown/20" : ""}`}
                  >
                    <div className="w-6 h-4 rounded-sm overflow-hidden flex-shrink-0 shadow-sm">
                      <div className="w-full h-1/2 bg-red-600"></div>
                      <div className="w-full h-1/2 bg-white"></div>
                    </div>
                    <div className="flex flex-col">
                      <span className={`font-medium ${language === "id" ? "text-yemen-brown" : ""}`}>Indonesia</span>
                      <span className="text-xs text-gray-500">Indonesian</span>
                    </div>
                    {language === "id" && <span className="ml-auto text-yemen-brown font-bold">✓</span>}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>

      <CustomSearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  )
}
