import type { Config } from 'tailwindcss';

/**
 * Developer Portfolio — design tokens
 *
 * Minimal, confident, slightly technical. Near-black dark / warm-white light.
 * Single lime accent. Space Grotesk headings, JetBrains Mono labels, Inter body.
 */
const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light surface
        surface: {
          light: '#FDFCFA',    // warm white
          dark: '#0B0B0C',     // near-black
        },
        // Text hierarchy
        ink: {
          DEFAULT: '#1A1A1B',  // primary text on light
          light: '#6B6B6E',    // secondary text on light
          inv: '#E8E8EA',      // primary text on dark
          'inv-light': '#8A8A8F', // secondary on dark
        },
        // Single accent
        lime: {
          DEFAULT: '#C6F24E',  // accent — CTAs, active, emphasis
          dark: '#9EC92F',     // hover on lime
          subtle: 'rgba(198,242,78,0.12)', // bg tints
        },
        // Borders
        line: {
          light: '#E5E5E4',
          dark: '#1F1F22',
        },
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(2.75rem, 6vw, 4.5rem)', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'h2x': ['clamp(1.5rem, 3vw, 2.25rem)', { lineHeight: '1.2', letterSpacing: '-0.015em' }],
        'h3x': ['1.125rem', { lineHeight: '1.4' }],
        'label': ['0.6875rem', { lineHeight: '1', letterSpacing: '0.12em' }],
        'lead': ['1.125rem', { lineHeight: '1.7' }],
      },
      spacing: {
        section: '7rem',
      },
      maxWidth: {
        shell: '68rem',
      },
      borderRadius: {
        card: '6px',
      },
    },
  },
  plugins: [],
};

export default config;
