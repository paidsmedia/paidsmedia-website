import React, { useEffect, useState } from "react"
import {
  BarChart3,
  Globe,
  LineChart,
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
      "The lead quality improved a lot after the campaign restructuring. We started getting more actual service calls instead of spam leads.",
    badge: "bg-orange-500/20 text-orange-400",
    card: "bg-white/5 border-white/10",
    text: "text-gray-300",
    roleColor: "text-gray-500",
  },
  {
    initials: "CJ",
    name: "Chris Johnson",
    role: "Home Services • Nevada",
    quote:
      "Tracking setup was done properly for the first time. We can finally trust the conversion data inside Google Ads and GA4.",
    badge: "bg-red-500/20 text-red-400",
    card: "bg-white/5 border-white/10",
    text: "text-gray-300",
    roleColor: "text-gray-500",
  },
  {
    initials: "SH",
    name: "Sarah Hill",
    role: "Dental Clinic • Miami",
    quote:
      "Very responsive and detail-oriented. Our landing page and ad campaigns now perform much better on mobile traffic.",
    badge: "bg-pink-500/20 text-pink-400",
    card: "bg-gradient-to-br from-purple-500/15 to-pink-500/10 border-purple-400/20",
    text: "text-gray-200",
    roleColor: "text-gray-400",
  },
  {
    initials: "MP",
    name: "Michael Parker",
    role: "eCommerce Store • California",
    quote:
      "The server-side tracking implementation helped us recover more accurate purchase data and improved campaign optimization.",
    badge: "bg-teal-500/20 text-teal-400",
    card: "bg-white/5 border-white/10",
    text: "text-gray-300",
    roleColor: "text-gray-500",
  },
  {
    initials: "JM",
    name: "Jason Miller",
    role: "Garage Door Repair • Texas",
    quote:
      "After fixing our tracking and campaigns, our lead quality improved almost immediately.",
    badge: "bg-cyan-500/20 text-cyan-400",
    card: "bg-white/5 border-white/10",
    text: "text-gray-300",
    roleColor: "text-gray-500",
  },
  {
    initials: "AR",
    name: "Amanda Roberts",
    role: "Roofing Business • Florida",
    quote:
      "Very transparent reporting and much better conversion tracking than our previous agency.",
    badge: "bg-blue-500/20 text-blue-400",
    card: "bg-white/5 border-white/10",
    text: "text-gray-300",
    roleColor: "text-gray-500",
  },
  {
    initials: "DK",
    name: "Daniel Kim",
    role: "Shopify Brand Owner",
    quote:
      "Meta CAPI and server-side tracking setup helped us improve attribution accuracy significantly.",
    badge: "bg-green-500/20 text-green-400",
    card: "bg-white/5 border-white/10",
    text: "text-gray-300",
    roleColor: "text-gray-500",
  },
  {
    initials: "TS",
    name: "Tom Sanders",
    role: "HVAC Services • California",
    quote:
      "Campaign optimization was very data-driven and our booked calls increased without raising budget.",
    badge: "bg-yellow-500/20 text-yellow-400",
    card: "bg-white/5 border-white/10",
    text: "text-gray-300",
    roleColor: "text-gray-500",
  },
  {
    initials: "ML",
    name: "Melissa Lopez",
    role: "Medical Clinic • Arizona",
    quote:
      "The landing page redesign improved our mobile conversion rate and lead quality noticeably.",
    badge: "bg-purple-500/20 text-purple-400",
    card: "bg-white/5 border-white/10",
    text: "text-gray-300",
    roleColor: "text-gray-500",
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


    window.open("https://calendly.com/sumonofficials/free-1-1-consultation", "_blank")
  }

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

          <nav className="ml-auto mr-4 hidden items-center gap-6 text-sm text-gray-300 xl:mr-6 xl:gap-8 lg:flex">
            <a href="#home" className="transition hover:text-white">Home</a>
            <a href="#services" className="transition hover:text-white">Services</a>
            <a href="#case-studies" className="transition hover:text-white">Case Studies</a>
            <a href="#pricing" className="transition hover:text-white">Pricing</a>
            <a href="#testimonials" className="transition hover:text-white">Testimonials</a>
            <a href="#faq" className="transition hover:text-white">FAQ</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
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
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10 lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-white/10 bg-black/90 px-4 py-4 backdrop-blur-xl lg:hidden">
            <nav className="flex flex-col gap-2">
              <a href="#home" onClick={() => setMobileMenuOpen(false)} className="rounded-xl px-4 py-3 text-sm text-gray-200 transition hover:bg-white/10">Home</a>
              <a href="#services" onClick={() => setMobileMenuOpen(false)} className="rounded-xl px-4 py-3 text-sm text-gray-200 transition hover:bg-white/10">Services</a>
              <a href="#case-studies" onClick={() => setMobileMenuOpen(false)} className="rounded-xl px-4 py-3 text-sm text-gray-200 transition hover:bg-white/10">Case Studies</a>
              <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="rounded-xl px-4 py-3 text-sm text-gray-200 transition hover:bg-white/10">Pricing</a>
              <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="rounded-xl px-4 py-3 text-sm text-gray-200 transition hover:bg-white/10">Testimonials</a>
              <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="rounded-xl px-4 py-3 text-sm text-gray-200 transition hover:bg-white/10">FAQ</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="rounded-xl px-4 py-3 text-sm text-gray-200 transition hover:bg-white/10">Contact</a>

              <a
                href="https://calendly.com/sumonofficials/free-1-1-consultation"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-black"
              >
                Book Free Call
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="home" className="relative mx-auto max-w-7xl scroll-mt-24 px-4 py-16 sm:px-6 md:py-24">
        <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative z-10 grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300">
              <ShieldCheck className="h-4 w-4 text-cyan-400" />
              Google Ads • GA4 • GTM • Server-Side Tracking
            </div>

            <h1 className="mb-6 text-3xl font-black leading-tight tracking-tight sm:text-5xl md:text-7xl">
              2026 Growth Systems For Google Ads & Advanced Tracking
            </h1>

            <p className="mb-8 max-w-xl text-[15px] leading-relaxed text-gray-400 sm:text-lg md:text-xl">
              We build modern performance marketing systems with Google Ads, GA4, GTM, server-side tracking, landing pages, and conversion optimization designed to scale profitable growth.
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

            <div className="mt-8 grid grid-cols-1 gap-3 sm:max-w-xl sm:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                <h3 className="text-3xl font-bold">500+</h3>
                <p className="mt-1 text-sm text-gray-400">Projects Completed</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                <h3 className="text-3xl font-bold">7+</h3>
                <p className="mt-1 text-sm text-gray-400">Years Experience</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                <h3 className="text-3xl font-bold">250+</h3>
                <p className="mt-1 text-sm text-gray-400">Client Reviews</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-cyan-500/20 blur-3xl" />
            <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl" />

            <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur-2xl sm:p-6">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">Campaign Snapshot</p>
                  <h3 className="text-2xl font-black">Lead Gen Dashboard</h3>
                </div>
                <div className="rounded-2xl bg-cyan-400/10 p-3">
                  <BarChart3 className="h-6 w-6 text-cyan-400" />
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="text-gray-400">Cost Per Lead</span>
                    <span className="font-semibold text-cyan-400">$41</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10">
                    <div className="h-2 w-[72%] rounded-full bg-cyan-400" />
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="text-gray-400">Conversion Rate</span>
                    <span className="font-semibold text-green-400">12.8%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10">
                    <div className="h-2 w-[64%] rounded-full bg-green-400" />
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="text-gray-400">Tracking Accuracy</span>
                    <span className="font-semibold text-purple-400">95%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10">
                    <div className="h-2 w-[95%] rounded-full bg-purple-400" />
                  </div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-sm text-gray-400">Monthly Spend</p>
                  <h4 className="mt-2 text-2xl font-black">$24k</h4>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-sm text-gray-400">Qualified Leads</p>
                  <h4 className="mt-2 text-2xl font-black">182</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="border-y border-white/5 bg-black/30 px-4 py-20 sm:px-6 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-cyan-400">
              Performance Snapshot
            </p>
            <h2 className="mb-6 text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
              Data That Actually Moves Revenue
            </h2>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-400">
              We focus on improving conversion quality, tracking accuracy, lead attribution, and campaign profitability.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-4">
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
              <TrendingUp className="mb-5 h-10 w-10 text-cyan-400" />
              <h3 className="mb-2 text-4xl font-black">38%</h3>
              <p className="text-sm leading-relaxed text-gray-400 md:text-base">
                Average reduction in wasted ad spend after tracking optimization.
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
              <CheckCircle2 className="mb-5 h-10 w-10 text-green-400" />
              <h3 className="mb-2 text-4xl font-black">95%</h3>
              <p className="text-sm leading-relaxed text-gray-400 md:text-base">
                Conversion tracking accuracy across Google Ads and GA4 setups.
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
              <Zap className="mb-5 h-10 w-10 text-yellow-400" />
              <h3 className="mb-2 text-4xl font-black">2.4x</h3>
              <p className="text-sm leading-relaxed text-gray-400 md:text-base">
                Higher lead quality after campaign restructuring and attribution fixes.
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
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
      <section id="pricing" className="scroll-mt-24 border-y border-white/5 bg-neutral-900 px-4 py-20 text-white sm:px-6 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-cyan-400">
              Pricing
            </p>
            <h2 className="mb-5 text-3xl font-black leading-tight sm:text-4xl md:text-6xl">
              Transparent Pricing For Performance Marketing
            </h2>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-400">
              Flexible pricing designed for local businesses, lead generation companies, and growing brands.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3 lg:items-stretch">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur-xl sm:p-10 transition duration-300 hover:border-cyan-400/20">
              <p className="mb-4 font-medium text-gray-400">Starter</p>
              <h3 className="mb-2 text-5xl font-black">$500</h3>
              <p className="mb-8 text-gray-500">Per Month</p>

              <ul className="mb-10 flex-1 space-y-4 text-gray-300">
                <li>Google Ads Setup</li>
                <li>Keyword Research</li>
                <li>Ad Copy Creation</li>
                <li>Basic Optimization</li>
                <li>Monthly Reporting</li>
              </ul>

              <a
                href="https://calendly.com/sumonofficials/free-1-1-consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-2xl border border-white/10 py-4 font-semibold transition duration-300 hover:bg-white hover:text-black"
              >
                Get Started
              </a>
            </div>

            <div className="relative rounded-[2rem] border border-cyan-300/20 bg-gradient-to-b from-cyan-500 to-blue-600 p-7 shadow-2xl sm:p-10 lg:scale-105">
              <div className="absolute right-5 top-5 rounded-full bg-white px-3 py-1 text-xs font-bold text-black">
                Most Popular
              </div>

              <p className="mb-4 font-medium text-cyan-100">Growth</p>
              <h3 className="mb-2 text-5xl font-black">$1200</h3>
              <p className="mb-8 text-cyan-100">Per Month</p>

              <ul className="mb-10 flex-1 space-y-4 text-white">
                <li>Full Campaign Management</li>
                <li>Conversion Optimization</li>
                <li>Landing Page Recommendations</li>
                <li>Call Tracking Setup</li>
                <li>Weekly Optimization</li>
                <li>Priority Support</li>
              </ul>

              <a
                href="https://calendly.com/sumonofficials/free-1-1-consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-2xl bg-black py-4 font-semibold text-white transition duration-300 hover:opacity-90"
              >
                Book Strategy Call
              </a>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur-xl sm:p-10 transition duration-300 hover:border-white/20">
              <p className="mb-4 font-medium text-gray-400">Scale</p>
              <h3 className="mb-2 text-5xl font-black">Custom</h3>
              <p className="mb-8 text-gray-500">Custom Pricing</p>

              <ul className="mb-10 flex-1 space-y-4 text-gray-300">
                <li>Multi-Location Campaigns</li>
                <li>Advanced Optimization</li>
                <li>GA4 Analysis</li>
                <li>Custom Reporting</li>
                <li>CRO Recommendations</li>
                <li>Dedicated Support</li>
              </ul>

              <a
                href="https://calendly.com/sumonofficials/free-1-1-consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-2xl border border-white/10 py-4 font-semibold transition duration-300 hover:bg-white hover:text-black"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="scroll-mt-24 px-4 py-20 sm:px-6 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-cyan-400">
              Services
            </p>
            <h2 className="mb-6 text-4xl font-black md:text-6xl">
              Performance Systems Built To Grow Your Revenue
            </h2>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-400">
              Strategy, execution, tracking, and landing pages built for local lead generation and eCommerce growth.
            </p>
          </div>

          <div className="grid gap-8 xl:grid-cols-3">
            <div className="relative overflow-hidden rounded-[2rem] border border-cyan-400/15 bg-gradient-to-br from-cyan-500/10 via-white/5 to-transparent p-6 backdrop-blur-xl sm:p-8">
              <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-cyan-500/10 blur-3xl" />
              <div className="relative z-10">
                <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-3xl border border-cyan-400/20 bg-cyan-500/10 shadow-lg shadow-cyan-500/10">
                  <Target className="h-10 w-10 text-cyan-400" />
                </div>

                <h3 className="mb-4 text-3xl font-black">Google Ads</h3>
                <p className="mb-8 text-[15px] leading-relaxed text-gray-400">
                  Full-funnel Google Ads management focused on lower CPA, better lead quality, and profitable scaling.
                </p>

                <div className="space-y-4 text-gray-300">
                  <div className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-cyan-400" /> Search & Performance Max</div>
                  <div className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-cyan-400" /> Local Lead Generation Campaigns</div>
                  <div className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-cyan-400" /> Keyword & Ad Copy Strategy</div>
                  <div className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-cyan-400" /> Budget Optimization & Reporting</div>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-blue-400/15 bg-gradient-to-br from-blue-500/10 via-white/5 to-transparent p-6 backdrop-blur-xl sm:p-8">
              <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl" />
              <div className="relative z-10">
                <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-3xl border border-blue-400/20 bg-blue-500/10 shadow-lg shadow-blue-500/10">
                  <LineChart className="h-10 w-10 text-blue-400" />
                </div>

                <h3 className="mb-4 text-3xl font-black">Tracking & Analytics</h3>
                <p className="mb-8 text-[15px] leading-relaxed text-gray-400">
                  Clean attribution, conversion tracking, and reporting systems so every optimization decision is backed by accurate data.
                </p>

                <div className="space-y-4 text-gray-300">
                  <div className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-blue-400" /> GA4 + GTM Setup</div>
                  <div className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-blue-400" /> Enhanced Conversions & Call Tracking</div>
                  <div className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-blue-400" /> Meta CAPI & Server-Side Tracking</div>
                  <div className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-blue-400" /> Cross-Domain / Lead Form Tracking</div>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-purple-400/15 bg-gradient-to-br from-purple-500/10 via-white/5 to-transparent p-6 backdrop-blur-xl sm:p-8">
              <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-purple-500/10 blur-3xl" />
              <div className="relative z-10">
                <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-3xl border border-purple-400/20 bg-purple-500/10 shadow-lg shadow-purple-500/10">
                  <Globe className="h-10 w-10 text-purple-400" />
                </div>

                <h3 className="mb-4 text-3xl font-black">Landing Pages</h3>
                <p className="mb-8 text-[15px] leading-relaxed text-gray-400">
                  Modern high-converting landing pages optimized for mobile users, lead generation, and campaign profitability.
                </p>

                <div className="space-y-4 text-gray-300">
                  <div className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-purple-400" /> Responsive Design</div>
                  <div className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-purple-400" /> Conversion-Focused Layouts</div>
                  <div className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-purple-400" /> Funnel Optimization</div>
                  <div className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-purple-400" /> Mobile Optimization</div>
                  <div className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-purple-400" /> Speed Optimization</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section id="case-studies" className="scroll-mt-24 bg-neutral-950 px-4 py-20 sm:px-6 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-cyan-400">
                Case Studies
              </p>
              <h2 className="max-w-3xl text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
                Real Performance Improvements From Real Campaigns
              </h2>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
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
              <p className="mb-3 text-sm font-semibold text-blue-400">Roofing</p>
              <h3 className="mb-6 text-2xl font-black">Lead Tracking Overhaul</h3>
              <div className="mb-6 flex items-end gap-4">
                <div>
                  <p className="text-sm text-gray-500">Before</p>
                  <h4 className="text-3xl font-black">61%</h4>
                </div>
                <ArrowRight className="text-blue-400" />
                <div>
                  <p className="text-sm text-gray-500">After</p>
                  <h4 className="text-3xl font-black text-blue-400">95%</h4>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-gray-400">
                Fixed broken attribution and improved conversion tracking accuracy across Google Ads and GA4.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <p className="mb-3 text-sm font-semibold text-purple-400">Shopify Brand</p>
              <h3 className="mb-6 text-2xl font-black">Server-Side Tracking</h3>
              <div className="mb-6 flex items-end gap-4">
                <div>
                  <p className="text-sm text-gray-500">Before</p>
                  <h4 className="text-3xl font-black">1.8x</h4>
                </div>
                <ArrowRight className="text-purple-400" />
                <div>
                  <p className="text-sm text-gray-500">After</p>
                  <h4 className="text-3xl font-black text-purple-400">3.1x</h4>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-gray-400">
                Better attribution and more reliable purchase data helped scale campaigns profitably.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <p className="mb-3 text-sm font-semibold text-green-400">HVAC Services</p>
              <h3 className="mb-6 text-2xl font-black">Lead Quality Improvement</h3>
              <div className="mb-6 flex items-end gap-4">
                <div>
                  <p className="text-sm text-gray-500">Before</p>
                  <h4 className="text-3xl font-black">18%</h4>
                </div>
                <ArrowRight className="text-green-400" />
                <div>
                  <p className="text-sm text-gray-500">After</p>
                  <h4 className="text-3xl font-black text-green-400">42%</h4>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-gray-400">
                Improved lead qualification and booked-call rate without increasing ad spend.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="px-4 py-20 sm:px-6 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-cyan-400">
              Process
            </p>
            <h2 className="mb-6 text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
              Simple, Data-Driven Workflow
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4 md:gap-8">
            {workflowSteps.map((step) => (
              <div
                key={step.title}
                className="relative flex min-h-[240px] flex-col rounded-[28px] border border-white/10 bg-white/5 p-6 md:rounded-3xl md:p-8"
              >
                <h3 className="mb-4 text-xl font-bold md:text-2xl">{step.title}</h3>
                <p className="text-sm leading-relaxed text-gray-400 md:text-base">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="scroll-mt-24 border-y border-white/5 bg-black px-4 py-20 sm:px-6 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-cyan-400">
              Testimonials
            </p>
            <h2 className="mb-5 text-3xl font-black sm:text-4xl md:text-5xl">Trusted By Growing Businesses</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {testimonials.map((item) => (
              <div key={item.name} className={`flex h-full flex-col rounded-3xl border p-6 backdrop-blur-xl sm:p-8 ${item.card}`}>
                <div className="mb-5 flex items-center gap-4">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-full font-bold ${item.badge}`}>
                    {item.initials}
                  </div>
                  <div>
                    <h4 className="font-semibold">{item.name}</h4>
                    <p className={`text-sm ${item.roleColor}`}>{item.role}</p>
                  </div>
                </div>
                <p className={`text-[15px] leading-relaxed ${item.text}`}>“{item.quote}”</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-24 border-y border-white/5 bg-black px-4 py-20 sm:px-6 md:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-cyan-400">
              FAQ
            </p>
            <h2 className="mb-5 text-3xl font-black sm:text-4xl md:text-5xl">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-8">
              <h3 className="mb-3 text-xl font-bold">Do you work with local businesses?</h3>
              <p className="text-sm leading-relaxed text-gray-400 md:text-base">
                Yes. We specialize in local lead generation campaigns for service businesses including garage door repair, roofing, HVAC, plumbing, clinics, and more.
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/5 p-8">
              <h3 className="mb-3 text-xl font-bold">What tracking platforms do you support?</h3>
              <p className="text-sm leading-relaxed text-gray-400 md:text-base">
                Google Ads, GA4, GTM, Meta Pixel, Meta CAPI, TikTok Pixel, Pinterest tracking, enhanced conversions, and server-side tracking.
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/5 p-8">
              <h3 className="mb-3 text-xl font-bold">Can you fix broken conversion tracking?</h3>
              <p className="text-sm leading-relaxed text-gray-400 md:text-base">
                Absolutely. We audit and repair inaccurate conversion setups, duplicate tracking, attribution issues, and missing conversion signals.
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/5 p-8">
              <h3 className="mb-3 text-xl font-bold">Do you also handle landing pages and CRO?</h3>
              <p className="text-sm leading-relaxed text-gray-400 md:text-base">
                Yes. We review landing page messaging, mobile experience, form flow, and conversion bottlenecks to improve lead quality and conversion rate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="relative scroll-mt-24 overflow-hidden bg-neutral-950 px-4 py-20 sm:px-6 md:py-32">
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
              Tell us a bit about your business and current marketing setup. We’ll review your account,
              identify wasted spend, tracking issues, and show where growth opportunities exist.
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
                <option value="" disabled className="text-black">Monthly Ad Spend</option>
                <option className="text-black">Not spending yet</option>
                <option className="text-black">Under $1,000</option>
                <option className="text-black">$1,000 - $3,000</option>
                <option className="text-black">$3,000 - $10,000</option>
                <option className="text-black">$10,000 - $30,000</option>
                <option className="text-black">$30,000+</option>
              </select>

              <select
                name="serviceNeeded"
                defaultValue=""
                className="w-full rounded-2xl border border-white/10 bg-white/10 px-6 py-4 text-white outline-none backdrop-blur-xl focus:border-white/40"
              >
                <option value="" disabled className="text-black">What Service Do You Need?</option>
                <option className="text-black">Google Ads Management</option>
                <option className="text-black">Tracking & Analytics Setup</option>
                <option className="text-black">Landing Page Audit</option>
                <option className="text-black">Google Ads + Tracking Audit</option>
                <option className="text-black">Full Funnel Growth Support</option>
              </select>

              <select
                name="currentPlatform"
                defaultValue=""
                className="w-full rounded-2xl border border-white/10 bg-white/10 px-6 py-4 text-white outline-none backdrop-blur-xl focus:border-white/40"
              >
                <option value="" disabled className="text-black">Current Ad Platform</option>
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
                <option value="" disabled className="text-black">Preferred Contact Method</option>
                <option className="text-black">Email</option>
                <option className="text-black">WhatsApp</option>
                <option className="text-black">Phone Call</option>
              </select>
            </div>

            <div className="mx-auto mt-4 max-w-5xl">
              <textarea
                name="biggestProblem"
                rows="5"
                placeholder="What’s your biggest problem right now? e.g. no leads, bad tracking, high CPA, low ROAS..."
                className="w-full rounded-2xl border border-white/10 bg-white/10 px-6 py-5 text-white outline-none backdrop-blur-xl placeholder:text-blue-100/60 focus:border-cyan-400/40"
              ></textarea>
            </div>

            <div className="mx-auto mt-5 max-w-5xl text-left">
              <label className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-blue-50/90">
                <input
                  type="checkbox"
                  name="consent"
                  required
                  className="mt-1 h-4 w-4 rounded border-white/20 bg-transparent accent-cyan-400"
                />
                <span>
                  I agree to be contacted by PaidsMedia about my audit request and understand that my information
                  will be used only to respond to this inquiry.
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-black px-10 py-5 text-lg font-bold text-white shadow-2xl shadow-black/30 transition duration-300 hover:scale-105"
            >
              Request Free Audit
              <ArrowRight className="h-5 w-5" />
            </button>

            <p className="mt-4 text-sm text-blue-50/80">
              We usually reply within 24 hours with audit findings and next-step recommendations.
            </p>

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
      <footer className="border-t border-white/10 bg-black px-4 py-12 sm:px-6">
        <div className="mx-auto grid max-w-7xl items-start gap-10 md:grid-cols-3 md:gap-12">
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
              Performance marketing systems focused on Google Ads, advanced tracking, analytics, and conversion optimization.
            </p>
          </div>

          <div>
            <h4 className="mb-5 text-lg font-semibold">Contact</h4>
            <div className="space-y-4 text-gray-300">
              <a href="mailto:hello@paidsmedia.com" className="flex items-center gap-3 hover:text-white">
                <Mail className="h-5 w-5 text-cyan-400" />
                hello@paidsmedia.com
              </a>
              <a
                href="https://wa.me/8801714435551"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-white"
              >
                <MessageCircle className="h-5 w-5 text-green-400" />
                WhatsApp Chat
              </a>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h4 className="mb-5 text-lg font-semibold">Google Partner</h4>
              <a
                href="https://www.google.com/partners/agency?id=5480497280"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-2xl border border-white/10 bg-white p-3 transition duration-300 hover:scale-105"
              >
                <img
                  src="https://www.gstatic.com/partners/badge/images/2026/PartnerBadgeClickable.svg"
                  alt="Google Partner Badge"
                  className="h-16 w-auto"
                />
              </a>
            </div>

            <div>
              <h4 className="mb-5 text-lg font-semibold">Social Links</h4>
              <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                <a href="https://www.linkedin.com/company/paidsmedia/" target="_blank" rel="noopener noreferrer" className="transition hover:text-white">LinkedIn</a>
                <a href="https://web.facebook.com/paidsmedia" target="_blank" rel="noopener noreferrer" className="transition hover:text-white">Facebook</a>
                <a href="https://www.instagram.com/paidsmedia/" target="_blank" rel="noopener noreferrer" className="transition hover:text-white">Instagram</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
