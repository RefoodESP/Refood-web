"use client"

import { useEffect, useRef } from "react"
import { usePathname } from "next/navigation"

const STORAGE_KEY = "refood_scroll_positions"

function getSaved(): Record<string, number> {
  try {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY) ?? "{}") as Record<string, number>
  } catch {
    return {}
  }
}

function savePosition(path: string, y: number) {
  try {
    const all = getSaved()
    all[path] = y
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(all))
  } catch {
    // ignore
  }
}

export function ScrollRestoration() {
  const pathname = usePathname()
  // Track whether this navigation was a browser back/forward (popstate)
  const isPop = useRef(false)
  // The pathname we are *leaving* — captured before React updates it
  const leavingPath = useRef(pathname)

  // Disable browser's built-in scroll restoration once
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual"
    }
  }, [])

  // Continuously save scroll position for the current page (debounced)
  useEffect(() => {
    let rafId: number
    const onScroll = () => {
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => {
        savePosition(pathname, window.scrollY)
      })
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener("scroll", onScroll)
    }
  }, [pathname])

  // Detect popstate (browser back/forward) before Next.js updates pathname
  useEffect(() => {
    const onPopState = () => {
      // Save current position before navigating away
      savePosition(leavingPath.current, window.scrollY)
      isPop.current = true
    }
    window.addEventListener("popstate", onPopState)
    return () => window.removeEventListener("popstate", onPopState)
  }, [])

  // React to pathname change — restore or reset scroll
  useEffect(() => {
    const savedY = getSaved()[pathname] ?? 0

    if (isPop.current && savedY > 0) {
      // Back/forward navigation: restore saved position
      // Use requestAnimationFrame + small delay to let the page paint first
      let attempts = 0
      const tryRestore = () => {
        attempts++
        // Attempt to scroll; if the page isn't tall enough yet, retry
        window.scrollTo({ top: savedY, behavior: "instant" })
        const reached = Math.abs(window.scrollY - savedY) < 10
        if (!reached && attempts < 10) {
          setTimeout(tryRestore, 60)
        }
      }
      setTimeout(tryRestore, 80)
    } else if (window.location.hash) {
      // Anchor navigation (e.g. /#que-es, /legal/#cookies): scroll to target element
      const targetId = decodeURIComponent(window.location.hash.slice(1))
      let attempts = 0
      const tryScrollToAnchor = () => {
        attempts++
        const target = document.getElementById(targetId)
        if (target) {
          target.scrollIntoView({ behavior: "auto" })
          return
        }
        if (attempts < 10) {
          setTimeout(tryScrollToAnchor, 60)
        }
      }
      setTimeout(tryScrollToAnchor, 50)
    } else {
      // Forward navigation: scroll to top
      window.scrollTo({ top: 0, behavior: "instant" })
    }

    // Reset pop flag and update leaving path tracker
    isPop.current = false
    leavingPath.current = pathname
  }, [pathname])

  return null
}
