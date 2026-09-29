/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "surface-container-lowest": "#ffffff",
        "on-tertiary-fixed": "#001d31",
        "on-primary-fixed-variant": "#3f465c",
        "primary": "#000000",
        "on-secondary-fixed-variant": "#7f2b00",
        "surface-container-high": "#dce9ff",
        "surface-container": "#e5eeff",
        "tertiary-fixed-dim": "#93ccff",
        "on-primary": "#ffffff",
        "on-primary-container": "#7c839b",
        "secondary": "#a73a00",
        "inverse-on-surface": "#eaf1ff",
        "on-surface-variant": "#45464d",
        "surface": "#f8f9ff",
        "on-background": "#0b1c30",
        "inverse-primary": "#bec6e0",
        "inverse-surface": "#213145",
        "outline-variant": "#c6c6cd",
        "error": "#ba1a1a",
        "primary-container": "#131b2e",
        "primary-fixed": "#dae2fd",
        "on-error-container": "#93000a",
        "tertiary": "#000000",
        "surface-dim": "#cbdbf5",
        "secondary-fixed": "#ffdbce",
        "on-surface": "#0b1c30",
        "surface-tint": "#565e74",
        "tertiary-fixed": "#cce5ff",
        "on-primary-fixed": "#131b2e",
        "on-tertiary-fixed-variant": "#004b73",
        "surface-container-low": "#eff4ff",
        "on-secondary": "#ffffff",
        "surface-container-highest": "#d3e4fe",
        "background": "#f8f9ff",
        "on-error": "#ffffff",
        "outline": "#76777d",
        "on-tertiary-container": "#188ace",
        "surface-bright": "#f8f9ff",
        "error-container": "#ffdad6",
        "on-tertiary": "#ffffff",
        "secondary-fixed-dim": "#ffb599",
        "surface-variant": "#d3e4fe",
        "secondary-container": "#fd651e",
        "on-secondary-fixed": "#370e00",
        "primary-fixed-dim": "#bec6e0",
        "tertiary-container": "#001d31",
        "on-secondary-container": "#571a00"
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "sm": "0.125rem",
        "md": "0.375rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem",
        "pill": "9999px"
      },
      spacing: {
        "margin": "2rem",
        "space-xl": "2.5rem",
        "margin-desktop": "3rem",
        "space-md": "1rem",
        "gutter": "1.5rem",
        "space-lg": "1.5rem",
        "space-sm": "0.5rem",
        "gutter-lg": "2rem",
        "space-xs": "0.25rem",
        "gutter-sm": "1rem",
        "margin-mobile": "1rem"
      },
      fontFamily: {
        "headline-lg": ["Plus Jakarta Sans", "sans-serif"],
        "body-lg": ["Inter", "sans-serif"],
        "headline-xl-mobile": ["Plus Jakarta Sans", "sans-serif"],
        "display-hero": ["Plus Jakarta Sans", "sans-serif"],
        "headline-sm": ["Plus Jakarta Sans", "sans-serif"],
        "label-md": ["Inter", "sans-serif"],
        "body-md": ["Inter", "sans-serif"],
        "headline-md": ["Plus Jakarta Sans", "sans-serif"],
        "body-sm": ["Inter", "sans-serif"],
        "label-lg": ["Inter", "sans-serif"],
        "label-code": ["Inter", "sans-serif"],
        "headline-xl": ["Plus Jakarta Sans", "sans-serif"],
        "display-hero-mobile": ["Plus Jakarta Sans", "sans-serif"]
      },
      fontSize: {
        "headline-lg": ["28px", { lineHeight: "36px", fontWeight: "700" }],
        "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
        "headline-xl-mobile": ["26px", { lineHeight: "34px", fontWeight: "700" }],
        "display-hero": ["48px", { lineHeight: "56px", fontWeight: "800" }],
        "headline-sm": ["18px", { lineHeight: "26px", fontWeight: "600" }],
        "label-md": ["12px", { lineHeight: "16px", fontWeight: "600" }],
        "body-md": ["15px", { lineHeight: "24px", fontWeight: "400" }],
        "headline-md": ["22px", { lineHeight: "30px", fontWeight: "600" }],
        "body-sm": ["13px", { lineHeight: "20px", fontWeight: "400" }],
        "label-lg": ["14px", { lineHeight: "20px", fontWeight: "600" }],
        "label-code": ["11px", { lineHeight: "14px", fontWeight: "700" }],
        "headline-xl": ["36px", { lineHeight: "44px", fontWeight: "700" }],
        "display-hero-mobile": ["32px", { lineHeight: "40px", fontWeight: "800" }]
      },
      keyframes: {
        "thermal-pulse": {
          "0%, 100%": {
            boxShadow: "0 0 15px rgba(253, 101, 30, 0.3), 0 0 30px rgba(253, 101, 30, 0.15)"
          },
          "50%": {
            boxShadow: "0 0 28px rgba(253, 101, 30, 0.55), 0 0 45px rgba(253, 101, 30, 0.3)"
          }
        },
        "status-blink": {
          "0%, 100%": {
            opacity: "1",
            transform: "scale(1)",
            boxShadow: "0 0 0 0 rgba(253, 101, 30, 0.7)"
          },
          "50%": {
            opacity: "0.6",
            transform: "scale(1.15)",
            boxShadow: "0 0 0 6px rgba(253, 101, 30, 0)"
          }
        },
        "float-subtle": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-4px)" }
        }
      },
      animation: {
        "thermal-pulse": "thermal-pulse 3s infinite ease-in-out",
        "status-blink": "status-blink 1.8s infinite cubic-bezier(0.4, 0, 0.6, 1)",
        "float-subtle": "float-subtle 4s ease-in-out infinite"
      }
    }
  },
  plugins: []
};
