export const mockMatches = [
  {
    id: "match-101",
    sport: "football",
    homeTeam: "Arsenal",
    awayTeam: "Chelsea",
    homeLogo: "https://via.placeholder.com/40x40/ef0107/ffffff?text=ARS",
    awayLogo: "https://via.placeholder.com/40x40/034694/ffffff?text=CHE",
    competition: "Premier League",
    venue: "Emirates Stadium, London",
    date: "2026-09-06",
    time: "17:30",
    status: "Upcoming",
    odds: { home: 1.85, draw: 3.60, away: 4.20 },
    form: { home: ["W", "W", "W", "D", "W"], away: ["W", "L", "D", "W", "L"] },
    h2h: [
      { date: "2026-04-12", match: "Chelsea 1-2 Arsenal", winner: "Arsenal" },
      { date: "2025-11-10", match: "Arsenal 3-1 Chelsea", winner: "Arsenal" },
      { date: "2025-03-15", match: "Chelsea 2-2 Arsenal", winner: "Draw" }
    ],
    stats: {
      avgGoalsHome: 2.4,
      avgGoalsAway: 1.3,
      cleanSheetsHome: "50%",
      cleanSheetsAway: "30%"
    },
    predictions: [
      { tipster: "ProBettor99", pick: "Arsenal Win & Over 2.5", odds: 2.35 },
      { tipster: "StatMaster", pick: "Over 9.5 Corners", odds: 1.75 }
    ]
  },
  {
    id: "match-102",
    sport: "football",
    homeTeam: "Real Madrid",
    awayTeam: "Barcelona",
    homeLogo: "https://via.placeholder.com/40x40/ffffff/000000?text=RMA",
    awayLogo: "https://via.placeholder.com/40x40/004d98/ffffff?text=BAR",
    competition: "La Liga",
    venue: "Santiago Bernabeu, Madrid",
    date: "2026-09-06",
    time: "20:00",
    status: "Upcoming",
    odds: { home: 2.10, draw: 3.50, away: 3.20 },
    form: { home: ["W", "W", "W", "W", "L"], away: ["W", "W", "D", "W", "W"] },
    h2h: [
      { date: "2026-03-22", match: "Real Madrid 3-2 Barcelona", winner: "Real Madrid" },
      { date: "2025-10-26", match: "Barcelona 1-2 Real Madrid", winner: "Real Madrid" }
    ],
    stats: {
      avgGoalsHome: 2.8,
      avgGoalsAway: 2.5,
      cleanSheetsHome: "40%",
      cleanSheetsAway: "40%"
    },
    predictions: [
      { tipster: "ElClasicoMaster", pick: "Both Teams To Score", odds: 1.65 }
    ]
  },
  {
    id: "match-103",
    sport: "tennis",
    homeTeam: "Carlos Alcaraz",
    awayTeam: "Jannik Sinner",
    homeLogo: "https://via.placeholder.com/40x40/f39c12/ffffff?text=ALC",
    awayLogo: "https://via.placeholder.com/40x40/27ae60/ffffff?text=SIN",
    competition: "US Open Semi-Final",
    venue: "Arthur Ashe Stadium, New York",
    date: "2026-09-07",
    time: "19:00",
    status: "Upcoming",
    odds: { home: 1.90, away: 1.90 },
    form: { home: ["W", "W", "W", "W", "W"], away: ["W", "W", "W", "W", "W"] },
    h2h: [
      { date: "2026-06-08", match: "Alcaraz 3-2 Sinner", winner: "Alcaraz" },
      { date: "2026-03-17", match: "Sinner 2-1 Alcaraz", winner: "Sinner" }
    ],
    stats: {
      firstServePctHome: "68%",
      firstServePctAway: "71%",
      acesPerMatchHome: 9.4,
      acesPerMatchAway: 11.2
    },
    predictions: [
      { tipster: "AceAnalyzer", pick: "Over 39.5 Games", odds: 1.90 }
    ]
  },
  {
    id: "match-104",
    sport: "basketball",
    homeTeam: "Boston Celtics",
    awayTeam: "LA Lakers",
    homeLogo: "https://via.placeholder.com/40x40/008348/ffffff?text=BOS",
    awayLogo: "https://via.placeholder.com/40x40/552583/ffffff?text=LAL",
    competition: "NBA",
    venue: "TD Garden, Boston",
    date: "2026-09-07",
    time: "21:30",
    status: "Upcoming",
    odds: { home: 1.45, away: 2.80 },
    form: { home: ["W", "W", "L", "W", "W"], away: ["L", "W", "W", "L", "W"] },
    h2h: [
      { date: "2026-01-15", match: "Celtics 118-106 Lakers", winner: "Celtics" }
    ],
    stats: {
      ppgHome: 119.5,
      ppgAway: 112.3,
      reboundsHome: 46.2,
      reboundsAway: 42.8
    },
    predictions: [
      { tipster: "HoopStatKing", pick: "Celtics -6.5 Spread", odds: 1.95 }
    ]
  }
];
