export const mockBingo = {
  halls: [
    {
      id: "bingo-1",
      name: "Tombola Bingo",
      logo: "https://via.placeholder.com/100x40/9b59b6/ffffff?text=Tombola",
      rating: 4.9,
      bonus: "Deposit £10 Play with £40",
      ticketPrices: "1p - 50p",
      jackpot: "£20,000 Guarantee",
      community: "Vibrant chat games with friendly chat moderators"
    },
    {
      id: "bingo-2",
      name: "Mecca Bingo",
      logo: "https://via.placeholder.com/100x40/e74c3c/ffffff?text=Mecca",
      rating: 4.8,
      bonus: "Spend £10 Get £60 Bingo Bonus",
      ticketPrices: "5p - £1",
      jackpot: "£50,000 Super Jackpot",
      community: "Daily free bingo sessions & spinner wheel"
    }
  ],
  rules: [
    { type: "90-Ball Bingo", desc: "Most popular UK format. 3 rows, 9 columns. Win on 1 Line, 2 Lines, or Full House." },
    { type: "75-Ball Bingo", desc: "US classic played on a 5x5 grid. Win by completing specific letter or shape patterns." }
  ],
  strategies: [
    { title: "Granville's Bingo Theory", text: "Choose cards with an equal distribution of odd/even numbers and high/low digits." },
    { title: "Tippett Strategy", text: "In longer games, pick cards with numbers closer to the median number (45 in 90-ball bingo)." }
  ],
  faqs: [
    { id: "faq-1", question: "Is online bingo safe and regulated?", answer: "Yes, all recommended halls are licensed by official gambling commissions (e.g. UKGC)." },
    { id: "faq-2", question: "How do I claim a bingo welcome bonus?", answer: "Sign up through our exclusive link, deposit the qualifying amount (usually £10), and enter the promo code if required." },
    { id: "faq-3", question: "Can I play bingo on mobile devices?", answer: "Absolutely. All modern bingo platforms offer fully responsive mobile web or dedicated iOS/Android apps." }
  ]
};
