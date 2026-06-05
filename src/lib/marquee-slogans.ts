/** National ticker pool — shuffled on each page load in the Marquee. */
export const marqueeSlogans = [
  "Friendship Is Infrastructure",
  "For Tippa. By Tippa.",
  "Long Live Tippa",
  "Preserving History Since Last Weekend",
  "Every Achievement Requires A Party",
  "No Citizen Shall Be Left On Read",
  "Attendance Is A Revolutionary Duty",
  "Party Debt Is Real Debt",
  "Government Grade Gossip Distribution",
  "Strong Citizens. Stronger Parties.",
  "One Nation • One Group Chat • One Aux",
  "Building Civilization One House Party At A Time",
  "Open Wallet • Restore Balance To The Universe",
  "Visa Approved • Party Pending",
  "The Nation Is Watching",
  "Workers of Tippa, Unite",
  "From Each According To Their Vibe, To Each According To Their Thirst",
  "Glory To The Republic",
  "Ujjwal Has Been Designated A Strategic National Beer Reserve",
  "Ravi Remains Under Manager Approval",
  "Ravi's Hairline Has Heritage Status",
  "Madan Remains Under Active Investigation",
  "Mukesh Payment Party Remains Outstanding",
  "Mohsin Cleared For International Travel",
  "Sehaj Is Now A Productive Member Of Society",
  "Parul Cleared All Background Checks",
  "Ayush Continues To Maintain Civilization",
  "Aman Has Issued Another National Announcement",
  "Smruti's Ministry Has Confiscated The Seasoning",
  "Excuses Will Be Reviewed And Rejected",
  "A Committee Has Been Formed",
  "The Committee Has Formed A Subcommittee",
  "The Party Planning Committee Never Sleeps",
  "Government Records Show Another Party Is Due",
  "Citizens Are Advised To Remain Hydrated",
  "This Notice Has Been Approved By Absolutely Nobody",
  "Every Birthday Is A Fiscal Responsibility",
  "Unpaid Parties Accrue Interest",
  "National Debt Currently Denominated In Beer",
  "The Economy Runs On Food And Empty Promises",
  "Celebration Inflation At Record Highs",
  "Fiscal Stability Depends On Mukesh",
  "Party Futures Market Remains Volatile",
  "The Ministry Of Finance Demands Snacks",
  "Tippa Black Day Remains Classified",
  "Pickleball Is Now A Recognized National Sport",
  "The Meethafication Of Takla Must Be Studied",
  "Reports Indicate Increasing Levels Of Aura Farming",
  "External Citizens Require Border Clearance",
  "The Republic Has More Events Than Most Countries",
  "Historians Continue To Study The Mukesh Hair Color Incident",
  "Researchers Have Confirmed Ravi Chose Pottery Over Sports",
];

export function shuffleMarqueeSlogans(pool: readonly string[] = marqueeSlogans): string[] {
  const copy = [...pool];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}
