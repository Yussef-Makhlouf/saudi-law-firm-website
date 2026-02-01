'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  // Institutional Design:
  // - No backdrop blur (distracting).
  // - Solid white background (official).
  // - Distinct bottom border (structural).
  // - Strict alignment.

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 h-20 flex items-center justify-between">

        {/* Logo Section - The "Seal" */}
        <Link href="/" className="flex items-center gap-4 group">
          {/* Emblem Container: Square, Sharp, Matte Accent */}
          <div className="w-12 h-12 bg-accent flex items-center justify-center transition-colors">
            <span className="text-2xl font-light text-accent-foreground pb-2">
              ق
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-lg font-semibold text-foreground tracking-wide leading-none">
              {siteConfig.name}
            </span>
            <span className="text-xs text-muted-foreground uppercase tracking-widest mt-1">
              مكتب محاماة معتمد
            </span>
          </div>
        </Link>

        {/* Desktop Navigation - "The Registry" */}
        <div className="hidden md:flex items-center gap-8">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors group"
            >
              {item.label}
              {/* Minimal architectural underline indicator */}
              <span className="absolute bottom-0 right-0 w-0 h-[1px] bg-accent group-hover:w-full transition-all duration-300 ease-out" />
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button - Minimal */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-foreground hover:bg-muted transition-colors rounded-none"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-border md:hidden animate-in slide-in-from-top-2">
            <div className="flex flex-col divide-y divide-border">
              {siteConfig.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="px-6 py-4 text-foreground hover:bg-muted font-medium transition-colors text-right"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
