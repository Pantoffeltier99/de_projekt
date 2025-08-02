module.exports = {
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        'pulse-strong': 'pulseStrong 1s ease-in-out infinite',
      },
      keyframes: {
        pulseStrong: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.05)' },
        },
      },
    },
  },
};

