import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["selector", '[data-theme="dark"]'],
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Brand (fixed)
        royal: "#0052CC",
        azure: "#00AEEF",
        cyanx: "#0EA5E9",
        ink: "#0B1220",
        success: "#10B981",
        // Semantic (theme-aware via CSS variables)
        bg: "var(--bg)",
        bg2: "var(--bg-2)",
        surface: "var(--surface)",
        content: "var(--text)",
        muted: "var(--muted)",
        faint: "var(--faint)",
        line: "var(--border)",
        "line-strong": "var(--border-strong)",
      },
      fontFamily: {
        display: ["var(--font-display)", "Plus Jakarta Sans", "sans-serif"],
        sans: ["var(--font-body)", "Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl2: "20px",
      },
      backgroundImage: {
        accent: "linear-gradient(135deg,#0052CC 0%,#00AEEF 55%,#0EA5E9 100%)",
      },
      boxShadow: {
        glow: "0 30px 70px -30px rgba(0,82,204,.35)",
        primary: "0 10px 26px -8px rgba(0,82,204,.6)",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(.16,1,.3,1)",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        spinSlow: {
          to: { transform: "rotate(360deg)" },
        },
        marquee: {
          to: { transform: "translateX(-50%)" },
        },
        pulseRing: {
          "0%": { boxShadow: "0 0 0 0 rgba(16,185,129,.55)" },
          "70%": { boxShadow: "0 0 0 10px rgba(16,185,129,0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(16,185,129,0)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spinSlow 18s linear infinite",
        marquee: "marquee 38s linear infinite",
        "pulse-ring": "pulseRing 2s infinite",
      },
      maxWidth: {
        site: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
