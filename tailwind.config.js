module.exports = {
  content: ['dist/**/*.{html,js}'],
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
  theme: {
    extend: {
      colors: {
        'zinc-purple': '#332658',
        'zinc-dark-purple': '#1F1735',
        'zinc-pastel-pink': '#FE9BFF',
        'zinc-pastel-purple': '#A79BFF',
        'zinc-dark-purple-light': '#6048A3'
      }
    }
  }
}
