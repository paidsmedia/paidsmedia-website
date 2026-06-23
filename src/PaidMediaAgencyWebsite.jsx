import React, { useState } from 'react'
import {
  Menu,
  X,
  ArrowRight,
  CheckCircle2,
  BarChart3,
  Search,
  MousePointerClick,
  ShieldCheck,
  LayoutDashboard,
  LineChart,
  BadgeDollarSign,
  Globe,
  PhoneCall,
  Mail,
  MapPin,
  ChevronDown,
  ChevronUp,
} from 'lucide-react'

export default function PaidMediaAgencyWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)

  const services = [
    {
      icon: <Search className="h-6 w-6 text-cyan-400" />,
      title: 'Google Ads',
      desc: 'Search, Performance Max, branded and non-branded campaigns built to generate qualified leads and profitable growth.',
      bullets: ['Search campaign setup', 'Campaign restructuring', 'Lead quality improvement', 'Wasted spend reduction'],
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-cyan-400" />,
      title: 'Tracking & Analytics',
      desc: 'GA4, GTM, conversion tracking, enhanced conversions and attribution fixes so you can trust your numbers.',
      bullets: ['GA4 setup', 'Google Tag Manager', 'Lead form & call tracking', 'Conversion accuracy fixes'],
    },
    {
      icon: <LayoutDashboard className="h-6 w-6 text-cyan-400" />,
      title: 'Landing Pages',
      desc: 'High-converting landing pages focused on clarity, speed, trust and lead generation performance.',
      bullets: ['Landing page audits', 'Conversion-focused layouts', 'CTA optimization', 'Mobile UX improvements'],
    },
  ]

  const caseStudies = [
    { title: 'Google Ads Optimization', stat: '40% ↓ CPA', desc: 'Reduced wasted spend and improved conversion efficiency with account cleanup and intent-based campaign restructuring.' },
    { title: 'Server-Side Tracking', stat: '97% tracking accuracy', desc: 'Implemented GA4 + GTM fixes and improved attribution visibility across forms and lead events.' },
    { title: 'Lead Generation Scaling', stat: '2.7x leads', desc: 'Built focused campaigns and better landing page alignment to increase lead volume without sacrificing quality.' },
    { title: 'Call Tracking Setup', stat: '43% more tracked calls', desc: 'Fixed missed phone conversions and improved visibility into which campaigns were driving actual calls.' },
    { title: 'Landing Page Optimization', stat: '58% lift', desc: 'Improved messaging, CTA structure and mobile usability to increase conversion rates from paid traffic.' },
    { title: 'Google Ads Audit', stat: '31% budget recovery', desc: 'Found wasted spend, poor keyword targeting and tracking gaps that were limiting account performance.' },
    { title: 'GA4 + GTM Setup', stat: '120+ events mapped', desc: 'Configured accurate event tracking and cleaner reporting for form submissions, calls and key micro-conversions.' },
    { title: 'Paid Funnel Tracking', stat: 'Full funnel visibility', desc: 'Connected ad traffic, landing pages and lead tracking into a single reporting framework for better decisions.' },
  ]

  const metrics = [
    { value: '38%', label: 'Average CPL reduction after account cleanup and conversion tracking fixes.' },
    { value: '95%', label: 'Tracking visibility across lead forms, phone calls and core conversion actions.' },
    { value: '2.4x', label: 'Lead growth achieved in selected accounts after structure and landing page improvements.' },
    { value: '50+', label: 'Campaign audits, tracking setups and optimization projects across service businesses.' },
  ]

  const pricing = [
    {
      title: 'Audit',
      price: '$500',
      badge: '',
      items: [
        'Google Ads account review',
        'GA4 + GTM tracking review',
        'Landing page conversion review',
        'Budget waste analysis',
        'Action plan with priorities',
      ],
      cta: 'Request Audit',
    },
    {
      title: 'Monthly',
      price: '$1200',
      badge: 'Most Popular',
      items: [
        'Campaign optimization & management',
        'Tracking oversight',
        'Weekly performance review',
        'Landing page recommendations',
        'Monthly reporting & insights',
      ],
      cta: 'Book Strategy Call',
    },
    {
      title: 'Custom',
      price: 'Custom',
      badge: '',
      items: [
        'Tracking + ads + landing page scope',
        'Multi-location or advanced setups',
        'GA4 / GTM / lead tracking projects',
        'Server-side tracking support',
        'Custom growth roadmap',
      ],
      cta: 'Get Custom Quote',
    },
  ]

  const addOnsLeft = [
    { name: 'Basic Tracking', price: '$150 one-time' },
    { name: 'Enhanced Tracking', price: '$300 one-time' },
    { name: 'Call Tracking Setup', price: '$250 one-time' },
    { name: 'Server-Side Tracking', price: '$600+ one-time' },
  ]

  const addOnsRight = [
    { name: 'One Page Landing Page', price: '$500 one-time' },
    { name: 'Landing Page Refresh', price: '$300 one-time' },
    { name: 'Conversion Audit', price: '$250 one-time' },
    { name: 'Advanced Funnel Review', price: '$400 one-time' },
  ]

  const workflow = [
    {
      title: 'Audit',
      desc: 'Review campaigns, tracking, landing pages and conversion flow to identify leaks and wasted spend.',
    },
    {
      title: 'Strategy',
      desc: 'Build a practical action plan focused on lead quality, tracking clarity and profitable growth.',
    },
    {
      title: 'Implementation',
      desc: 'Fix campaigns, tracking issues and conversion blockers with a clean execution roadmap.',
    },
    {
      title: 'Scaling',
      desc: 'Refine based on data, improve efficiency and grow volume once the account foundation is stable.',
    },
  ]

  const testimonials = [
    { name: 'Home Services Client', text: 'The audit helped us see where the wasted spend was happening and what tracking was missing. Clear, practical and useful.', color: 'from-amber-500/20 to-orange-500/5' },
    { name: 'Local Business Owner', text: 'We finally got clarity on which campaigns were generating real leads. The tracking cleanup alone made a huge difference.', color: 'from-rose-500/20 to-pink-500/5' },
    { name: 'Lead Gen Client', text: 'Landing page feedback and Google Ads restructuring improved lead quality fast. Much more strategic than a typical PPC freelancer.', color: 'from-fuchsia-500/20 to-purple-500/5' },
    { name: 'Service Brand', text: 'Very strong understanding of Google Ads, GTM and conversion tracking. The recommendations were specific and immediately actionable.', color: 'from-emerald-500/20 to-green-500/5' },
    { name: 'Growth Team', text: 'We needed a second set of eyes on our account and tracking. The audit uncovered issues our internal team had missed.', color: 'from-cyan-500/20 to-sky-500/5' },
    { name: 'Consulting Client', text: 'Professional communication, smart recommendations and a much cleaner approach to campaign structure and measurement.', color: 'from-blue-500/20 to-indigo-500/5' },
    { name: 'SMB Client', text: 'The reporting and conversion tracking guidance made it easier to understand what was working and what needed fixing.', color: 'from-lime-500/20 to-green-500/5' },
    { name: 'B2B Service Business', text: 'Good strategic input on lead generation, budget allocation and landing page performance. Very helpful overall.', color: 'from-yellow-500/20 to-amber-500/5' },
    { name: 'Agency Partner', text: 'Strong technical understanding of tracking and attribution. Helpful support on both Google Ads and analytics side.', color: 'from-violet-500/20 to-purple-500/5' },
  ]

  const faqs = [
    {
      q: 'Do you work with both lead generation and service businesses?',
      a: 'Yes. I primarily help service businesses and lead generation focused brands improve Google Ads performance, tracking accuracy, and landing page conversion rates.',
    },
    {
      q: 'What’s included in the audit?',
      a: 'The audit can cover Google Ads account structure, keyword targeting, wasted spend, GA4/GTM tracking setup, landing page issues, and conversion bottlenecks. You’ll get a clear action plan with priorities.',
    },
    {
      q: 'Can you help if I already have campaigns running?',
      a: 'Absolutely. In many cases the biggest wins come from fixing existing campaign structure, search terms, tracking gaps, and landing page issues rather than starting from scratch.',
    },
  ]

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? -1 : index)
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,#0f2a44_0%,#07111f_35%,#000000_100%)] text-white">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 shadow-lg shadow-cyan-500/20" />
            <div>
              <div className="text-lg font-black tracking-tight">PaidMedia</div>
              <div className="text-[11px] uppercase tracking-[0.24em] text-white/45">
                Google Ads & Tracking
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-sm text-white/75 lg:flex">
            <a href="#services" className="transition hover:text-cyan-300">Services</a>
            <a href="#results" className="transition hover:text-cyan-300">Results</a>
            <a href="#pricing" className="transition hover:text-cyan-300">Pricing</a>
            <a href="#process" className="transition hover:text-cyan-300">Process</a>
            <a href="#faq" className="transition hover:text-cyan-300">FAQ</a>
            <a href="#contact" className="rounded-full bg-cyan-400 px-5 py-2.5 font-semibold text-slate-950 transition hover:bg-cyan-300">
              Get Free Audit
            </a>
          </nav>

          <button
            className="inline-flex rounded-xl border border-white/10 p-2.5 text-white lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-white/10 bg-[#07111f]/95 lg:hidden">
            <div className="mx-auto flex max-w-7xl flex-col px-4 py-4 md:px-6">
              <a href="#services" onClick={() => setMobileMenuOpen(false)} className="border-b border-white/10 py-3 text-white/80">Services</a>
              <a href="#results" onClick={() => setMobileMenuOpen(false)} className="border-b border-white/10 py-3 text-white/80">Results</a>
              <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="border-b border-white/10 py-3 text-white/80">Pricing</a>
              <a href="#process" onClick={() => setMobileMenuOpen(false)} className="border-b border-white/10 py-3 text-white/80">Process</a>
              <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="border-b border-white/10 py-3 text-white/80">FAQ</a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 inline-flex items-center justify-center rounded-full bg-cyan-400 px-5 py-3 font-semibold text-slate-950"
              >
                Get Free Audit
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(34,211,238,0.14),transparent_35%),radial-gradient(circle_at_85%_20%,rgba(59,130,246,0.16),transparent_30%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 md:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
              <CheckCircle2 className="h-4 w-4" />
              Google Ads + Tracking + Landing Page Optimization
            </div>

            <h1 className="max-w-4xl text-4xl font-black leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-6xl">
              2026 Growth Systems For Google Ads & Advanced Tracking
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
              I help service businesses and lead generation brands improve Google Ads performance,
              fix conversion tracking, and tighten landing page conversion paths so ad spend turns
              into better leads and clearer revenue visibility.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Book Free Audit <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="#results"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
              >
                View Results
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-white/10 pt-8 text-left">
              <div>
                <div className="text-2xl font-black text-white">50+</div>
                <div className="mt-1 text-sm text-white/60">Audits, tracking setups and optimization projects</div>
              </div>
              <div>
                <div className="text-2xl font-black text-white">7+</div>
                <div className="mt-1 text-sm text-white/60">Years in Google Ads, tracking and performance marketing</div>
              </div>
              <div>
                <div className="text-2xl font-black text-white">24h</div>
                <div className="mt-1 text-sm text-white/60">Typical audit response window after submission</div>
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-full rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/30 backdrop-blur">
              <div className="space-y-4">
                <div className="rounded-3xl border border-white/10 bg-black/30 p-5">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="rounded-2xl bg-cyan-400/10 p-3">
                      <Search className="h-5 w-5 text-cyan-300" />
                    </div>
                    <div>
                      <div className="font-bold">Google Ads Management</div>
                      <div className="text-sm text-white/55">Search, Performance Max, account cleanup, lead quality improvements</div>
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-black/30 p-5">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="rounded-2xl bg-cyan-400/10 p-3">
                      <ShieldCheck className="h-5 w-5 text-cyan-300" />
                    </div>
                    <div>
                      <div className="font-bold">Advanced Tracking</div>
                      <div className="text-sm text-white/55">GA4, GTM, enhanced conversions, form and call attribution</div>
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-black/30 p-5">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="rounded-2xl bg-cyan-400/10 p-3">
                      <MousePointerClick className="h-5 w-5 text-cyan-300" />
                    </div>
                    <div>
                      <div className="font-bold">Landing Pages</div>
                      <div className="text-sm text-white/55">Conversion-focused pages built to improve lead flow and campaign efficiency</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4 text-sm sm:grid-cols-4">
                {[
                  'Google Ads',
                  'Conversion Tracking',
                  'GTM Setup',
                  'GA4 Audit',
                  'Landing Pages',
                  'Call Tracking',
                  'Lead Gen',
                  'Technical Fixes',
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-black/30 px-3 py-3 text-center text-white/80">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
            Services
          </div>
          <h2 className="text-3xl font-black leading-tight text-white md:text-5xl">
            Built To Scale <span className="text-cyan-400">Leads, Revenue</span> & Tracking Accuracy
          </h2>
          <p className="mt-5 text-base leading-8 text-white/68 md:text-lg">
            Practical support for Google Ads, analytics and landing page performance without the fluff.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-[28px] border border-white/10 bg-white/[0.04] p-7 shadow-xl shadow-black/20 backdrop-blur"
            >
              <div className="mb-5 inline-flex rounded-2xl bg-cyan-400/10 p-3">
                {service.icon}
              </div>
              <h3 className="text-2xl font-black">{service.title}</h3>
              <p className="mt-3 text-white/68 leading-8">{service.desc}</p>
              <ul className="mt-6 space-y-3">
                {service.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3 text-white/78">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Results */}
      <section id="results" className="bg-black/30 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
              Results
            </div>
            <h2 className="text-3xl font-black leading-tight md:text-5xl">
              Real Performance Improvements From Real Campaigns
            </h2>
            <p className="mt-5 text-base leading-8 text-white/68 md:text-lg">
              A snapshot of the kinds of improvements I focus on across Google Ads, tracking and lead generation performance.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {caseStudies.map((item) => (
              <div
                key={item.title}
                className="rounded-[24px] border border-white/10 bg-white/[0.04] p-6 shadow-lg shadow-black/20"
              >
                <div className="text-sm uppercase tracking-[0.22em] text-cyan-300">{item.title}</div>
                <div className="mt-3 text-3xl font-black text-white">{item.stat}</div>
                <p className="mt-4 text-sm leading-7 text-white/68">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
            Metrics
          </div>
          <h2 className="text-3xl font-black leading-tight md:text-5xl">
            Built Around Real Performance Metrics
          </h2>
          <p className="mt-5 text-base leading-8 text-white/68 md:text-lg">
            The goal is simple: lower wasted spend, better lead quality, cleaner tracking and clearer decision-making.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {metrics.map((item) => (
            <div key={item.value} className="rounded-[24px] border border-white/10 bg-white/[0.04] p-6">
              <div className="text-4xl font-black text-cyan-300">{item.value}</div>
              <p className="mt-4 text-sm leading-7 text-white/68">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-black/30 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
              Pricing
            </div>
            <h2 className="text-3xl font-black leading-tight md:text-5xl">
              Transparent Pricing For Performance Marketing
            </h2>
            <p className="mt-5 text-base leading-8 text-white/68 md:text-lg">
              Choose a one-time audit, monthly optimization support, or a custom setup based on your current growth stage.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {pricing.map((plan, idx) => (
              <div
                key={plan.title}
                className={`rounded-[28px] border p-7 shadow-xl ${
                  idx === 1
                    ? 'border-cyan-400/30 bg-gradient-to-b from-cyan-500/15 to-blue-500/10'
                    : 'border-white/10 bg-white/[0.04]'
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-2xl font-black">{plan.title}</h3>
                  {plan.badge && (
                    <span className="rounded-full bg-cyan-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-slate-950">
                      {plan.badge}
                    </span>
                  )}
                </div>

                <div className="mt-5 text-4xl font-black">{plan.price}</div>

                <ul className="mt-6 space-y-3">
                  {plan.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-white/80">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-5 py-3.5 font-semibold transition ${
                    idx === 1
                      ? 'bg-cyan-400 text-slate-950 hover:bg-cyan-300'
                      : 'border border-white/15 bg-white/5 text-white hover:bg-white/10'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-7">
              <div className="mb-5 flex items-center gap-3">
                <LineChart className="h-6 w-6 text-cyan-400" />
                <h3 className="text-2xl font-black">Analytics & Attribution</h3>
              </div>
              <div className="space-y-4">
                {addOnsLeft.map((item) => (
                  <div key={item.name} className="flex items-center justify-between gap-4 rounded-2xl border border-white/8 bg-black/20 px-4 py-4">
                    <span className="font-medium text-white/85">{item.name}</span>
                    <span className="text-cyan-300">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-7">
              <div className="mb-5 flex items-center gap-3">
                <Globe className="h-6 w-6 text-cyan-400" />
                <h3 className="text-2xl font-black">Landing Pages & Funnel</h3>
              </div>
              <div className="space-y-4">
                {addOnsRight.map((item) => (
                  <div key={item.name} className="flex items-center justify-between gap-4 rounded-2xl border border-white/8 bg-black/20 px-4 py-4">
                    <span className="font-medium text-white/85">{item.name}</span>
                    <span className="text-cyan-300">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
            Process
          </div>
          <h2 className="text-3xl font-black leading-tight md:text-5xl">
            Simple, Data-Driven Workflow
          </h2>
          <p className="mt-5 text-base leading-8 text-white/68 md:text-lg">
            A straightforward process focused on diagnosis, fixes and growth rather than busywork.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {workflow.map((item) => (
            <div key={item.title} className="rounded-[24px] border border-white/10 bg-white/[0.04] p-6">
              <div className="text-xl font-black text-white">{item.title}</div>
              <p className="mt-4 text-sm leading-7 text-white/68">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-black/30 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
              Reviews
            </div>
            <h2 className="text-3xl font-black leading-tight md:text-5xl">
              Trusted By Growing Businesses
            </h2>
            <p className="mt-5 text-base leading-8 text-white/68 md:text-lg">
              Examples of the kind of feedback I aim to earn through clear strategy, better tracking and stronger campaign execution.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {testimonials.map((item) => (
              <div
                key={item.name}
                className={`rounded-[24px] border border-white/10 bg-gradient-to-br ${item.color} p-6`}
              >
                <div className="text-sm font-semibold uppercase tracking-[0.22em] text-white/70">
                  {item.name}
                </div>
                <p className="mt-4 text-sm leading-7 text-white/82">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-5xl px-4 py-16 md:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
            FAQ
          </div>
          <h2 className="text-3xl font-black leading-tight md:text-5xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((item, index) => (
            <div key={item.q} className="overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.04]">
              <button
                onClick={() => toggleFaq(index)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="text-lg font-semibold text-white">{item.q}</span>
                {openFaq === index ? (
                  <ChevronUp className="h-5 w-5 shrink-0 text-cyan-300" />
                ) : (
                  <ChevronDown className="h-5 w-5 shrink-0 text-cyan-300" />
                )}
              </button>
              {openFaq === index && (
                <div className="border-t border-white/10 px-6 pb-6 pt-4 text-white/72 leading-8">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact / Lead Form */}
      <section id="contact" className="mx-auto max-w-7xl px-4 pb-16 md:px-6 lg:px-8 lg:pb-24">
        <div className="rounded-[36px] bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 px-6 py-10 shadow-2xl shadow-cyan-500/10 md:px-10 md:py-14 lg:px-16">
          <div className="mx-auto max-w-5xl text-center">
            <div className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white/90">
              Free Google Ads & Tracking Audit
            </div>

            <h2 className="text-3xl font-black leading-tight text-white md:text-5xl lg:text-6xl">
              Ready To Scale Your Business With Better Ads & Accurate Tracking?
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/90 md:text-xl">
              Get a complete performance audit covering Google Ads, GA4, GTM, conversion
              tracking, landing pages, and wasted ad spend opportunities.
            </p>

            <form
              name="audit-request"
              method="POST"
              data-netlify="true"
              action="/thank-you.html"
              className="mx-auto mt-10 max-w-4xl"
            >
              <input type="hidden" name="form-name" value="audit-request" />

              <div className="grid gap-4 md:grid-cols-2">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="h-16 rounded-2xl border border-white/20 bg-white/10 px-5 text-white placeholder:text-white/60 outline-none transition focus:border-white/40 focus:bg-white/15"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Business Email Address"
                  required
                  className="h-16 rounded-2xl border border-white/20 bg-white/10 px-5 text-white placeholder:text-white/60 outline-none transition focus:border-white/40 focus:bg-white/15"
                />

                <input
                  type="url"
                  name="website"
                  placeholder="Website URL"
                  className="h-16 rounded-2xl border border-white/20 bg-white/10 px-5 text-white placeholder:text-white/60 outline-none transition focus:border-white/40 focus:bg-white/15"
                />

                <select
                  name="monthly_ad_spend"
                  required
                  defaultValue=""
                  className="h-16 rounded-2xl border border-white/20 bg-white/10 px-5 text-white outline-none transition focus:border-white/40 focus:bg-white/15"
                >
                  <option value="" disabled className="text-slate-900">
                    Monthly Ad Spend
                  </option>
                  <option value="Under $1k" className="text-slate-900">Under $1k</option>
                  <option value="$1k-$3k" className="text-slate-900">$1k - $3k</option>
                  <option value="$3k-$10k" className="text-slate-900">$3k - $10k</option>
                  <option value="$10k-$30k" className="text-slate-900">$10k - $30k</option>
                  <option value="$30k+" className="text-slate-900">$30k+</option>
                </select>
              </div>

              <textarea
                name="message"
                rows="5"
                placeholder="Tell me a bit about your current Google Ads or tracking challenges..."
                className="mt-4 w-full rounded-2xl border border-white/20 bg-white/10 px-5 py-4 text-white placeholder:text-white/60 outline-none transition focus:border-white/40 focus:bg-white/15"
              />

              <button
                type="submit"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-black px-10 py-5 text-lg font-bold text-white shadow-xl transition hover:translate-y-[-1px] hover:bg-[#081018]"
              >
                Request Free Audit <ArrowRight className="ml-3 h-5 w-5" />
              </button>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-white/90">
                <span>✓ Google Ads Audit</span>
                <span>✓ Tracking Review</span>
                <span>✓ Landing Page Analysis</span>
                <span>✓ Growth Recommendations</span>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/40">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
          <div>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600" />
              <div>
                <div className="text-lg font-black">PaidMedia</div>
                <div className="text-[11px] uppercase tracking-[0.24em] text-white/45">
                  Google Ads & Tracking
                </div>
              </div>
            </div>

            <p className="mt-5 max-w-md text-sm leading-7 text-white/62">
              Helping businesses improve Google Ads performance, tracking accuracy and landing page conversion with practical strategy and technical execution.
            </p>

            <div className="mt-6 flex flex-wrap gap-4 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-cyan-300" />
                hello@paidsmedia.com
              </div>
              <div className="flex items-center gap-2">
                <PhoneCall className="h-4 w-4 text-cyan-300" />
                Strategy & audit support
              </div>
            </div>
          </div>

          <div>
            <div className="text-sm font-black uppercase tracking-[0.24em] text-white/50">Sections</div>
            <div className="mt-5 space-y-3 text-sm text-white/70">
              <a href="#services" className="block transition hover:text-cyan-300">Services</a>
              <a href="#results" className="block transition hover:text-cyan-300">Results</a>
              <a href="#pricing" className="block transition hover:text-cyan-300">Pricing</a>
              <a href="#process" className="block transition hover:text-cyan-300">Process</a>
              <a href="#faq" className="block transition hover:text-cyan-300">FAQ</a>
            </div>
          </div>

          <div>
            <div className="text-sm font-black uppercase tracking-[0.24em] text-white/50">Contact</div>
            <div className="mt-5 space-y-3 text-sm text-white/70">
              <div className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 text-cyan-300" />
                <span>hello@paidsmedia.com</span>
              </div>
              <div className="flex items-start gap-2">
                <Globe className="mt-0.5 h-4 w-4 text-cyan-300" />
                <span>paidsmedia.com</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-cyan-300" />
                <span>Remote support for service businesses and lead gen brands</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-sm text-white/45 md:flex-row md:items-center md:justify-between md:px-6 lg:px-8">
            <div>© {new Date().getFullYear()} PaidMedia. All rights reserved.</div>
            <div>Google Ads • Tracking • Landing Pages</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
