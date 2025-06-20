// Unified color theme for the entire application
export const colors = {
  // Primary colors from home page
  cream: "#F5F5DC",
  gold: "#D4A017",
  royalGreen: "#1B4D3E",
  black: "#1A1A1A",
  lightGold: "rgba(212, 160, 23, 0.2)",

  // Additional complementary colors
  darkNavy: "#0A1428",
  navy: "#1A2A44",
  lightGold2: "#E6B422",
  champagne: "#F5E6C8",
  white: "#ffffff",

  // Semantic colors
  success: "#10B981",
  warning: "#F59E0B",
  error: "#EF4444",
  info: "#3B82F6",
}

// Common gradient backgrounds
export const gradients = {
  primary: `linear-gradient(135deg, ${colors.cream} 0%, ${colors.lightGold} 100%)`,
  dark: `linear-gradient(135deg, ${colors.darkNavy} 0%, ${colors.navy} 100%)`,
  gold: `linear-gradient(135deg, ${colors.gold} 0%, ${colors.lightGold2} 100%)`,
  royal: `linear-gradient(135deg, ${colors.royalGreen} 0%, ${colors.navy} 100%)`,
}

// Typography styles
export const typography = {
  heading: "'Cinzel', serif",
  script: "'Tangerine', cursive",
  body: "'Roboto', sans-serif",
}
