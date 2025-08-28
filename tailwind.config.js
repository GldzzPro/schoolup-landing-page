module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "var(--black)",
        blue: "var(--blue)",
        "charcoal-slate": "var(--charcoal-slate)",
        "cloud-whisper": "var(--cloud-whisper)",
        "cloudy-white": "var(--cloudy-white)",
        "crimson-rush": "var(--crimson-rush)",
        grey: "var(--grey)",
        "light-blue": "var(--light-blue)",
        "light-orange": "var(--light-orange)",
        "light-purple": "var(--light-purple)",
        "light-red": "var(--light-red)",
        "light-yellow": "var(--light-yellow)",
        "neutral-neutral-5": "var(--neutral-neutral-5)",
        "onyx-black": "var(--onyx-black)",
        orange: "var(--orange)",
        "pearl-white": "var(--pearl-white)",
        "pure-snow": "var(--pure-snow)",
        purple: "var(--purple)",
        red: "var(--red)",
        "twilight-indigo": "var(--twilight-indigo)",
        white: "var(--white)",
        yellow: "var(--yellow)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        "mysticgrove-enchantedcharm":
          "var(--mysticgrove-enchantedcharm-font-family)",
        "mysticgrove-whisperingwillow":
          "var(--mysticgrove-whisperingwillow-font-family)",
        "mysticgrove-whisperingxs":
          "var(--mysticgrove-whisperingxs-font-family)",
        "paragraph-small-meduim": "var(--paragraph-small-meduim-font-family)",
        "paragraph-xsmall-heavy": "var(--paragraph-xsmall-heavy-font-family)",
        "paragraph-xsmall-meduim": "var(--paragraph-xsmall-meduim-font-family)",
        "paragraph-xsmall-regular":
          "var(--paragraph-xsmall-regular-font-family)",
        "quicksand-delicatescript":
          "var(--quicksand-delicatescript-font-family)",
        "quicksand-easyread": "var(--quicksand-easyread-font-family)",
        "quicksand-easyread-semibold":
          "var(--quicksand-easyread-semibold-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      boxShadow: {
        "drop-shadow-100": "var(--drop-shadow-100)",
        "drop-shadow-meduim": "var(--drop-shadow-meduim)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};
