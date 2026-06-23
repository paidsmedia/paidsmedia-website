import React, { useEffect, useState } from "react"
import {
  BarChart3,
  Globe,
  LineChart,
  MousePointerClick,
  ShieldCheck,
  Target,
  TrendingUp,
  CheckCircle2,
  Star,
  Zap,
  ArrowRight,
  Mail,
  MessageCircle,
  Menu,
  X,
} from "lucide-react"

const testimonials = [
  {
    initials: "BW",
    name: "Brian Wilson",
    role: "Plumbing Company • Chicago",
    quote:
      "Our Google Ads leads became far more consistent after the campaign and tracking overhaul.",
    badge: "bg-orange-500/20 text-orange-400",
  },
  {
    initials: "JM",
    name: "Jason Miller",
    role: "Garage Door Repair • Texas",
    quote:
      "After fixing our tracking and campaigns, our lead quality improved almost immediately.",
    badge: "bg-cyan-500/20 text-cyan-400",
  },
  {
    initials: "AR",
    name: "Amanda Roberts",
    role: "Roofing Business • Florida",
    quote:
      "Very transparent reporting and much better conversion tracking than our previous agency.",
    badge: "bg-blue-500/20 text-blue-400",
  },
  {
    initials: "DK",
    name: "Daniel Kim",
    role: "Shopify Brand Owner",
    quote:
      "Meta CAPI and server-side tracking setup helped us improve attribution accuracy significantly.",
    badge: "bg-green-500/20 text-green-400",
  },
  {
    initials: "TS",
    name: "Tom Sanders",
    role: "HVAC Services • California",
    quote:
      "Campaign optimization was very data-driven and our booked calls increased without raising budget.",
    badge: "bg-yellow-500/20 text-yellow-400",
  },
  {
    initials: "ML",
    name: "Melissa Lopez",
    role: "Medical Clinic • Arizona",
    quote:
      "The landing page redesign improved our mobile conversion rate and lead quality noticeably.",
    badge: "bg-purple-500/20 text-purple-400",
  },
]

const workflowSteps = [
  {
    title: "Audit",
    text: "Complete review of campaigns, tracking setup, attribution, and landing pages.",
  },
  {
    title: "Strategy",
    text: "Build a custom growth strategy focused on lead quality, profitability, and clean measurement.",
  },
  {
    title: "Implementation",
    text: "Launch optimized campaigns with advanced conversion tracking and analytics.",
  },
  {
    title: "Scaling",
    text: "Improve performance continuously using testing, reporting, and data-driven optimization.",
  },
]

