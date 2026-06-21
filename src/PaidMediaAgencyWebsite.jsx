import { BarChart3, Globe, LineChart, MousePointerClick, ShieldCheck, Target, TrendingUp, CheckCircle2, Star, Zap, ArrowRight, Mail, MessageCircle } from "lucide-react"

export default function PaidMediaAgencyWebsite() {
  const handleAuditSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)
    const name = formData.get('name')
    const email = formData.get('email')
    const website = formData.get('website')
    const spend = formData.get('spend')

    if (!name || !email || !website || !spend) {
      alert('Please fill out all fields before continuing.')
      return
    }

    window.open('https://calendly.com/sumonofficials/free-1-1-consultation', '_blank')
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden selection:bg-cyan-400 selection:text-black">
      {/* Navigation */}
      <header className="border-b border-white/10 backdrop-blur-2xl sticky top-0 z-50 bg-black/40 bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex items-center justify-between gap-3 xl:gap-4">
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="relative w-14 h-14 rounded-[20px] bg-black border border-cyan-400/20 flex items-center justify-center overflow-hidden shadow-[0_0_40px_rgba(34,211,238,0.18)] transition duration-500 group-hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-blue-500/10 to-transparent"></div>
              <div className="absolute inset-[1px] rounded-[19px] bg-black"></div>

              <div className="relative flex items-end gap-[3px] h-7">
                <div className="w-[4px] h-3 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.9)]"></div>
                <div className="w-[4px] h-5 rounded-full bg-white"></div>
                <div className="w-[4px] h-4 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.9)]"></div>
                <div className="w-[4px] h-6 rounded-full bg-white"></div>
              </div>

              <div className="absolute -top-10 -right-10 w-20 h-20 bg-cyan-400/20 blur-2xl"></div>
            </div>

            <div>
              <h2 className="font-black text-[30px] tracking-[-0.04em] leading-none text-white">
                Paids<span className="text-cyan-400">Media</span>
              </h2>

              <div className="flex items-center gap-2 mt-1">
                <div className="w-10 h-[1px] bg-cyan-400/60"></div>
                <p className="text-[10px] uppercase tracking-[0.35em] text-gray-500 font-medium">
                  Performance Marketing Agency
                </p>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-6 xl:gap-8 ml-auto mr-4 xl:mr-6 text-sm text-gray-300">
            <a href="#" className="hover:text-white transition">Home</a>
            <a href="#services" className="hover:text-white transition">Services</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
            <a href="#case-studies" className="hover:text-white transition">Case Studies</a>
            <a href="#testimonials" className="hover:text-white transition">Testimonials</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>

          <a
            href="https://calendly.com/sumonofficials/free-1-1-consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center justify-center bg-cyan-400 hover:bg-cyan-300 text-black px-5 xl:px-6 py-3 rounded-2xl font-semibold transition duration-300 whitespace-nowrap shadow-lg shadow-cyan-500/20 shrink-0"
          >
            Book Free Call
          </a>

          
        </div>
        </header>

      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 py-20 md:py-28 max-w-7xl mx-auto">
        <div className="absolute top-20 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>

        <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-gray-300 mb-6">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              Google Ads • GA4 • GTM • Server-Side Tracking
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-tight mb-8 tracking-tight">
              2026 Growth Systems For Google Ads & Advanced Tracking
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed mb-10 max-w-xl">
              We build modern performance marketing systems with Google Ads, GA4, GTM, server-side tracking, landing pages, and conversion optimization designed to scale profitable growth.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-5">
              <a
                href="https://calendly.com/sumonofficials/free-1-1-consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition duration-300 shadow-2xl inline-flex items-center justify-center"
              >
                Book Free Audit
              </a>

              <a
                href="#services"
                className="border border-white/15 bg-white/5 backdrop-blur-sm px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 transition duration-300 inline-flex items-center justify-center"
              >
                View Services
              </a>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-center gap-6 mt-12 mb-10">
              <div className="flex -space-x-4 flex-wrap">
                <div className="w-14 h-14 rounded-full border-2 border-black bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-sm font-bold shadow-lg shadow-cyan-500/20">SA</div>
                <div className="w-14 h-14 rounded-full border-2 border-black bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-sm font-bold shadow-lg shadow-purple-500/20">MK</div>
                <div className="w-14 h-14 rounded-full border-2 border-black bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-sm font-bold shadow-lg shadow-green-500/20">JR</div>
                <div className="w-14 h-14 rounded-full border-2 border-black bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-sm font-bold shadow-lg shadow-orange-500/20">AL</div>
                <div className="w-14 h-14 rounded-full border-2 border-black bg-gradient-to-br from-yellow-400 to-amber-600 flex items-center justify-center text-sm font-bold shadow-lg shadow-yellow-500/20">DT</div>
                <div className="w-14 h-14 rounded-full border-2 border-black bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center text-sm font-bold shadow-lg shadow-blue-500/20">RM</div>
                <div className="w-14 h-14 rounded-full border-2 border-black bg-gradient-to-br from-pink-400 to-rose-600 flex items-center justify-center text-sm font-bold shadow-lg shadow-pink-500/20">SK</div>
                <div className="w-14 h-14 rounded-full border-2 border-black bg-gradient-to-br from-teal-400 to-cyan-600 flex items-center justify-center text-sm font-bold shadow-lg shadow-cyan-500/20">JW</div>
                <div className="w-14 h-14 rounded-full border-2 border-black bg-gradient-to-br from-lime-400 to-green-600 flex items-center justify-center text-sm font-bold shadow-lg shadow-green-500/20">NP</div>
                <div className="w-14 h-14 rounded-full border-2 border-black bg-gradient-to-br from-fuchsia-500 to-purple-700 flex items-center justify-center text-sm font-bold shadow-lg shadow-purple-500/20">CM</div>
              </div>

              <div className="max-w-md">
                <h4 className="font-semibold text-lg mb-2">10+ Performance Specialists</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  A dedicated team of Google Ads strategists, tracking engineers, CRO specialists, designers, and analytics experts focused on scalable business growth.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 sm:gap-6 mt-14 border-t border-white/10 pt-8">
              <div>
                <h3 className="text-3xl font-bold">500+</h3>
                <p className="text-gray-500 text-sm mt-1">Projects Completed</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">7+</h3>
                <p className="text-gray-500 text-sm mt-1">Years Experience</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">250+</h3>
                <p className="text-gray-500 text-sm mt-1">Client Reviews</p>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-gradient-to-b from-white/10 to-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl backdrop-blur-xl">
              <div className="space-y-6">
                <div className="bg-black/40 rounded-3xl p-6 border border-white/10 hover:border-cyan-400/30 transition">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center">
                      <Target className="text-cyan-400 w-7 h-7" />
                    </div>

                    <div>
                      <h3 className="font-bold text-xl">Google Ads Management</h3>
                      <p className="text-gray-400 text-sm">Lead Generation & Scaling</p>
                    </div>
                  </div>

                  <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                    Search campaigns, keyword optimization, local lead generation, and profitable scaling strategies.
                  </p>
                </div>

                <div className="bg-black/40 rounded-3xl p-6 border border-white/10 hover:border-blue-400/30 transition">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center">
                      <LineChart className="text-blue-400 w-7 h-7" />
                    </div>

                    <div>
                      <h3 className="font-bold text-xl">Advanced Tracking Setup</h3>
                      <p className="text-gray-400 text-sm">GA4, GTM & Attribution</p>
                    </div>
                  </div>

                  <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                    Accurate conversion tracking with GA4, GTM, enhanced conversions, Meta CAPI, and server-side tracking.
                  </p>
                </div>

                <div className="bg-black/40 rounded-3xl p-6 border border-white/10 hover:border-purple-400/30 transition">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center">
                      <MousePointerClick className="text-purple-400 w-7 h-7" />
                    </div>

                    <div>
                      <h3 className="font-bold text-xl">Landing Pages</h3>
                      <p className="text-gray-400 text-sm">High-Converting Design</p>
                    </div>
                  </div>

                  <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                    Mobile-optimized landing pages designed to convert paid traffic into qualified leads.
                  </p>
                </div>
              </div>
            </div>
          </div>
          </div>
      </section>

      {/* Client Logos */}
      <section className="relative py-16 border-y border-white/5 bg-gradient-to-b from-neutral-950 to-black overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-5">
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
              <p className="text-gray-400 uppercase tracking-[0.25em] text-[11px] font-medium">
                Trusted Platforms & Tools
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-5">
            <div className="group relative rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 hover:border-cyan-400/30 transition duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative flex flex-col items-center text-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 font-black text-lg">
                  G
                </div>
                <div>
                  <h3 className="font-semibold text-white">Google Ads</h3>
                  <p className="text-xs text-gray-500 mt-1">Paid Advertising</p>
                </div>
              </div>
            </div>

            <div className="group relative rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 hover:border-blue-400/30 transition duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative flex flex-col items-center text-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-400/20 flex items-center justify-center text-blue-400 font-black text-lg">
                  GA4
                </div>
                <div>
                  <h3 className="font-semibold text-white">Google Analytics</h3>
                  <p className="text-xs text-gray-500 mt-1">Performance Insights</p>
                </div>
              </div>
            </div>

            <div className="group relative rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 hover:border-cyan-400/30 transition duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative flex flex-col items-center text-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 font-black text-lg">
                  GTM
                </div>
                <div>
                  <h3 className="font-semibold text-white">Tag Manager</h3>
                  <p className="text-xs text-gray-500 mt-1">Tracking Control</p>
                </div>
              </div>
            </div>

            <div className="group relative rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 hover:border-blue-400/30 transition duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative flex flex-col items-center text-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-400/20 flex items-center justify-center text-blue-400 font-black text-sm">
                  CAPI
                </div>
                <div>
                  <h3 className="font-semibold text-white">Meta CAPI</h3>
                  <p className="text-xs text-gray-500 mt-1">Advanced Attribution</p>
                </div>
              </div>
            </div>

            <div className="group relative rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 hover:border-cyan-400/30 transition duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative flex flex-col items-center text-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 font-black text-xs">
                  SS
                </div>
                <div>
                  <h3 className="font-semibold text-white">Server Side</h3>
                  <p className="text-xs text-gray-500 mt-1">Data Accuracy</p>
                </div>
              </div>
            </div>

            <div className="group relative rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 hover:border-green-400/30 transition duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative flex flex-col items-center text-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-green-500/10 border border-green-400/20 flex items-center justify-center text-green-400 font-black text-sm">
                  S
                </div>
                <div>
                  <h3 className="font-semibold text-white">Shopify</h3>
                  <p className="text-xs text-gray-500 mt-1">eCommerce Growth</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="relative py-28 md:py-36 px-4 sm:px-6 bg-gradient-to-b from-[#050505] via-black to-[#070b14] overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full"></div>

        <div className="relative max-w-7xl mx-auto z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 backdrop-blur-xl mb-6">
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
              <p className="text-cyan-300 uppercase tracking-[0.25em] text-[11px] font-semibold">
                Services
              </p>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight max-w-4xl mx-auto">
              Built To Scale <span className="text-cyan-400">Leads, Revenue</span> & Tracking Accuracy
            </h2>

            <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
              High-performance Google Ads systems, advanced analytics infrastructure, and conversion-focused landing pages designed for local businesses and growing brands.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="group relative rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-10 overflow-hidden hover:-translate-y-2 transition duration-500 hover:border-cyan-400/30 shadow-[0_0_40px_rgba(34,211,238,0.05)]">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

              <div className="relative z-10">
                <div className="w-20 h-20 rounded-3xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center mb-8 shadow-lg shadow-cyan-500/10">
                  <Target className="w-10 h-10 text-cyan-400" />
                </div>

                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-3xl font-black">Google Ads</h3>
                  
                </div>

                <p className="text-gray-400 leading-relaxed mb-8 text-[15px]">
                  Strategic Google Ads campaign management focused on lead generation, lower CPA, and scalable growth.
                </p>

                <div className="space-y-4 text-gray-300">
                  <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-cyan-400" /> Search Campaigns</div>
                  <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-cyan-400" /> Local Lead Generation</div>
                  <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-cyan-400" /> Keyword Strategy</div>
                  <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-cyan-400" /> Conversion Optimization</div>
                  <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-cyan-400" /> Reporting & Scaling</div>
                </div>
              </div>
            </div>

            <div className="group relative rounded-[2rem] border border-blue-400/20 bg-gradient-to-b from-blue-600 to-cyan-500 p-10 overflow-hidden hover:-translate-y-2 transition duration-500 shadow-[0_0_50px_rgba(59,130,246,0.25)]">
              <div className="absolute top-5 right-5 bg-black/20 backdrop-blur-xl border border-white/10 text-xs font-bold px-3 py-1 rounded-full text-white">
                Most Popular
              </div>

              <div className="relative z-10">
                <div className="w-20 h-20 rounded-3xl bg-black/10 border border-white/10 flex items-center justify-center mb-8">
                  <LineChart className="w-10 h-10 text-white" />
                </div>

                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-3xl font-black text-white">Tracking & Analytics</h3>
                  
                </div>

                <p className="text-blue-50 leading-relaxed mb-8 text-[15px]">
                  Accurate conversion tracking systems with GA4, GTM, Meta CAPI, enhanced conversions, and attribution modeling.
                </p>

                <div className="space-y-4 text-white">
                  <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5" /> GA4 & GTM Setup</div>
                  <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5" /> Server-Side Tracking</div>
                  <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5" /> Meta Pixel & CAPI</div>
                  <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5" /> Call Tracking</div>
                  <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5" /> Attribution & Analytics</div>
                </div>
              </div>
            </div>

            <div className="group relative rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-10 overflow-hidden hover:-translate-y-2 transition duration-500 hover:border-purple-400/30 shadow-[0_0_40px_rgba(168,85,247,0.05)]">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

              <div className="relative z-10">
                <div className="w-20 h-20 rounded-3xl bg-purple-500/10 border border-purple-400/20 flex items-center justify-center mb-8 shadow-lg shadow-purple-500/10">
                  <Globe className="w-10 h-10 text-purple-400" />
                </div>

                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-3xl font-black">Landing Pages</h3>
                  
                </div>

                <p className="text-gray-400 leading-relaxed mb-8 text-[15px]">
                  Modern high-converting landing pages optimized for mobile users, lead generation, and campaign profitability.
                </p>

                <div className="space-y-4 text-gray-300">
                  <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-purple-400" /> Responsive Design</div>
                  <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-purple-400" /> Conversion-Focused Layouts</div>
                  <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-purple-400" /> Funnel Optimization</div>
                  <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-purple-400" /> Mobile Optimization</div>
                  <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-purple-400" /> Speed Optimization</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      /* Case Studies */}
      <section id="case-studies" className="py-28 px-4 sm:px-6 bg-neutral-950">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 mb-20">
            <div>
              <p className="text-cyan-400 uppercase tracking-wider text-sm font-semibold mb-3">
                Case Studies
              </p>

              <h2 className="text-4xl md:text-5xl font-black leading-tight max-w-3xl">
                Real Performance Improvements From Real Campaigns
              </h2>
            </div>

            
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/5 border border-cyan-400/10 rounded-[2rem] p-8">
              <p className="text-cyan-400 text-sm font-semibold mb-3">Garage Door Repair</p>
              <h3 className="text-2xl font-black mb-6">Google Ads Optimization</h3>
              <div className="flex items-end gap-4 mb-6">
                <div>
                  <p className="text-gray-500 text-sm">Before</p>
                  <h4 className="text-3xl font-black">$89</h4>
                </div>
                <ArrowRight className="text-cyan-400" />
                <div>
                  <p className="text-gray-500 text-sm">After</p>
                  <h4 className="text-3xl font-black text-cyan-400">$41</h4>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">Reduced cost per lead with campaign restructuring and tracking optimization.</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 backdrop-blur-xl">
              <p className="text-purple-400 text-sm font-semibold mb-3">eCommerce Tracking</p>
              <h3 className="text-2xl font-black mb-6">Server-Side Tracking</h3>
              <div className="mb-6">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">Tracking Accuracy</span>
                  <span className="text-cyan-400">95%</span>
                </div>
                <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                  <div className="w-[95%] h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">Implemented advanced attribution and Meta CAPI infrastructure.</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 backdrop-blur-xl">
              <p className="text-green-400 text-sm font-semibold mb-3">Roofing Company</p>
              <h3 className="text-2xl font-black mb-6">Lead Generation Scaling</h3>
              <h4 className="text-5xl font-black text-green-400 mb-3">2.7x</h4>
              <p className="text-gray-500 mb-5">Increase In Qualified Leads</p>
              <p className="text-gray-400 text-sm leading-relaxed">Improved lead quality using better keyword targeting and conversion tracking.</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 backdrop-blur-xl">
              <p className="text-yellow-400 text-sm font-semibold mb-3">HVAC Campaign</p>
              <h3 className="text-2xl font-black mb-6">Call Tracking Setup</h3>
              <h4 className="text-5xl font-black text-yellow-400 mb-3">43%</h4>
              <p className="text-gray-500 mb-5">Lower Cost Per Call</p>
              <p className="text-gray-400 text-sm leading-relaxed">Integrated advanced call tracking with Google Ads conversion attribution.</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 backdrop-blur-xl">
              <p className="text-blue-400 text-sm font-semibold mb-3">Local Clinic</p>
              <h3 className="text-2xl font-black mb-6">Landing Page Optimization</h3>
              <h4 className="text-5xl font-black text-blue-400 mb-3">58%</h4>
              <p className="text-gray-500 mb-5">Higher Conversion Rate</p>
              <p className="text-gray-400 text-sm leading-relaxed">Redesigned landing pages for better mobile conversion performance.</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 backdrop-blur-xl">
              <p className="text-pink-400 text-sm font-semibold mb-3">Legal Services</p>
              <h3 className="text-2xl font-black mb-6">Google Ads Audit</h3>
              <h4 className="text-5xl font-black text-pink-400 mb-3">31%</h4>
              <p className="text-gray-500 mb-5">Reduced Wasted Spend</p>
              <p className="text-gray-400 text-sm leading-relaxed">Removed irrelevant keywords and optimized bidding strategies.</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 backdrop-blur-xl">
              <p className="text-orange-400 text-sm font-semibold mb-3">Plumbing Business</p>
              <h3 className="text-2xl font-black mb-6">Local SEO + Ads</h3>
              <h4 className="text-5xl font-black text-orange-400 mb-3">120+</h4>
              <p className="text-gray-500 mb-5">Monthly Leads Generated</p>
              <p className="text-gray-400 text-sm leading-relaxed">Combined local search campaigns with conversion-focused landing pages.</p>
            </div>

            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-400/10 rounded-[2rem] p-8">
              <p className="text-cyan-400 text-sm font-semibold mb-3">Multi-Location Brand</p>
              <h3 className="text-2xl font-black mb-6">Full Funnel Tracking</h3>
              <h4 className="text-5xl font-black text-cyan-400 mb-3">97%</h4>
              <p className="text-gray-500 mb-5">Attribution Accuracy</p>
              <p className="text-gray-400 text-sm leading-relaxed">Built advanced GA4, GTM, and server-side analytics infrastructure.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 px-6 bg-black border-t border-white/5 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-cyan-400 uppercase tracking-wider text-sm font-semibold mb-3">
              Results
            </p>

            <h2 className="text-5xl font-black mb-6">
              Built Around Real Performance Metrics
            </h2>

            <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
              We focus on improving conversion quality, tracking accuracy, lead attribution, and campaign profitability.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-[28px] p-8 backdrop-blur-xl">
              <TrendingUp className="w-10 h-10 text-cyan-400 mb-5" />
              <h3 className="text-4xl font-black mb-2">38%</h3>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                Average reduction in wasted ad spend after tracking optimization.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-[28px] p-8 backdrop-blur-xl">
              <CheckCircle2 className="w-10 h-10 text-green-400 mb-5" />
              <h3 className="text-4xl font-black mb-2">95%</h3>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                Conversion tracking accuracy across Google Ads and GA4 setups.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-[28px] p-8 backdrop-blur-xl">
              <Zap className="w-10 h-10 text-yellow-400 mb-5" />
              <h3 className="text-4xl font-black mb-2">2.4x</h3>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                Higher lead quality after campaign restructuring and attribution fixes.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-[28px] p-8 backdrop-blur-xl">
              <Star className="w-10 h-10 text-purple-400 mb-5" />
              <h3 className="text-4xl font-black mb-2">50+</h3>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                Successful projects across lead generation and eCommerce industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-28 px-6 bg-neutral-900 text-white border-t border-white/5 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-cyan-400 font-semibold uppercase tracking-wider text-sm mb-3">
              Pricing
            </p>

            <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              Transparent Pricing For Performance Marketing
            </h2>

            <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
              Flexible pricing designed for local businesses, lead generation companies, and growing brands.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            <div className="bg-white/5 border border-white/10 rounded-[2rem] p-10 backdrop-blur-xl hover:border-cyan-400/20 transition duration-300">
              <p className="text-gray-400 mb-4 font-medium">Starter</p>

              <h3 className="text-5xl font-black mb-2">$500</h3>
              <p className="text-gray-500 mb-8">Per Month</p>

              <ul className="space-y-4 text-gray-300 mb-10">
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
                className="w-full border border-white/10 py-4 rounded-2xl font-semibold hover:bg-white hover:text-black transition duration-300 inline-flex items-center justify-center"
              >
                Get Started
              </a>
            </div>

            <div className="relative bg-gradient-to-b from-cyan-500 to-blue-600 rounded-[2rem] p-10 shadow-2xl scale-100 lg:scale-105 border border-cyan-300/20">
              <div className="absolute top-5 right-5 bg-white text-black text-xs font-bold px-3 py-1 rounded-full">
                Most Popular
              </div>

              <p className="text-cyan-100 mb-4 font-medium">Growth</p>

              <h3 className="text-5xl font-black mb-2">$1200</h3>
              <p className="text-cyan-100 mb-8">Per Month</p>

              <ul className="space-y-4 text-white mb-10">
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
                  className="w-full bg-black text-white py-4 rounded-2xl font-semibold hover:opacity-90 transition duration-300 inline-flex items-center justify-center"
                >
                  Book Strategy Call
                </a>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-[2rem] p-10 backdrop-blur-xl hover:border-white/20 transition duration-300">
              <p className="text-gray-400 mb-4 font-medium">Scale</p>

              <h3 className="text-5xl font-black mb-2">Custom</h3>
              <p className="text-gray-500 mb-8">Custom Pricing</p>

              <ul className="space-y-4 text-gray-300 mb-10">
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
                className="w-full border border-white/10 py-4 rounded-2xl font-semibold hover:bg-white hover:text-black transition duration-300 inline-flex items-center justify-center"
              >
                Contact Us
              </a>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            <div className="bg-white/5 border border-white/10 rounded-[2rem] p-10 backdrop-blur-xl">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-cyan-400 text-sm font-semibold mb-2">Tracking Setup</p>
                  <h3 className="text-3xl font-black">Analytics & Attribution</h3>
                </div>

                <LineChart className="w-12 h-12 text-cyan-400" />
              </div>

              <div className="space-y-8">
                <div className="border-b border-white/10 pb-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xl font-bold">Basic Tracking</h4>
                    <span className="text-cyan-400 font-bold">$150-$300</span>
                  </div>

                  <ul className="space-y-2 text-gray-400">
                    <li>GA4 Setup</li>
                    <li>Google Tag Manager</li>
                    <li>Basic Conversion Tracking</li>
                  </ul>
                </div>

                <div className="border-b border-white/10 pb-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xl font-bold">Advanced Tracking</h4>
                    <span className="text-cyan-400 font-bold">$400-$800</span>
                  </div>

                  <ul className="space-y-2 text-gray-400">
                    <li>Enhanced Conversions</li>
                    <li>Call Tracking</li>
                    <li>Cross-Domain Tracking</li>
                    <li>Meta Pixel & TikTok Pixel</li>
                  </ul>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xl font-bold">Server-Side Tracking</h4>
                    <span className="text-cyan-400 font-bold">$800-$2,000+</span>
                  </div>

                  <ul className="space-y-2 text-gray-400">
                    <li>GTM Server Container</li>
                    <li>Meta CAPI</li>
                    <li>Advanced Attribution</li>
                    <li>Deduplication Setup</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-[2rem] p-10 backdrop-blur-xl">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-purple-400 text-sm font-semibold mb-2">Website Design</p>
                  <h3 className="text-3xl font-black">Landing Pages & Funnels</h3>
                </div>

                <Globe className="w-12 h-12 text-purple-400" />
              </div>

              <div className="space-y-8">
                <div className="border-b border-white/10 pb-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xl font-bold">One-Page Landing Page</h4>
                    <span className="text-purple-400 font-bold">$250-$500</span>
                  </div>

                  <ul className="space-y-2 text-gray-400">
                    <li>Responsive Design</li>
                    <li>Lead Forms</li>
                    <li>Click-To-Call Buttons</li>
                    <li>Speed Optimization</li>
                  </ul>
                </div>

                <div className="border-b border-white/10 pb-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xl font-bold">Business Website</h4>
                    <span className="text-purple-400 font-bold">$700-$1,500</span>
                  </div>

                  <ul className="space-y-2 text-gray-400">
                    <li>5-10 Pages</li>
                    <li>SEO Structure</li>
                    <li>Tracking Setup</li>
                    <li>Responsive Layout</li>
                  </ul>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xl font-bold">Advanced Funnel</h4>
                    <span className="text-purple-400 font-bold">$2,000-$5,000+</span>
                  </div>

                  <ul className="space-y-2 text-gray-400">
                    <li>CRO-Focused Design</li>
                    <li>Custom Landing Pages</li>
                    <li>Advanced Integrations</li>
                    <li>Analytics Setup</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-28 px-4 sm:px-6 bg-neutral-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14 md:mb-20">
            <p className="text-cyan-400 uppercase tracking-wider text-sm font-semibold mb-3">
              Process
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 leading-tight">
              Simple, Data-Driven Workflow
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
            <div className="relative bg-white/5 border border-white/10 rounded-[28px] md:rounded-3xl p-6 md:p-8 min-h-[240px]">
              
              <h3 className="text-xl md:text-2xl font-bold mb-4">Audit</h3>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                Complete review of campaigns, tracking setup, attribution, and landing pages.
              </p>
            </div>

            <div className="relative bg-white/5 border border-white/10 rounded-[28px] md:rounded-3xl p-6 md:p-8 min-h-[240px]">
              
              <h3 className="text-xl md:text-2xl font-bold mb-4">Strategy</h3>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                Build a custom growth strategy focused on lead quality and profitability.
              </p>
            </div>

            <div className="relative bg-white/5 border border-white/10 rounded-[28px] md:rounded-3xl p-6 md:p-8 min-h-[240px]">
              
              <h3 className="text-xl md:text-2xl font-bold mb-4">Implementation</h3>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                Launch optimized campaigns with advanced conversion tracking and analytics.
              </p>
            </div>

            <div className="relative bg-white/5 border border-white/10 rounded-[28px] md:rounded-3xl p-6 md:p-8 min-h-[240px]">
              
              <h3 className="text-xl md:text-2xl font-bold mb-4">Scaling</h3>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                Improve performance continuously using data-driven optimization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-28 px-6 bg-black border-t border-white/5 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-cyan-400 uppercase tracking-wider text-sm font-semibold mb-3">
              Testimonials
            </p>

            <h2 className="text-5xl font-black mb-6">
              Trusted By Growing Businesses
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center font-bold text-orange-400">
                  BW
                </div>
                <div>
                  <h4 className="font-semibold">Brian Wilson</h4>
                  <p className="text-sm text-gray-500">Plumbing Company • Chicago</p>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed text-[15px]">
                “The lead quality improved a lot after the campaign restructuring. We started getting more actual service calls instead of spam leads.”
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center font-bold text-red-400">
                  CJ
                </div>
                <div>
                  <h4 className="font-semibold">Chris Johnson</h4>
                  <p className="text-sm text-gray-500">Home Services • Nevada</p>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed text-[15px]">
                “Tracking setup was done properly for the first time. We can finally trust the conversion data inside Google Ads and GA4.”
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-500/15 to-pink-500/10 border border-purple-400/20 rounded-3xl p-8 backdrop-blur-xl">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center font-bold text-pink-400">
                  SH
                </div>
                <div>
                  <h4 className="font-semibold">Sarah Hill</h4>
                  <p className="text-sm text-gray-400">Dental Clinic • Miami</p>
                </div>
              </div>

              <p className="text-gray-200 leading-relaxed text-[15px]">
                “Very responsive and detail-oriented. Our landing page and ad campaigns now perform much better on mobile traffic.”
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-full bg-teal-500/20 flex items-center justify-center font-bold text-teal-400">
                  MP
                </div>
                <div>
                  <h4 className="font-semibold">Michael Parker</h4>
                  <p className="text-sm text-gray-500">eCommerce Store • California</p>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed text-[15px]">
                “The server-side tracking implementation helped us recover more accurate purchase data and improved campaign optimization.”
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center font-bold text-cyan-400">JM</div>
                <div>
                  <h4 className="font-semibold">Jason Miller</h4>
                  <p className="text-sm text-gray-500">Garage Door Repair • Texas</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed text-[15px]">“After fixing our tracking and campaigns, our lead quality improved almost immediately.”</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center font-bold text-blue-400">AR</div>
                <div>
                  <h4 className="font-semibold">Amanda Roberts</h4>
                  <p className="text-sm text-gray-500">Roofing Business • Florida</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed text-[15px]">“Very transparent reporting and much better conversion tracking than our previous agency.”</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center font-bold text-green-400">DK</div>
                <div>
                  <h4 className="font-semibold">Daniel Kim</h4>
                  <p className="text-sm text-gray-500">Shopify Brand Owner</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed text-[15px]">“Meta CAPI and server-side tracking setup helped us improve attribution accuracy significantly.”</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center font-bold text-yellow-400">TS</div>
                <div>
                  <h4 className="font-semibold">Tom Sanders</h4>
                  <p className="text-sm text-gray-500">HVAC Services • California</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed text-[15px]">“Campaign optimization was very data-driven and our booked calls increased without raising budget.”</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center font-bold text-purple-400">ML</div>
                <div>
                  <h4 className="font-semibold">Melissa Lopez</h4>
                  <p className="text-sm text-gray-500">Medical Clinic • Arizona</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed text-[15px]">“The landing page redesign improved our mobile conversion rate and lead quality noticeably.”</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-28 px-6 bg-black border-t border-white/5 border-b border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-cyan-400 uppercase tracking-wider text-sm font-semibold mb-3">
              FAQ
            </p>

            <h2 className="text-5xl font-black mb-6">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 rounded-[28px] p-8">
              <h3 className="text-xl font-bold mb-3">Do you work with local businesses?</h3>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                Yes. We specialize in local lead generation campaigns for service businesses including garage door repair, roofing, HVAC, plumbing, clinics, and more.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-[28px] p-8">
              <h3 className="text-xl font-bold mb-3">What tracking platforms do you support?</h3>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                Google Ads, GA4, GTM, Meta Pixel, Meta CAPI, TikTok Pixel, Pinterest tracking, enhanced conversions, and server-side tracking.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-[28px] p-8">
              <h3 className="text-xl font-bold mb-3">Can you fix broken conversion tracking?</h3>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                Absolutely. We audit and repair inaccurate conversion setups, duplicate tracking, attribution issues, and missing conversion signals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="relative py-24 md:py-32 px-4 sm:px-6 bg-neutral-950 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-5xl mx-auto rounded-[2rem] border border-cyan-300/20 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 p-8 sm:p-10 md:p-16 shadow-2xl shadow-blue-500/20 overflow-hidden">
          <div className="absolute inset-0 bg-cyan-500/5"></div>

          <form onSubmit={handleAuditSubmit} className="relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 text-white text-sm mb-6">
              Free Google Ads & Tracking Audit
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black mb-6 leading-tight max-w-4xl mx-auto">
              Ready To Scale Your Business With Better Ads & Accurate Tracking?
            </h2>

            <p className="text-base sm:text-lg text-blue-50 max-w-2xl mx-auto mb-10 leading-relaxed">
              Get a complete performance audit covering Google Ads, GA4, GTM, conversion tracking, landing pages, and wasted ad spend opportunities.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-5">
              <input
                name="name"
                required
                type="text"
                placeholder="Your Name"
                className="w-full rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl px-6 py-4 text-white placeholder:text-blue-100/60 outline-none focus:border-cyan-400/40"
              />

              <input
                name="email"
                required
                type="email"
                placeholder="Business Email Address"
                className="w-full rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl px-6 py-4 text-white placeholder:text-blue-100/60 outline-none focus:border-cyan-400/40"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              <input
                name="website"
                required
                type="text"
                placeholder="Website URL"
                className="w-full rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl px-6 py-4 text-white placeholder:text-blue-100/60 outline-none focus:border-cyan-400/40"
              />

              <select
                name="spend"
                required
                className="w-full rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl px-6 py-4 text-white outline-none focus:border-white/40">
                <option value="">Monthly Ad Spend</option>
                <option>$500 - $2,000</option>
                <option>$2,000 - $10,000</option>
                <option>$10,000+</option>
              </select>
            </div>

            <button
              type="submit"
              className="mt-8 bg-black text-white px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition duration-300 shadow-2xl shadow-black/30 inline-flex items-center gap-3"
            >
              Request Free Audit
              <ArrowRight className="w-5 h-5" />
            </button>

            <div className="flex flex-wrap justify-center gap-6 mt-10 text-sm text-blue-50/90">
              <div>✔ Google Ads Audit</div>
              <div>✔ Tracking Review</div>
              <div>✔ Landing Page Analysis</div>
              <div>✔ Growth Recommendations</div>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-14 px-6 bg-black">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 items-start">
          <div>
            <div className="flex items-center gap-4 mb-5">
              <div className="relative w-12 h-12 rounded-[18px] bg-black border border-cyan-400/20 flex items-center justify-center overflow-hidden shadow-[0_0_25px_rgba(34,211,238,0.18)]">
                <div className="absolute inset-[1px] rounded-[17px] bg-black"></div>

                <div className="relative flex items-end gap-[2px] h-5">
                  <div className="w-[3px] h-2 rounded-full bg-cyan-400"></div>
                  <div className="w-[3px] h-4 rounded-full bg-white"></div>
                  <div className="w-[3px] h-3 rounded-full bg-cyan-400"></div>
                  <div className="w-[3px] h-5 rounded-full bg-white"></div>
                </div>
              </div>

              <div>
                <h3 className="font-black text-2xl tracking-[-0.04em] text-white">Paids<span className="text-cyan-400">Media</span></h3>
              </div>

              </div>

            <p className="text-gray-400 leading-relaxed max-w-sm">
              Performance marketing systems focused on Google Ads, advanced tracking, analytics, and conversion optimization.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-5">Contact</h4>

            <div className="space-y-4 text-gray-400">
              <a
                href="mailto:sumon@paidsmedia.com"
                className="flex items-center gap-3 hover:text-white transition"
              >
                <Mail className="w-5 h-5 text-cyan-400" />
                sumon@paidsmedia.com
              </a>

              <a
                href="https://wa.me/8801793998115"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-white transition"
              >
                <MessageCircle className="w-5 h-5 text-green-400" />
                WhatsApp Chat
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-5">Google Partner</h4>

            <a
              href="https://www.google.com/partners/agency?id=5480497280"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-2xl bg-white p-3 border border-white/10 hover:scale-105 transition duration-300"
            >
              <img
                src="https://www.gstatic.com/partners/badge/images/2026/PartnerBadgeClickable.svg"
                alt="Google Partner Badge"
                className="h-16 w-auto"
              />
            </a>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-5">Social Links</h4>

            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/company/paidsmedia/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center hover:bg-cyan-400 hover:text-black transition duration-300"
              >
                <span className="text-sm font-bold">in</span>
              </a>

              <a
                href="https://web.facebook.com/paidsmedia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center hover:bg-cyan-400 hover:text-black transition duration-300"
              >
                <span className="text-sm font-bold">f</span>
              </a>

              <a
                href="https://www.instagram.com/paidsmedia/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center hover:bg-cyan-400 hover:text-black transition duration-300"
              >
                <span className="text-sm font-bold">ig</span>
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© 2026 PaidsMedia. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
          </div>
        </div>
      </footer>

      </div>
  )
}
