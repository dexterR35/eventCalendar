export default function Footer() {
  const paymentMethods = [
    { name: "Visa", code: "VISA", color: "text-blue-600" },
    { name: "Mastercard", code: "MC", color: "bg-gradient-to-r from-[#eb001b] to-[#f79e1b] bg-clip-text text-transparent" },
    { name: "PayPal", code: "PP", color: "text-blue-500" },
    { name: "Skrill", code: "SK", color: "text-orange-500" },
    { name: "Neteller", code: "NT", color: "text-green-500" },
    { name: "Bitcoin", code: "₿", color: "text-orange-400" },
    { name: "Ethereum", code: "Ξ", color: "text-blue-400" },
    { name: "Bank Transfer", code: "🏦", color: "text-white/70" },
  ];

  return (
    <footer className="relative z-10 w-full bg-gradient-to-b from-transparent via-slate-900/40 to-slate-900/80 backdrop-blur-sm">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-6">
        <div className="space-y-10">
          {/* Terms & Conditions */}
          <div className="relative">
            <div className="text-center mb-12">
              <h3
                className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  letterSpacing: "-0.01em",
                  textShadow: "0 2px 10px rgba(235, 39, 67, 0.3)",
                }}
              >
                Terms & Conditions
              </h3>
            </div>

            <div className="space-y-8 max-w-4xl mx-auto">
              <div>
                <h4
                  className="text-2xl sm:text-3xl font-black text-white mb-4"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Eligibility
                </h4>
                <p
                  className="text-base sm:text-lg text-white/90 leading-relaxed"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Available to players 18+ (or legal age). One bonus per day per
                  account.
                </p>
              </div>

              <div>
                <h4
                  className="text-2xl sm:text-3xl font-black text-white mb-4"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Bonus Terms
                </h4>
                <p
                  className="text-base sm:text-lg text-white/90 leading-relaxed"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Each promo code valid only on its designated day. Subject to
                  wagering requirements.
                </p>
              </div>

              <div>
                <h4
                  className="text-2xl sm:text-3xl font-black text-white mb-4"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Usage
                </h4>
                <p
                  className="text-base sm:text-lg text-white/90 leading-relaxed"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Codes must be used at registration or deposit. Cannot be
                  transferred or combined.
                </p>
              </div>

              <div>
                <h4
                  className="text-2xl sm:text-3xl font-black text-white mb-4"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Responsible Gaming
                </h4>
                <p
                  className="text-base sm:text-lg text-white/90 leading-relaxed"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Gamble responsibly. Seek help if needed from responsible
                  gaming organizations.
                </p>
              </div>

              <div>
                <h4
                  className="text-2xl sm:text-3xl font-black text-white mb-4"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Changes
                </h4>
                <p
                  className="text-base sm:text-lg text-white/90 leading-relaxed"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  We reserve the right to modify or cancel this promotion. All
                  decisions are final.
                </p>
              </div>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="pt-4">
            <p
              className="text-center text-white/60 text-xs sm:text-sm mb-4 font-medium"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Accepted Payment Methods
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {paymentMethods.map((method) => (
                <div
                  key={method.name}
                  className="bg-white/10 backdrop-blur-sm rounded px-2 py-1.5 hover:bg-white/15 transition-all duration-200"
                  title={method.name}
                >
                  <div
                    className={`text-[10px] sm:text-xs font-bold ${method.color}`}
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {method.code}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-6 text-center">
            <p
              className="text-white/50 text-[10px] sm:text-xs"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              © 2024 Christmas Promo Calendar. All rights reserved. | 18+ Only
              | Play Responsibly
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