export default function PaidMediaAgencyWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [trackingFields, setTrackingFields] = useState({
    pageUrl: "",
    referrer: "",
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_term: "",
    utm_content: "",
  })

  useEffect(() => {
    if (typeof window === "undefined") return

    const params = new URLSearchParams(window.location.search)

    setTrackingFields({
      pageUrl: window.location.href || "",
      referrer: document.referrer || "",
      utm_source: params.get("utm_source") || "",
      utm_medium: params.get("utm_medium") || "",
      utm_campaign: params.get("utm_campaign") || "",
      utm_term: params.get("utm_term") || "",
      utm_content: params.get("utm_content") || "",
    })
  }, [])

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <div className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,#0f2a44_0%,#07111f_35%,#000000_100%)] text-white selection:bg-cyan-400 selection:text-black">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/30 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:px-6 xl:gap-4">
          <a href="#home" className="group flex items-center gap-3 sm:gap-4">
            <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-[18px] border border-cyan-400/20 bg-black shadow-[0_0_40px_rgba(34,211,238,0.18)] transition duration-500 group-hover:scale-105 sm:h-14 sm:w-14 sm:rounded-[20px]">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-blue-500/10 to-transparent" />
              <div className="absolute inset-[1px] rounded-[17px] bg-black sm:rounded-[19px]" />
              <div className="relative flex h-6 items-end gap-[3px] sm:h-7">
                <div className="h-3 w-[4px] rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.9)]" />
                <div className="h-5 w-[4px] rounded-full bg-white" />
                <div className="h-4 w-[4px] rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.9)]" />
                <div className="h-6 w-[4px] rounded-full bg-white" />
              </div>
            </div>

            <div>
              <h2 className="text-[24px] font-black leading-none tracking-[-0.04em] text-white sm:text-[30px]">
                Paids<span className="text-cyan-400">Media</span>
              </h2>
              <div className="mt-1 hidden items-center gap-2 sm:flex">
                <div className="h-[1px] w-10 bg-cyan-400/60" />
                <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-gray-500">
                  Performance Marketing Agency
                </p>
              </div>
            </div>
          </a>

          <nav className="ml-auto mr-4 hidden items-center gap-6 text-sm text-gray-300 lg:flex xl:mr-6 xl:gap-8">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="transition hover:text-white">
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="https://calendly.com/sumonofficials/free-1-1-consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden shrink-0 items-center justify-center whitespace-nowrap rounded-2xl bg-cyan-400 px-5 py-3 font-semibold text-black shadow-lg shadow-cyan-500/20 transition duration-300 hover:bg-cyan-300 lg:flex xl:px-6"
          >
            Book Free Call
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-white/10 bg-black/80 px-4 py-4 backdrop-blur-xl lg:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-xl border border-white/5 bg-white/5 px-4 py-3 text-sm text-gray-200 transition hover:bg-white/10"
                >
                  {link.label}
                </a>
              ))}

              <a
                href="https://calendly.com/sumonofficials/free-1-1-consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center justify-center rounded-xl bg-cyan-400 px-4 py-3 font-semibold text-black"
              >
                Book Free Call
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section
        id="home"
        className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28"
      >
        <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative z-10 grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 backdrop-blur-xl">
              <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan-300">
                Google Ads • Tracking • CRO
              </p>
            </div>

            <h1 className="mb-8 text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-7xl">
              2026 Growth Systems For Google Ads & Advanced Tracking
            </h1>

            <p className="mb-10 max-w-xl text-base leading-relaxed text-gray-400 sm:text-lg md:text-xl">
              We build modern performance marketing systems with Google Ads, GA4, GTM,
              server-side tracking, landing pages, and conversion optimization designed
              to scale profitable growth.
            </p>

            <div className="flex flex-col flex-wrap gap-4 sm:flex-row sm:gap-5">
              <a
                href="https://calendly.com/sumonofficials/free-1-1-consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-2xl bg-white px-8 py-4 font-semibold text-black shadow-2xl transition duration-300 hover:scale-105"
              >
                Book Free Audit
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-8 py-4 font-semibold backdrop-blur-sm transition duration-300 hover:bg-white/10"
              >
                View Services
              </a>
            </div>

            <div className="mb-10 mt-12 flex flex-col gap-6 lg:flex-row lg:items-center">
              <div className="flex flex-wrap -space-x-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-black bg-gradient-to-br from-cyan-400 to-blue-600 text-sm font-bold shadow-lg shadow-cyan-500/20">
                  SA
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-black bg-gradient-to-br from-purple-500 to-pink-500 text-sm font-bold shadow-lg shadow-purple-500/20">
                  MK
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-black bg-gradient-to-br from-green-400 to-emerald-600 text-sm font-bold shadow-lg shadow-green-500/20">
                  JR
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-black bg-gradient-to-br from-orange-400 to-red-500 text-sm font-bold shadow-lg shadow-orange-500/20">
                  AL
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-black bg-gradient-to-br from-yellow-400 to-amber-600 text-sm font-bold shadow-lg shadow-yellow-500/20">
                  DT
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-black bg-gradient-to-br from-blue-400 to-indigo-600 text-sm font-bold shadow-lg shadow-blue-500/20">
                  RM
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-black bg-gradient-to-br from-pink-400 to-rose-600 text-sm font-bold shadow-lg shadow-pink-500/20">
                  SK
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-black bg-gradient-to-br from-teal-400 to-cyan-600 text-sm font-bold shadow-lg shadow-cyan-500/20">
                  JW
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-black bg-gradient-to-br from-lime-400 to-green-600 text-sm font-bold shadow-lg shadow-green-500/20">
                  NP
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-black bg-gradient-to-br from-fuchsia-500 to-purple-700 text-sm font-bold shadow-lg shadow-purple-500/20">
                  CM
                </div>
              </div>

              <div className="max-w-md">
                <h4 className="mb-2 text-lg font-semibold">10+ Performance Specialists</h4>
                <p className="text-sm leading-relaxed text-gray-400">
                  A dedicated team of Google Ads strategists, tracking engineers, CRO
                  specialists, designers, and analytics experts focused on scalable
                  business growth.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-8 sm:gap-6">
              <div>
                <h3 className="text-3xl font-bold">500+</h3>
                <p className="mt-1 text-sm text-gray-500">Projects Completed</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold">7+</h3>
                <p className="mt-1 text-sm text-gray-500">Years Experience</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold">250+</h3>
                <p className="mt-1 text-sm text-gray-500">Client Reviews</p>
              </div>
            </div>
          </div>

          <div>
            <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-8 shadow-2xl backdrop-blur-xl">
              <div className="space-y-6">
                <div className="rounded-3xl border border-white/10 bg-black/40 p-6 transition hover:border-cyan-400/30">
                  <div className="mb-4 flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10">
                      <Target className="h-7 w-7 text-cyan-400" />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold">Google Ads Management</h3>
                      <p className="text-sm text-gray-400">Lead Generation & Scaling</p>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-gray-400">
                    Build and optimize campaigns focused on lower CPA, better lead quality,
                    and scalable profitability.
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-black/40 p-6 transition hover:border-cyan-400/30">
                  <div className="mb-4 flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10">
                      <BarChart3 className="h-7 w-7 text-blue-400" />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold">GA4 + GTM Tracking</h3>
                      <p className="text-sm text-gray-400">Attribution & Conversion Accuracy</p>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-gray-400">
                    Repair broken tracking, build clean conversion events, and improve
                    attribution visibility across ad platforms.
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-black/40 p-6 transition hover:border-cyan-400/30">
                  <div className="mb-4 flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-500/10">
                      <ShieldCheck className="h-7 w-7 text-purple-400" />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold">Server-Side Tracking</h3>
                      <p className="text-sm text-gray-400">Meta CAPI • Enhanced Measurement</p>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-gray-400">
                    Improve data quality with server-side tracking, enhanced conversions,
                    and more reliable attribution.
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-black/40 p-6 transition hover:border-cyan-400/30">
                  <div className="mb-4 flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-500/10">
                      <MousePointerClick className="h-7 w-7 text-green-400" />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold">Landing Page CRO</h3>
                      <p className="text-sm text-gray-400">Better Conversion Rates</p>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-gray-400">
                    Conversion-focused landing pages and UX improvements to turn more clicks
                    into qualified leads.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="relative overflow-hidden bg-gradient-to-b from-[#050505] via-black to-[#070b14] px-4 py-28 sm:px-6 md:py-36"
      >
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-20 text-center">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-5 py-2 backdrop-blur-xl">
              <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Services
              </p>
            </div>

            <h2 className="mx-auto mb-6 max-w-4xl text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
              Built To Scale <span className="text-cyan-400">Leads, Revenue</span> & Tracking Accuracy
            </h2>

            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-400">
              High-performance Google Ads systems, advanced analytics infrastructure,
              and conversion-focused landing pages designed for local businesses and
              growing brands.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-2xl shadow-[0_0_40px_rgba(34,211,238,0.05)] transition duration-500 hover:-translate-y-2 hover:border-cyan-400/30">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

              <div className="relative z-10">
                <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-3xl border border-cyan-400/20 bg-cyan-500/10 shadow-lg shadow-cyan-500/10">
                  <Target className="h-10 w-10 text-cyan-400" />
                </div>

                <h3 className="mb-6 text-3xl font-black">Google Ads</h3>

                <p className="mb-8 text-[15px] leading-relaxed text-gray-400">
                  Strategic Google Ads campaign management focused on lead generation,
                  lower CPA, and scalable growth.
                </p>

                <div className="space-y-4 text-gray-300">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-cyan-400" /> Search Campaigns
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-cyan-400" /> Performance Max
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-cyan-400" /> Remarketing
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-cyan-400" /> Lead Gen Scaling
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-2xl shadow-[0_0_40px_rgba(59,130,246,0.05)] transition duration-500 hover:-translate-y-2 hover:border-blue-400/30">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

              <div className="relative z-10">
                <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-3xl border border-blue-400/20 bg-blue-500/10 shadow-lg shadow-blue-500/10">
                  <BarChart3 className="h-10 w-10 text-blue-400" />
                </div>

                <h3 className="mb-6 text-3xl font-black">Tracking & Analytics</h3>

                <p className="mb-8 text-[15px] leading-relaxed text-gray-400">
                  Accurate conversion tracking, GA4, GTM, and analytics systems that
                  improve visibility and decision-making.
                </p>

                <div className="space-y-4 text-gray-300">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-400" /> GA4 Setup
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-400" /> Google Tag Manager
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-400" /> Enhanced Conversions
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-400" /> Attribution Fixes
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-2xl shadow-[0_0_40px_rgba(168,85,247,0.05)] transition duration-500 hover:-translate-y-2 hover:border-purple-400/30">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

              <div className="relative z-10">
                <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-3xl border border-purple-400/20 bg-purple-500/10 shadow-lg shadow-purple-500/10">
                  <ShieldCheck className="h-10 w-10 text-purple-400" />
                </div>

                <h3 className="mb-6 text-3xl font-black">Server-Side Tracking</h3>

                <p className="mb-8 text-[15px] leading-relaxed text-gray-400">
                  Advanced tracking for better attribution accuracy using Meta CAPI,
                  enhanced measurement, and privacy-safe data collection.
                </p>

                <div className="space-y-4 text-gray-300">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-purple-400" /> Meta CAPI
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-purple-400" /> Server GTM
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-purple-400" /> Better Attribution
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-purple-400" /> Data Quality
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-500/10">
                  <MousePointerClick className="h-8 w-8 text-green-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-black">Landing Pages & CRO</h3>
                  <p className="text-sm text-gray-400">Higher Conversion Rate • Better Lead Quality</p>
                </div>
              </div>

              <p className="mb-6 text-gray-400">
                We review landing page messaging, mobile experience, form flow, and
                conversion bottlenecks to improve lead quality and conversion rate.
              </p>

              <div className="grid gap-3 text-gray-300 sm:grid-cols-2">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-400" /> CRO-focused page structure
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-400" /> Faster mobile UX
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-400" /> Better lead forms
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-400" /> Messaging improvements
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10">
                  <Globe className="h-8 w-8 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-black">Reporting & Growth Insights</h3>
                  <p className="text-sm text-gray-400">Dashboards • KPI visibility • decision support</p>
                </div>
              </div>

              <p className="mb-6 text-gray-400">
                Clean reporting dashboards and performance reviews that show where spend
                is wasted, what is driving leads, and where growth opportunities exist.
              </p>

              <div className="grid gap-3 text-gray-300 sm:grid-cols-2">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-cyan-400" /> Looker Studio dashboards
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-cyan-400" /> Weekly / monthly insights
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-cyan-400" /> Lead source visibility
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-cyan-400" /> Growth recommendations
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="bg-neutral-950 px-4 py-20 sm:px-6 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-cyan-400">
              Results
            </p>
            <h2 className="mb-6 text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
              Performance Improvements That Actually Matter
            </h2>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-400">
              We focus on improving conversion quality, tracking accuracy, lead attribution,
              and campaign profitability.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-4">
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <TrendingUp className="mb-5 h-10 w-10 text-cyan-400" />
              <h3 className="mb-2 text-4xl font-black">38%</h3>
              <p className="text-sm leading-relaxed text-gray-400 md:text-base">
                Average reduction in wasted ad spend after tracking optimization.
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <CheckCircle2 className="mb-5 h-10 w-10 text-green-400" />
              <h3 className="mb-2 text-4xl font-black">95%</h3>
              <p className="text-sm leading-relaxed text-gray-400 md:text-base">
                Conversion tracking accuracy across Google Ads and GA4 setups.
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <Zap className="mb-5 h-10 w-10 text-yellow-400" />
              <h3 className="mb-2 text-4xl font-black">2.4x</h3>
              <p className="text-sm leading-relaxed text-gray-400 md:text-base">
                Higher lead quality after campaign restructuring and attribution fixes.
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <Star className="mb-5 h-10 w-10 text-purple-400" />
              <h3 className="mb-2 text-4xl font-black">50+</h3>
              <p className="text-sm leading-relaxed text-gray-400 md:text-base">
                Successful projects across lead generation and eCommerce industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section
        id="pricing"
        className="border-y border-white/5 bg-neutral-900 px-6 py-28 text-white"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-cyan-400">
              Pricing
            </p>

            <h2 className="mb-6 text-4xl font-black leading-tight md:text-6xl">
              Transparent Pricing For Performance Marketing
            </h2>

            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-400">
              Flexible pricing designed for local businesses, lead generation companies,
              and growing brands.
            </p>
          </div>

          <div className="mb-20 grid gap-8 lg:grid-cols-3">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10 backdrop-blur-xl transition duration-300 hover:border-cyan-400/20">
              <p className="mb-4 font-medium text-gray-400">Starter</p>
              <h3 className="mb-4 text-4xl font-black">$600 - $1,200</h3>
              <p className="mb-8 text-gray-400">Best for local businesses starting or needing cleanup.</p>

              <ul className="space-y-3 text-gray-300">
                <li className="flex gap-3"><CheckCircle2 className="h-5 w-5 text-cyan-400" /> Google Ads account audit</li>
                <li className="flex gap-3"><CheckCircle2 className="h-5 w-5 text-cyan-400" /> Campaign cleanup / restructure</li>
                <li className="flex gap-3"><CheckCircle2 className="h-5 w-5 text-cyan-400" /> Conversion tracking review</li>
                <li className="flex gap-3"><CheckCircle2 className="h-5 w-5 text-cyan-400" /> Basic reporting setup</li>
              </ul>
            </div>

            <div className="rounded-[2rem] border border-cyan-400/20 bg-gradient-to-b from-cyan-500/10 to-blue-500/5 p-10 backdrop-blur-xl shadow-2xl shadow-cyan-500/10">
              <div className="mb-4 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300">
                Most Popular
              </div>
              <h3 className="mb-4 text-4xl font-black">$1,500 - $3,000</h3>
              <p className="mb-8 text-gray-300">
                For businesses ready to scale with better tracking and stronger lead flow.
              </p>

              <ul className="space-y-3 text-gray-200">
                <li className="flex gap-3"><CheckCircle2 className="h-5 w-5 text-cyan-400" /> Full Google Ads management</li>
                <li className="flex gap-3"><CheckCircle2 className="h-5 w-5 text-cyan-400" /> GA4 + GTM setup / fixes</li>
                <li className="flex gap-3"><CheckCircle2 className="h-5 w-5 text-cyan-400" /> Landing page CRO recommendations</li>
                <li className="flex gap-3"><CheckCircle2 className="h-5 w-5 text-cyan-400" /> Monthly optimization + reporting</li>
              </ul>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10 backdrop-blur-xl transition duration-300 hover:border-purple-400/20">
              <p className="mb-4 font-medium text-gray-400">Advanced Growth</p>
              <h3 className="mb-4 text-4xl font-black">$3,500+</h3>
              <p className="mb-8 text-gray-400">
                For businesses needing ads, advanced tracking, CRO, and deeper attribution support.
              </p>

              <ul className="space-y-3 text-gray-300">
                <li className="flex gap-3"><CheckCircle2 className="h-5 w-5 text-purple-400" /> Server-side tracking</li>
                <li className="flex gap-3"><CheckCircle2 className="h-5 w-5 text-purple-400" /> Multi-platform attribution</li>
                <li className="flex gap-3"><CheckCircle2 className="h-5 w-5 text-purple-400" /> Landing page strategy / redesign support</li>
                <li className="flex gap-3"><CheckCircle2 className="h-5 w-5 text-purple-400" /> Advanced reporting & scale planning</li>
              </ul>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
              <h3 className="mb-5 text-2xl font-black">Website / Landing Page Packages</h3>
              <p className="mb-8 text-gray-400">
                Conversion-focused pages designed for paid traffic, local lead generation,
                and service businesses.
              </p>

              <div className="space-y-8">
                <div>
                  <div className="mb-3 flex items-center justify-between">
                    <h4 className="text-xl font-bold">Starter Website</h4>
                    <span className="font-bold text-cyan-400">$700 - $1,500</span>
                  </div>

                  <ul className="space-y-2 text-gray-400">
                    <li>3-5 Pages</li>
                    <li>Fast mobile-first layout</li>
                    <li>Lead form integration</li>
                    <li>Basic tracking setup</li>
                  </ul>
                </div>

                <div>
                  <div className="mb-3 flex items-center justify-between">
                    <h4 className="text-xl font-bold">Growth Website</h4>
                    <span className="font-bold text-blue-400">$1,500 - $3,000</span>
                  </div>

                  <ul className="space-y-2 text-gray-400">
                    <li>5-10 Pages</li>
                    <li>SEO structure</li>
                    <li>Tracking setup</li>
                    <li>Responsive layout</li>
                  </ul>
                </div>

                <div>
                  <div className="mb-3 flex items-center justify-between">
                    <h4 className="text-xl font-bold">Advanced Funnel</h4>
                    <span className="font-bold text-purple-400">$2,000 - $5,000+</span>
                  </div>

                  <ul className="space-y-2 text-gray-400">
                    <li>CRO-focused design</li>
                    <li>Custom landing pages</li>
                    <li>Advanced integrations</li>
                    <li>Analytics setup</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
              <h3 className="mb-5 text-2xl font-black">What You Get</h3>
              <p className="mb-8 text-gray-400">
                Every engagement is focused on fixing wasted spend, improving tracking,
                and helping you scale with cleaner data.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                  <LineChart className="mb-4 h-8 w-8 text-cyan-400" />
                  <h4 className="mb-2 font-bold">Performance Clarity</h4>
                  <p className="text-sm text-gray-400">
                    Clear visibility into leads, CPA, conversion quality, and attribution.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                  <ShieldCheck className="mb-4 h-8 w-8 text-purple-400" />
                  <h4 className="mb-2 font-bold">Tracking Accuracy</h4>
                  <p className="text-sm text-gray-400">
                    Better data collection across GA4, GTM, ad platforms, and server-side setups.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                  <Target className="mb-4 h-8 w-8 text-green-400" />
                  <h4 className="mb-2 font-bold">Lead Quality Focus</h4>
                  <p className="text-sm text-gray-400">
                    Campaign strategy designed around qualified leads, not vanity metrics.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                  <MousePointerClick className="mb-4 h-8 w-8 text-yellow-400" />
                  <h4 className="mb-2 font-bold">CRO Support</h4>
                  <p className="text-sm text-gray-400">
                    Recommendations to improve page messaging, form flow, and conversion rates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-neutral-950 px-4 py-20 sm:px-6 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center md:mb-20">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-cyan-400">
              Process
            </p>

            <h2 className="text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
              Simple, Data-Driven Workflow
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4 md:gap-8">
            {workflowSteps.map((step, index) => (
              <div
                key={step.title}
                className="relative min-h-[240px] rounded-[28px] border border-white/10 bg-white/5 p-6 md:rounded-3xl md:p-8"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500/10 text-lg font-black text-cyan-400">
                  {index + 1}
                </div>
                <h3 className="mb-4 text-xl font-bold md:text-2xl">{step.title}</h3>
                <p className="text-sm leading-relaxed text-gray-400 md:text-base">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="bg-neutral-950 px-4 py-28 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-cyan-400">
                Case Studies
              </p>

              <h2 className="max-w-3xl text-4xl font-black leading-tight md:text-5xl">
                Real Performance Improvements From Real Campaigns
              </h2>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-5">
            <div className="rounded-[2rem] border border-cyan-400/10 bg-gradient-to-br from-cyan-500/10 to-blue-500/5 p-8">
              <p className="mb-3 text-sm font-semibold text-cyan-400">Garage Door Repair</p>
              <h3 className="mb-6 text-2xl font-black">Google Ads Optimization</h3>
              <div className="mb-6 flex items-end gap-4">
                <div>
                  <p className="text-sm text-gray-500">Before</p>
                  <h4 className="text-3xl font-black">$89</h4>
                </div>
                <ArrowRight className="text-cyan-400" />
                <div>
                  <p className="text-sm text-gray-500">After</p>
                  <h4 className="text-3xl font-black text-cyan-400">$41</h4>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-gray-400">
                Reduced cost per lead with campaign restructuring and tracking optimization.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <p className="mb-3 text-sm font-semibold text-purple-400">eCommerce Tracking</p>
              <h3 className="mb-6 text-2xl font-black">Server-Side Tracking</h3>
              <div className="mb-6">
                <div className="mb-2 flex justify-between text-sm">
                  <span className="text-gray-400">Tracking Accuracy</span>
                  <span className="text-cyan-400">95%</span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-white/5">
                  <div className="h-full w-[95%] rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
                </div>
              </div>
              <p className="text-sm leading-relaxed text-gray-400">
                Implemented advanced attribution and Meta CAPI infrastructure.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <p className="mb-3 text-sm font-semibold text-green-400">Roofing Company</p>
              <h3 className="mb-6 text-2xl font-black">Lead Generation Scaling</h3>
              <h4 className="mb-3 text-5xl font-black text-green-400">2.7x</h4>
              <p className="mb-5 text-gray-500">Increase In Qualified Leads</p>
              <p className="text-sm leading-relaxed text-gray-400">
                Improved lead quality using better keyword targeting and conversion tracking.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <p className="mb-3 text-sm font-semibold text-yellow-400">HVAC Campaign</p>
              <h3 className="mb-6 text-2xl font-black">Call Tracking Setup</h3>
              <h4 className="mb-3 text-5xl font-black text-yellow-400">43%</h4>
              <p className="mb-5 text-gray-500">Lower Cost Per Call</p>
              <p className="text-sm leading-relaxed text-gray-400">
                Integrated advanced call tracking with Google Ads conversion attribution.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <p className="mb-3 text-sm font-semibold text-blue-400">Local Clinic</p>
              <h3 className="mb-6 text-2xl font-black">Landing Page Optimization</h3>
              <h4 className="mb-3 text-5xl font-black text-blue-400">58%</h4>
              <p className="mb-5 text-gray-500">Higher Conversion Rate</p>
              <p className="text-sm leading-relaxed text-gray-400">
                Redesigned landing pages for better mobile conversion performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        id="testimonials"
        className="border-y border-white/5 bg-black px-6 py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-cyan-400">
              Testimonials
            </p>

            <h2 className="text-5xl font-black">Trusted By Growing Businesses</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {testimonials.map((item) => (
              <div
                key={item.name}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
              >
                <div className="mb-5 flex items-center gap-4">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full font-bold ${item.badge}`}
                  >
                    {item.initials}
                  </div>
                  <div>
                    <h4 className="font-semibold">{item.name}</h4>
                    <p className="text-sm text-gray-500">{item.role}</p>
                  </div>
                </div>
                <p className="text-[15px] leading-relaxed text-gray-300">“{item.quote}”</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        className="scroll-mt-24 border-y border-white/5 bg-black px-4 py-20 sm:px-6 md:py-28"
      >
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-cyan-400">
              FAQ
            </p>
            <h2 className="mb-5 text-3xl font-black sm:text-4xl md:text-5xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-8">
              <h3 className="mb-3 text-xl font-bold">Do you work with local businesses?</h3>
              <p className="text-sm leading-relaxed text-gray-400 md:text-base">
                Yes. We specialize in local lead generation campaigns for service
                businesses including garage door repair, roofing, HVAC, plumbing,
                clinics, and more.
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/5 p-8">
              <h3 className="mb-3 text-xl font-bold">What tracking platforms do you support?</h3>
              <p className="text-sm leading-relaxed text-gray-400 md:text-base">
                Google Ads, GA4, GTM, Meta Pixel, Meta CAPI, TikTok Pixel, Pinterest
                tracking, enhanced conversions, and server-side tracking.
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/5 p-8">
              <h3 className="mb-3 text-xl font-bold">Can you fix broken conversion tracking?</h3>
              <p className="text-sm leading-relaxed text-gray-400 md:text-base">
                Absolutely. We audit and repair inaccurate conversion setups, duplicate
                tracking, attribution issues, and missing conversion signals.
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/5 p-8">
              <h3 className="mb-3 text-xl font-bold">Do you also handle landing pages and CRO?</h3>
              <p className="text-sm leading-relaxed text-gray-400 md:text-base">
                Yes. We review landing page messaging, mobile experience, form flow,
                and conversion bottlenecks to improve lead quality and conversion rate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Lead Form */}
      <section
        id="contact"
        className="relative scroll-mt-24 overflow-hidden bg-neutral-950 px-4 py-20 sm:px-6 md:py-32"
      >
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 p-6 shadow-2xl shadow-blue-500/20 sm:p-10 md:p-16">
          <div className="absolute inset-0 bg-cyan-500/5" />

          <form
            name="audit-request"
            method="POST"
            data-netlify="true"
            action="/thank-you"
            className="relative z-10 text-center"
          >
            <input type="hidden" name="form-name" value="audit-request" />
            <input type="hidden" name="subject" value="New PaidsMedia Audit Request" />
            <input type="hidden" name="source" value="PaidsMedia Website Final Lead Form" />
            <input type="hidden" name="pageUrl" value={trackingFields.pageUrl} />
            <input type="hidden" name="referrer" value={trackingFields.referrer} />
            <input type="hidden" name="utm_source" value={trackingFields.utm_source} />
            <input type="hidden" name="utm_medium" value={trackingFields.utm_medium} />
            <input type="hidden" name="utm_campaign" value={trackingFields.utm_campaign} />
            <input type="hidden" name="utm_term" value={trackingFields.utm_term} />
            <input type="hidden" name="utm_content" value={trackingFields.utm_content} />

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white">
              Free Google Ads & Tracking Audit
            </div>

            <h2 className="mx-auto mb-5 max-w-4xl text-2xl font-black leading-tight sm:text-4xl md:text-6xl">
              Ready To Scale Your Business With Better Ads & Accurate Tracking?
            </h2>

            <p className="mx-auto max-w-3xl text-base leading-8 text-blue-50/90 sm:text-xl">
              Tell us a bit about your business and current marketing setup. We’ll review
              your account, identify wasted spend, tracking issues, and show where growth
              opportunities exist.
            </p>

            <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-2">
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                className="w-full rounded-2xl border border-white/10 bg-white/10 px-6 py-4 text-white outline-none backdrop-blur-xl placeholder:text-blue-100/60 focus:border-cyan-400/40"
              />

              <input
                type="email"
                name="email"
                required
                placeholder="Work Email Address"
                className="w-full rounded-2xl border border-white/10 bg-white/10 px-6 py-4 text-white outline-none backdrop-blur-xl placeholder:text-blue-100/60 focus:border-cyan-400/40"
              />

              <input
                type="text"
                name="website"
                placeholder="Website URL"
                className="w-full rounded-2xl border border-white/10 bg-white/10 px-6 py-4 text-white outline-none backdrop-blur-xl placeholder:text-blue-100/60 focus:border-cyan-400/40"
              />

              <input
                type="text"
                name="businessType"
                placeholder="Business Type / Niche"
                className="w-full rounded-2xl border border-white/10 bg-white/10 px-6 py-4 text-white outline-none backdrop-blur-xl placeholder:text-blue-100/60 focus:border-cyan-400/40"
              />
            </div>

            <div className="mx-auto mt-4 grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-2">
              <select
                name="adSpend"
                defaultValue=""
                className="w-full rounded-2xl border border-white/10 bg-white/10 px-6 py-4 text-white outline-none backdrop-blur-xl focus:border-white/40"
              >
                <option value="" disabled className="text-black">
                  Monthly Ad Spend
                </option>
                <option className="text-black">$500 - $2,000</option>
                <option className="text-black">$2,000 - $10,000</option>
                <option className="text-black">$10,000 - $25,000</option>
                <option className="text-black">$25,000+</option>
              </select>

              <select
                name="serviceNeeded"
                defaultValue=""
                className="w-full rounded-2xl border border-white/10 bg-white/10 px-6 py-4 text-white outline-none backdrop-blur-xl focus:border-white/40"
              >
                <option value="" disabled className="text-black">
                  What do you need help with?
                </option>
                <option className="text-black">Google Ads Management</option>
                <option className="text-black">Tracking / GA4 / GTM Fixes</option>
                <option className="text-black">Server-Side Tracking</option>
                <option className="text-black">Landing Page / CRO</option>
                <option className="text-black">Full Funnel Growth Support</option>
              </select>

              <select
                name="currentPlatform"
                defaultValue=""
                className="w-full rounded-2xl border border-white/10 bg-white/10 px-6 py-4 text-white outline-none backdrop-blur-xl focus:border-white/40"
              >
                <option value="" disabled className="text-black">
                  Current Ad Platform
                </option>
                <option className="text-black">Google Ads</option>
                <option className="text-black">Meta Ads</option>
                <option className="text-black">Google Ads + Meta Ads</option>
                <option className="text-black">Not running ads yet</option>
              </select>

              <input
                type="text"
                name="targetLocation"
                placeholder="Target Country / City"
                className="w-full rounded-2xl border border-white/10 bg-white/10 px-6 py-4 text-white outline-none backdrop-blur-xl placeholder:text-blue-100/60 focus:border-cyan-400/40"
              />
            </div>

            <div className="mx-auto mt-4 grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-2">
              <input
                type="text"
                name="phone"
                placeholder="Phone / WhatsApp (optional)"
                className="w-full rounded-2xl border border-white/10 bg-white/10 px-6 py-4 text-white outline-none backdrop-blur-xl placeholder:text-blue-100/60 focus:border-cyan-400/40"
              />

              <select
                name="preferredContact"
                defaultValue=""
                className="w-full rounded-2xl border border-white/10 bg-white/10 px-6 py-4 text-white outline-none backdrop-blur-xl focus:border-white/40"
              >
                <option value="" disabled className="text-black">
                  Preferred Contact Method
                </option>
                <option className="text-black">Email</option>
                <option className="text-black">WhatsApp</option>
                <option className="text-black">Zoom Call</option>
              </select>
            </div>

            <textarea
              name="message"
              rows="5"
              placeholder="Tell us about your current campaigns, goals, or tracking issues..."
              className="mx-auto mt-4 block w-full max-w-5xl rounded-2xl border border-white/10 bg-white/10 px-6 py-4 text-white outline-none backdrop-blur-xl placeholder:text-blue-100/60 focus:border-cyan-400/40"
            />

            <button
              type="submit"
              className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-black px-10 py-5 text-lg font-bold text-white shadow-2xl shadow-black/30 transition duration-300 hover:scale-105"
            >
              Request Free Audit
              <ArrowRight className="h-5 w-5" />
            </button>

            <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-blue-50/90">
              <div>✔ Google Ads Audit</div>
              <div>✔ Tracking Review</div>
              <div>✔ Landing Page Analysis</div>
              <div>✔ Growth Recommendations</div>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black px-6 py-14">
        <div className="mx-auto grid max-w-7xl gap-10 items-start md:grid-cols-4">
          <div>
            <div className="mb-5 flex items-center gap-4">
              <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-[18px] border border-cyan-400/20 bg-black shadow-[0_0_25px_rgba(34,211,238,0.18)]">
                <div className="absolute inset-[1px] rounded-[17px] bg-black" />
                <div className="relative flex h-5 items-end gap-[2px]">
                  <div className="h-2 w-[3px] rounded-full bg-cyan-400" />
                  <div className="h-4 w-[3px] rounded-full bg-white" />
                  <div className="h-3 w-[3px] rounded-full bg-cyan-400" />
                  <div className="h-5 w-[3px] rounded-full bg-white" />
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-black tracking-[-0.04em] text-white">
                  Paids<span className="text-cyan-400">Media</span>
                </h3>
              </div>
            </div>

            <p className="max-w-sm leading-relaxed text-gray-400">
              Performance marketing systems focused on Google Ads, advanced tracking,
              analytics, and conversion optimization.
            </p>
          </div>

          <div>
            <h4 className="mb-5 text-lg font-semibold">Contact</h4>

            <div className="space-y-4 text-gray-400">
              <a
                href="mailto:sumon@paidsmedia.com"
                className="flex items-center gap-3 transition hover:text-white"
              >
                <Mail className="h-5 w-5 text-cyan-400" />
                sumon@paidsmedia.com
              </a>

              <a
                href="https://wa.me/8801793998115"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition hover:text-white"
              >
                <MessageCircle className="h-5 w-5 text-green-400" />
                WhatsApp Chat
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-lg font-semibold">Quick Links</h4>
            <div className="space-y-3 text-gray-400">
              {navLinks.map((link) => (
                <a key={link.label} href={link.href} className="block transition hover:text-white">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-lg font-semibold">Social Links</h4>
            <div className="space-y-3 text-gray-400">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block transition hover:text-white"
              >
                LinkedIn
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block transition hover:text-white"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block transition hover:text-white"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
