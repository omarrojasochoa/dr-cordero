export function cn(...classes) {
  return classes.filter(Boolean).join(" ")
}

// Format currency for pricing displays
export function formatCurrency(amount, currency = "USD") {
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: currency,
  }).format(amount)
}

// Smooth scroll to section
export function smoothScrollTo(elementId) {
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({ behavior: "smooth" })
  }
}

// Convert viewport units
export function remToPx(rem) {
  return rem * Number.parseFloat(getComputedStyle(document.documentElement).fontSize)
}
