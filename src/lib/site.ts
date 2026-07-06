export const SITE = {
  name: "Pilgrims Guest House",
  owner: "Maranatha Beauty For Ashes Club (MBEFAC)",
  tagline: "A Christian Retreat & Spiritual Haven",
  address: "No. 5 Ediaye Street, Off Ilen Road, Evbakhua, Ekpoma, Edo State, Nigeria",
  phone: "07061602778",
  phoneIntl: "+2347061602778",
  whatsapp: "08055934725",
  // International format for wa.me link (Nigeria +234, drop leading 0)
  whatsappIntl: "2348055934725",
  email: "asemotabright81@gmail.com",
  // Embedded map iframe URL (no API key needed)
  mapEmbed:
    "https://www.google.com/maps?q=Ediaye+Street+Evbakhua+Ekpoma+Edo+State+Nigeria&output=embed",
} as const;

export function waLink(message: string) {
  return `https://wa.me/${SITE.whatsappIntl}?text=${encodeURIComponent(message)}`;
}

export function mailLink(subject: string, body: string) {
  return `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/rooms", label: "Rooms" },
  { to: "/retreats", label: "Retreats" },
  { to: "/facilities", label: "Facilities" },
  { to: "/gallery", label: "Gallery" },
  { to: "/blog", label: "Devotionals" },
  { to: "/reservations", label: "Reservations" },
  { to: "/contact", label: "Contact" },
] as const;
