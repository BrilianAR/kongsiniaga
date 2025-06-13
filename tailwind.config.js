/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Arahkan ke semua file yang akan menggunakan kelas Tailwind
    './*.{html,php}', // Untuk file seperti index.html atau index.php
    './views/**/*.{html,php}', // Jika Anda punya folder 'views' untuk file PHP/HTML
    './src/**/*.{js}' // Jika Anda punya folder 'src' untuk JavaScript
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}