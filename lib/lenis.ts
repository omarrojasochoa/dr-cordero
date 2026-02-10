"use client"

import { useEffect, useRef } from "react"
import Lenis from "lenis"

type SmoothOptions = {
  duration?: number
  lerp?: number
  wheelMultiplier?: number
}

export function useSmoothScroll(options: SmoothOptions = {}) {
  const lenisRef = useRef<Lenis | null>(null)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) {
      return
    }

    const lenis = new Lenis({
      duration: options.duration ?? 1.1,
      lerp: options.lerp ?? 0.1,
      smoothWheel: true,
      wheelMultiplier: options.wheelMultiplier ?? 1,
      gestureOrientation: "vertical",
    })
    lenisRef.current = lenis

    const raf = (time: number) => {
      lenis.raf(time)
      rafRef.current = requestAnimationFrame(raf)
    }
    rafRef.current = requestAnimationFrame(raf)

    const onAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      if (!target) return
      const anchor = target.closest("a") as HTMLAnchorElement | null
      if (!anchor) return
      const href = anchor.getAttribute("href") || ""
      if (!href.startsWith("#")) return

      const id = href.slice(1)
      const el = document.getElementById(id)
      if (!el) return

      e.preventDefault()
      const nav = document.querySelector("nav")
      const offset =
        (nav?.getBoundingClientRect().height ?? 96) + 8

      lenis.scrollTo(el, { offset })
      history.pushState(null, "", `#${id}`)
    }
    document.addEventListener("click", onAnchorClick, { passive: false })

    return () => {
      document.removeEventListener("click", onAnchorClick)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      lenis.destroy()
      lenisRef.current = null
    }
  }, [options.duration, options.lerp, options.wheelMultiplier])
}
