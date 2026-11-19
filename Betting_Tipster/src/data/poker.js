export const mockPoker = {
  rooms: [
    {
      id: "poker-1",
      name: "GGPoker",
      logo: "https://via.placeholder.com/100x40/000000/ffffff?text=GGPoker",
      rating: 4.9,
      bonus: "100% up to $600 or $100 in Free Tickets",
      rakeback: "Up to 60% Fish Buffet",
      traffic: "High (100,000+ Online)",
      tournaments: "WSOP Online, GGMasters, Super MILLION$",
      features: ["Smart HUD", "SnapCam Video", "Staking Platform"]
    },
    {
      id: "poker-2",
      name: "888poker",
      logo: "https://via.placeholder.com/100x40/0066cc/ffffff?text=888poker",
      rating: 4.7,
      bonus: "$88 Free No Deposit + 100% up to $400",
      rakeback: "Up to 30%",
      traffic: "Medium-High",
      tournaments: "BLAST Sit & Go, XL Spring Series",
      features: ["Soft Field", "Beginner Friendly", "Webcam Games"]
    }
  ],
  tips: [
    { id: "pt-1", title: "Pre-Flop Range Construction", concept: "Open-raising tight from early position and widening on the button." },
    { id: "pt-2", title: "Bankroll Management Rule", concept: "Maintain at least 30 buy-ins for cash games and 100 buy-ins for MTTs." }
  ],
  bonusCodes: [
    { room: "GGPoker", code: "EXPERTGG", offer: "$100 Free Tickets" },
    { room: "888poker", code: "EXPERT888", offer: "$88 No Deposit Bonus" }
  ]
};
