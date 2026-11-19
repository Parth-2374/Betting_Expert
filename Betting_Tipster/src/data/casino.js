export const mockCasino = {
  featuredCasinos: [
    {
      id: "cas-1",
      name: "Betway Casino",
      logo: "https://via.placeholder.com/100x40/000000/ffffff?text=Betway+Casino",
      rating: 4.9,
      bonus: "100% Match up to £50 + 50 Free Spins",
      gamesCount: "1,500+",
      minDeposit: "£10",
      payoutSpeed: "Instant",
      features: ["Live Dealer", "Mega Moolah Jackpots", "iOS & Android App"],
      pros: ["Huge progressive jackpot selection", "Licensed by UKGC & MGA"],
      cons: ["Higher wagering requirements on table games"]
    },
    {
      id: "cas-2",
      name: "Unibet Casino",
      logo: "https://via.placeholder.com/100x40/195b28/ffffff?text=Unibet+Casino",
      rating: 4.8,
      bonus: "Deposit £10 Get £40 Bonus",
      gamesCount: "2,000+",
      minDeposit: "£10",
      payoutSpeed: "1-2 Hours",
      features: ["Exclusive Slots", "Live Roulette Tables", "24/7 Support"],
      pros: ["Exclusive NetEnt title releases", "Low wagering multiplier"],
      cons: ["Fewer crypto options"]
    }
  ],
  slots: [
    { id: "slot-1", title: "Gates of Olympus 1000", provider: "Pragmatic Play", rtp: "96.50%", volatility: "Very High", maxWin: "15,000x", image: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&q=80&w=300" },
    { id: "slot-2", title: "Book of Dead", provider: "Play'n GO", rtp: "96.21%", volatility: "High", maxWin: "5,000x", image: "https://images.unsplash.com/photo-1605870445919-838d190e8e1b?auto=format&fit=crop&q=80&w=300" },
    { id: "slot-3", title: "Sweet Bonanza", provider: "Pragmatic Play", rtp: "96.48%", volatility: "High", maxWin: "21,100x", image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=300" },
    { id: "slot-4", title: "Starburst XXXtreme", provider: "NetEnt", rtp: "96.26%", volatility: "Very High", maxWin: "200,000x", image: "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?auto=format&fit=crop&q=80&w=300" }
  ],
  rouletteGuides: [
    { id: "r-1", title: "European vs American Roulette", odds: "2.70% House Edge vs 5.26%", tip: "Always select European tables with single zero." },
    { id: "r-2", title: "Martingale Strategy Explained", odds: "Negative Progression", tip: "Requires large bankroll and high table limits." }
  ],
  highRollers: [
    { id: "hr-1", title: "VIP Salon Prive", perk: "Personal VIP Account Manager & Unlimited Withdrawals", minStake: "$500 per hand" },
    { id: "hr-2", title: "Platinum Cashback Club", perk: "20% Weekly Cashback with zero wagering requirements", minDeposit: "$5,000" }
  ]
};
