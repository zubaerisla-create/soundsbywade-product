import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, Rocket, Zap, Users, TrendingUp, CreditCard, ShoppingCart, UserCheck, Calendar, Dumbbell } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useEffect, useRef, useState } from "react";


export function HomePage() {
  const orbitRef = useRef<HTMLDivElement>(null);
  const [orbitSize, setOrbitSize] = useState(540);

  useEffect(() => {
    document.title = "Orbital Fitness - Launch Your Studio Into Orbit";
  }, []);

  useEffect(() => {
    if (!orbitRef.current) return;
    const obs = new ResizeObserver(entries => {
      setOrbitSize(entries[0].contentRect.width);
    });
    obs.observe(orbitRef.current);
    return () => obs.disconnect();
  }, []);

  const radius = orbitSize * 0.46;

  return (
    <div className="relative">
      {/* SECTION 1 - HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-6">
        <div className="relative max-w-7xl mx-auto w-full z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT SIDE - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-block mb-4"
                >
                  <div className="backdrop-blur-xl bg-white/10 border border-[#6CFFF3]/50 rounded-full px-6 py-2">
                    <p className="text-[#6CFFF3] font-semibold">All-In-One Gym Management SaaS</p>
                  </div>
                </motion.div>
                
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-white via-[#9D4DFF] to-[#6CFFF3] bg-clip-text text-transparent">
                    Orbital
                  </span>
                  <br />
                  <span className="text-white">Fitness</span>
                </h1>
                
                <p className="text-2xl md:text-3xl text-white/90 mb-6 leading-relaxed">
                  Launch all aspects of studio management into your orbit.
                </p>
                
                <p className="text-xl text-white/70 mb-10 max-w-xl leading-relaxed">
                  Accelerate your workflow with the only all‑in‑one fitness studio operating system designed to propel your business into the stratosphere.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/overview">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative group w-full sm:w-auto"
                  >
                    <div className="absolute -inset-2 bg-gradient-to-r from-[#9D4DFF] to-[#6CFFF3] rounded-full opacity-70 blur-xl group-hover:opacity-100 transition" />
                    <div className="relative px-10 py-5 bg-gradient-to-r from-[#9D4DFF] to-[#3C22FF] rounded-full text-white text-lg font-semibold whitespace-nowrap">
                      Full Software Preview
                      <ArrowRight className="inline-block ml-2 w-5 h-5" />
                    </div>
                  </motion.button>
                </Link>
                
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative group w-full sm:w-auto"
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#6CFFF3] to-[#9D4DFF] rounded-full opacity-70 blur group-hover:opacity-100 transition" />
                    <div className="relative px-10 py-5 bg-[#0A0A0F] rounded-full border border-[#6CFFF3]/50 text-white text-lg font-semibold whitespace-nowrap">
                      Book a Demo
                      <Rocket className="inline-block ml-2 w-5 h-5" />
                    </div>
                  </motion.button>
                </Link>
              </div>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="grid grid-cols-3 gap-6 pt-8"
              >
                <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
                  <p className="text-3xl font-bold bg-gradient-to-r from-[#9D4DFF] to-[#6CFFF3] bg-clip-text text-transparent">1%</p>
                  <p className="text-sm text-white/70 mt-1">Transaction Fee</p>
                </div>
                <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
                  <p className="text-3xl font-bold bg-gradient-to-r from-[#9D4DFF] to-[#6CFFF3] bg-clip-text text-transparent">6+</p>
                  <p className="text-sm text-white/70 mt-1">Tools Unified</p>
                </div>
                <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
                  <p className="text-3xl font-bold bg-gradient-to-r from-[#9D4DFF] to-[#6CFFF3] bg-clip-text text-transparent">∞</p>
                  <p className="text-sm text-white/70 mt-1">Scale Potential</p>
                </div>
              </motion.div>
            </motion.div>

            {/* RIGHT SIDE - Orbital Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative h-[500px] lg:h-[700px] flex items-center justify-center"
            >
              {/*
                The orbit wrapper (ring + bubbles) all rotate together.
                ref={orbitRef} lets us measure the actual rendered width
                so radius stays proportional on every screen size.
              */}
              <motion.div
                ref={orbitRef}
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute w-[540px] h-[540px] lg:w-[700px] lg:h-[700px]"
              >
                {/* Orbit Ring */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#6CFFF3]/60" />

                {/* Orbiting Feature Bubbles */}
                {[
                  { icon: CreditCard,  label: "Payment Processing", angle: 0,   color: "#9D4DFF" },
                  { icon: ShoppingCart, label: "Merchandise",        angle: 60,  color: "#6CFFF3" },
                  { icon: UserCheck,   label: "Client Check-in",    angle: 120, color: "#3C22FF" },
                  { icon: Calendar,    label: "Scheduling",         angle: 180, color: "#9D4DFF" },
                  { icon: Dumbbell,    label: "Workout Builder",    angle: 240, color: "#6CFFF3" },
                  { icon: Users,       label: "Class Planning",     angle: 300, color: "#3C22FF" },
                ].map((feature, index) => {
                  // radius is now dynamic — derived from the measured container width
                  const x = Math.cos((feature.angle * Math.PI) / 180) * radius;
                  const y = Math.sin((feature.angle * Math.PI) / 180) * radius;

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 + index * 0.15 }}
                      className="absolute top-1/2 left-1/2 z-20"
                      style={{
                        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                      }}
                    >
                      {/* Counter-rotate so the bubble stays upright */}
                      <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                      >
                        {/* Gentle float animation on top of counter-rotation */}
                        <motion.div
                          animate={{ y: [0, -10, 0] }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: index * 0.3,
                            ease: "easeInOut",
                          }}
                          className="relative group cursor-pointer"
                        >
                          <div
                            className="absolute -inset-2 rounded-full blur-xl opacity-50 group-hover:opacity-100 transition duration-300"
                            style={{ backgroundColor: `${feature.color}60` }}
                          />
                          <div
                            className="relative w-20 h-20 lg:w-24 lg:h-24 rounded-full backdrop-blur-xl bg-white/10 border-2 border-white/20 flex flex-col items-center justify-center p-3 shadow-lg"
                            style={{ boxShadow: `0 0 20px ${feature.color}40` }}
                          >
                            <feature.icon
                              className="w-6 h-6 lg:w-8 lg:h-8 mb-1"
                              style={{ color: feature.color }}
                            />
                            <span className="text-[9px] lg:text-[10px] text-white/90 text-center leading-tight font-medium">
                              {feature.label}
                            </span>
                          </div>
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Central Hub */}
              <div className="relative z-30">
                <div className="absolute -inset-12 bg-gradient-to-r from-[#9D4DFF] to-[#6CFFF3] rounded-full blur-3xl opacity-40" />
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 30px rgba(157, 77, 255, 0.4)",
                      "0 0 60px rgba(108, 255, 243, 0.6)",
                      "0 0 30px rgba(157, 77, 255, 0.4)",
                    ],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="relative w-48 h-48 lg:w-56 lg:h-56 rounded-full backdrop-blur-xl bg-gradient-to-br from-white/20 to-white/5 border-4 border-[#9D4DFF]/50 flex items-center justify-center overflow-hidden"
                >
                  <div className="text-center">
                    <h2 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-white to-[#9D4DFF] bg-clip-text text-transparent mb-1">
                      ORBITAL
                    </h2>
                    <p className="text-xl lg:text-2xl font-bold text-white">FITNESS</p>
                    <p className="text-[10px] lg:text-xs text-white/60 mt-1">All-In-One Platform</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2 - FREE DEMO LEAD MAGNET */}
      <section className="relative py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-[#9D4DFF] to-[#6CFFF3] rounded-3xl opacity-50 blur-2xl" />
            <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-12 md:p-16">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-[#9D4DFF] bg-clip-text text-transparent">
                    Prepare for <span className="text-[#6CFFF3]">launch</span>
                  </h2>
                  <p className="text-xl text-white/80 mb-8">
                    Schedule an exclusive, no‑obligation tour of the software suite and discover how Orbital Fitness can transform your studio operations.
                  </p>
                  <Link to="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="relative group"
                    >
                      <div className="absolute -inset-1 bg-gradient-to-r from-[#6CFFF3] to-[#9D4DFF] rounded-full opacity-70 blur group-hover:opacity-100 transition" />
                      <div className="relative px-8 py-4 bg-[#0A0A0F] rounded-full border border-[#6CFFF3]/50 text-white text-lg font-semibold">
                        Enter the Orbit
                        <Rocket className="inline-block ml-2 w-5 h-5" />
                      </div>
                    </motion.button>
                  </Link>
                </div>
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="relative h-80 flex items-center justify-center"
                >
                  <div className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-[#9D4DFF]/30 to-[#6CFFF3]/30 blur-3xl" />
                  <div className="relative w-72 h-72 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1770370419338-f9a813302baa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFuZXQlMjBlYXJ0aCUyMHNwYWNlJTIwb3JiaXR8ZW58MXx8fHwxNzcxNTMxMjQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Planet Earth from space"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 - WHAT & WHY SECTION */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-white via-[#9D4DFF] to-[#6CFFF3] bg-clip-text text-transparent">
              The Gravity of Orbital Fitness
            </h2>

            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-6 text-lg text-white/80">
                <p>
                  In the vast universe of fitness management software, most solutions orbit around a single function—leaving you juggling multiple platforms, subscriptions, and headaches.
                </p>
                <p>
                  <span className="text-white font-semibold">Orbital Fitness</span> changes everything. We've engineered a unified command center that brings together payment processing, merchandise sales, client communications, trainer scheduling, workout building, progress tracking, and class management—all in one elegant ecosystem.
                </p>
                <p>
                  No more scattered tools. No more data silos. Just seamless, powerful control at your fingertips.
                </p>
                <Link to="/overview">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative group mt-6"
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#9D4DFF] to-[#6CFFF3] rounded-full opacity-70 blur group-hover:opacity-100 transition" />
                    <div className="relative px-8 py-4 bg-gradient-to-r from-[#9D4DFF] to-[#3C22FF] rounded-full text-white font-semibold">
                      Enter Mission Control
                      <ArrowRight className="inline-block ml-2 w-5 h-5" />
                    </div>
                  </motion.button>
                </Link>
              </div>

              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-[#9D4DFF]/30 to-[#6CFFF3]/30 rounded-3xl blur-3xl" />
                <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-6">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1761971975769-97e598bf526b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBneW0lMjBpbnRlcmlvciUyMGZpdG5lc3MlMjBzdHVkaW98ZW58MXx8fHwxNzcxNTMwMDYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Modern Fitness Studio"
                    className="w-full rounded-2xl"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4 - FOUNDER'S OFFER SECTION */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#9D4DFF]/30 via-[#3C22FF]/20 to-transparent" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#9D4DFF] rounded-full blur-[150px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#6CFFF3] rounded-full blur-[150px]" />
        </div>

        <div className="relative max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="mx-auto mb-12 relative w-48 h-48"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#9D4DFF] to-[#6CFFF3] rounded-full opacity-50 blur-3xl" />
              <div className="relative w-full h-full rounded-full border-4 border-[#9D4DFF]/50 flex items-center justify-center backdrop-blur-xl bg-white/10">
                <span className="text-7xl font-bold bg-gradient-to-r from-[#9D4DFF] to-[#6CFFF3] bg-clip-text text-transparent">
                  1%
                </span>
              </div>
            </motion.div>

            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-[#9D4DFF] bg-clip-text text-transparent">
              Zero‑Gravity Fees
            </h2>
            <h3 className="text-3xl md:text-4xl text-white mb-8">
              The 1% Founders Offer
            </h3>
            <p className="text-xl text-white/80 mb-4 max-w-3xl mx-auto">
              Be among the pioneering studios to launch with Orbital Fitness and lock in a revolutionary{" "}
              <span className="text-[#6CFFF3] font-bold">1% transaction fee for life</span>—while competitors pay 3-5%.
            </p>
            <p className="text-lg text-white/70 mb-12 max-w-2xl mx-auto">
              This exclusive offer is limited to our founding members. Join the frontier and experience exponential savings as your business scales.
            </p>

            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-[#6CFFF3] to-[#9D4DFF] rounded-full opacity-70 blur-xl group-hover:opacity-100 transition" />
                <div className="relative px-12 py-6 bg-gradient-to-r from-[#9D4DFF] to-[#3C22FF] rounded-full text-white text-xl font-bold">
                  Join the Frontier
                  <Zap className="inline-block ml-2 w-6 h-6" />
                </div>
              </motion.button>
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
              {[
                { icon: Users,      text: "Unlimited Client Accounts" },
                { icon: TrendingUp, text: "Real-Time Analytics" },
                { icon: Zap,        text: "Lightning-Fast Support" },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6"
                >
                  <feature.icon className="w-8 h-8 text-[#6CFFF3] mx-auto mb-3" />
                  <p className="text-white">{feature.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}