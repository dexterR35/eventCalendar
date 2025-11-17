import { motion } from 'framer-motion';

export default function Footer() {
  // Terms & Conditions Data - matches standalone version (Romanian)
  const termsData = [
    {
      delay: "scroll-delay-100",
      iconBg: "from-red-500/20 to-red-600/20",
      iconBorder: "border-red-400/30",
      icon: "👤",
      title: "Eligibilitate",
      decorativeEmoji: "✨",
      description:
        "Disponibil pentru jucători 18+ (sau vârsta legală). Un bonus pe zi per cont.",
    },
    {
      delay: "scroll-delay-200",
      iconBg: "from-yellow-500/20 to-yellow-600/20",
      iconBorder: "border-yellow-400/30",
      icon: "🎁",
      title: "Termeni Bonus",
      decorativeEmoji: "💎",
      description:
        "Fiecare cod promo este valabil doar în ziua desemnată. Supus cerințelor de pariere.",
    },
    {
      delay: "scroll-delay-300",
      iconBg: "from-blue-500/20 to-blue-600/20",
      iconBorder: "border-blue-400/30",
      icon: "🎴",
      title: "Utilizare",
      decorativeEmoji: "🎰",
      description:
        "Codurile trebuie folosite la înregistrare sau depunere. Nu pot fi transferate sau combinate.",
    },
    {
      delay: "scroll-delay-400",
      iconBg: "from-green-500/20 to-green-600/20",
      iconBorder: "border-green-400/30",
      icon: "🛡️",
      title: "Joc Responsabil",
      decorativeEmoji: "❤️",
      description:
        "Joacă responsabil. Caută ajutor dacă este nevoie de la organizații de jocuri responsabile.",
    },
    {
      delay: "scroll-delay-500",
      iconBg: "from-purple-500/20 to-purple-600/20",
      iconBorder: "border-purple-400/30",
      icon: "⚙️",
      title: "Modificări",
      decorativeEmoji: "📝",
      description:
        "Ne rezervăm dreptul de a modifica sau anula această promoție. Toate deciziile sunt finale.",
    },
  ];

  // Payment Methods Data - matches standalone version
  const paymentMethodsData = [
    {
      title: "Visa",
      text: "VISA",
      fontWeight: "font-bold",
      textColor: "text-blue-600",
      hasGradient: false,
    },
    {
      title: "Mastercard",
      text: "MC",
      fontWeight: "font-bold",
      textColor: "",
      hasGradient: true,
      gradient: "linear-gradient(135deg, #eb001b 0%, #f79e1b 100%)",
    },
    {
      title: "PayPal",
      text: "PP",
      fontWeight: "font-semibold",
      textColor: "text-blue-500",
      hasGradient: false,
    },
    {
      title: "Skrill",
      text: "SK",
      fontWeight: "font-semibold",
      textColor: "text-orange-500",
      hasGradient: false,
    },
    {
      title: "Neteller",
      text: "NT",
      fontWeight: "font-semibold",
      textColor: "text-green-500",
      hasGradient: false,
    },
    {
      title: "Bitcoin",
      text: "₿",
      fontWeight: "font-semibold",
      textColor: "text-orange-400",
      hasGradient: false,
    },
    {
      title: "Ethereum",
      text: "Ξ",
      fontWeight: "font-semibold",
      textColor: "text-blue-400",
      hasGradient: false,
    },
    {
      title: "Transfer Bancar",
      text: "🏦",
      fontWeight: "font-semibold",
      textColor: "text-white/70",
      hasGradient: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const termCardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="tnc-section" className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
      <footer className="w-full">
        <div className="w-full max-w-6xl mx-auto py-6 sm:py-6">
          {/* Terms & Conditions with Integrated Payment Methods */}
          <div className="space-y-10">
            {/* Terms & Conditions - Enhanced Design */}
            <div className="relative">
              {/* Header */}
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="inline-flex items-center gap-3 mb-4">
                  <span className="text-2xl animate-pulse float-particle">📋</span>
                  <h3
                    className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      letterSpacing: "-0.01em",
                      textShadow: "0 2px 10px rgba(235, 39, 67, 0.3)",
                    }}
                  >
                    Termeni și Condiții
                  </h3>
                  <span className="text-2xl animate-pulse delay-500 float-particle">📋</span>
                </div>
                <div className="relative inline-block">
                  <div className="h-1.5 bg-gradient-to-r from-transparent via-red-400/20 to-transparent rounded-full w-48 mx-auto mb-2"></div>
                  <div className="h-0.5 bg-gradient-to-r from-transparent via-white/15 to-transparent rounded-full w-36 mx-auto"></div>
                </div>
              </motion.div>

              {/* Terms Content - New Beautiful Layout */}
              <div className="max-w-5xl mx-auto">
                <div className="relative bg-gradient-to-br from-gray-800/40 via-gray-900/30 to-gray-800/40 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
                  {/* Terms Container */}
                  <motion.div
                    className="px-6 sm:px-8 py-8 space-y-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                  >
                    {termsData.map((term, index) => (
                      <motion.div
                        key={index}
                        className="term-section"
                        variants={termCardVariants}
                      >
                        <div className="term-section-number">{index + 1}</div>
                        <div className="term-content">
                          <h4
                            className="term-title"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            <span>{term.icon}</span>
                            <span>{term.title}</span>
                            {term.decorativeEmoji && (
                              <span className="text-sm opacity-60">{term.decorativeEmoji}</span>
                            )}
                          </h4>
                          <p
                            className="term-description"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            {term.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Payment Methods - Small and Modern */}
            <motion.div
              className="pt-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            >
              <p
                className="text-center text-white/60 text-xs sm:text-sm mb-4 font-medium"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Metode de Plată Acceptate
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                {paymentMethodsData.map((payment, index) => {
                  const textStyle = payment.hasGradient
                    ? {
                        fontFamily: "'Inter', sans-serif",
                        letterSpacing: "0.05em",
                        background: payment.gradient,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }
                    : payment.text === "VISA"
                    ? {
                        fontFamily: "'Inter', sans-serif",
                        letterSpacing: "0.05em",
                      }
                    : { fontFamily: "'Inter', sans-serif" };

                  const textClasses = payment.textColor
                    ? `text-[10px] sm:text-xs ${payment.fontWeight} ${payment.textColor}`
                    : `text-[10px] sm:text-xs ${payment.fontWeight}`;

                  return (
                    <div
                      key={index}
                      className="bg-white/10 backdrop-blur-sm rounded px-2 py-1.5 hover:bg-white/15 transition-all duration-200"
                      title={payment.title}
                    >
                      <div className={textClasses} style={textStyle}>
                        {payment.text}
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Copyright - Minimal */}
            <motion.div
              className="pt-6 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p
                className="text-white/50 text-[10px] sm:text-xs"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                © 2024 Calendar Promo de Crăciun. Toate drepturile rezervate. | 18+ Doar | Joacă Responsabil
              </p>
            </motion.div>
          </div>
        </div>
      </footer>
    </section>
  );
}
