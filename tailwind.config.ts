// import type { Config } from "tailwindcss";
// import tailwindcssAnimate from "tailwindcss-animate";

// export default {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/**/*.{ts,tsx}",
//   ],
//   darkMode: ["class", "class"],
//   theme: {
//     extend: {
//       colors: {
//         background: "hsl(var(--background))",
//         foreground: "hsl(var(--foreground))",
//         card: {
//           DEFAULT: "hsl(var(--card))",
//           foreground: "hsl(var(--card-foreground))",
//         },
//         popover: {
//           DEFAULT: "hsl(var(--popover))",
//           foreground: "hsl(var(--popover-foreground))",
//         },
//         primary: {
//           DEFAULT: "hsl(var(--primary))",
//           foreground: "hsl(var(--primary-foreground))",
//         },
//         secondary: {
//           DEFAULT: "hsl(var(--secondary))",
//           foreground: "hsl(var(--secondary-foreground))",
//         },
//         muted: {
//           DEFAULT: "hsl(var(--muted))",
//           foreground: "hsl(var(--muted-foreground))",
//         },
//         accent: {
//           DEFAULT: "hsl(var(--accent))",
//           foreground: "hsl(var(--accent-foreground))",
//         },
//         destructive: {
//           DEFAULT: "hsl(var(--destructive))",
//           foreground: "hsl(var(--destructive-foreground))",
//         },
//         border: "hsl(var(--border))",
//         input: "hsl(var(--input))",
//         ring: "hsl(var(--ring))",
//         chart: {
//           "1": "hsl(var(--chart-1))",
//           "2": "hsl(var(--chart-2))",
//           "3": "hsl(var(--chart-3))",
//           "4": "hsl(var(--chart-4))",
//           "5": "hsl(var(--chart-5))",
//         },
//       },
//       borderRadius: {
//         lg: "var(--radius)",
//         md: "calc(var(--radius) - 2px)",
//         sm: "calc(var(--radius) - 4px)",
//       },
//     },
//     fontFamily: {
//       inter: ["var(--font-inter)"],
//       sans: ["var(--font-geistvf)"],
//       mono: ["var(--font-geistvf)"],
//       oswald: ["var(--font-oswald)"],
//       lato: ["var(--font-lato)"],
//       montserrat: ["var(--font-montserrat)"],
//       poppins: ["var(--font-poppins)"],
//       raleway: ["var(--font-raleway)"],
//     },
//   },
//   plugins: [addVariablesForColors, tailwindcssAnimate],
// } satisfies Config;

// function addVariablesForColors({ addBase, theme }: any) {
//   const colors = theme("colors");
//   const newVars = Object.keys(colors).reduce((vars, key) => {
//     if (typeof colors[key] === "string") {
//       vars[`--${key}`] = colors[key];
//     } else if (typeof colors[key] === "object") {
//       Object.entries(colors[key]).forEach(([subKey, value]) => {
//         vars[`--${key}-${subKey}`] = value as string;
//       });
//     }
//     return vars;
//   }, {} as Record<string, string>);

//   addBase({
//     ":root": newVars,
//   });
// }

import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";
import defaultTheme from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        sans: ["var(--font-geistvf)"],
        mono: ["var(--font-geistvf)"],
        oswald: ["var(--font-oswald)"],
        lato: ["var(--font-lato)"],
        montserrat: ["var(--font-montserrat)"],
        poppins: ["var(--font-poppins)"],
        raleway: ["var(--font-raleway)"],
      },
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },

      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
    },
  },
  plugins: [addVariablesForColors, tailwindcssAnimate],
} satisfies Config;

function addVariablesForColors({ addBase, theme }: any) {
  const colors = theme("colors");
  const newVars = Object.keys(colors).reduce((vars, key) => {
    if (typeof colors[key] === "string") {
      vars[`--${key}`] = colors[key];
    } else if (typeof colors[key] === "object") {
      Object.entries(colors[key]).forEach(([subKey, value]) => {
        vars[`--${key}-${subKey}`] = value as string;
      });
    }
    return vars;
  }, {} as Record<string, string>);

  addBase({
    ":root": newVars,
  });
}
