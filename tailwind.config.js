/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,,ts,tsx}",
  ],
  theme: {
    colors: {
      primary: '#22252A',
      second: '#E49D22',
      tertiary:'#032940',
      fourth: '#FFECCC',
      bgcolor1: '#FFFFFF',
      bgcolor2: '#E5E5E5',
      bglanding2: '#2A2C30',
      bglanding3: '#121417',
      bglanding4: '#E6EAF2',
      bglanding5: '#032940',
      bglanding6: '#FFECCC',
      text1: '#63DFF1',
      text2: '#FFECCC',
      text3: '#525252',
      text4: '#828282',
      text5: '#A1A1A1',
      text6: '#525252',
      black:'#000000',
  
    },
    fontFamily: {
      nunito: ['Nunito', 'sans-serif'],
      inter: ['Inter', 'sans-serif'],
    },
    extend: {},
    
  },
  plugins: [],
}
