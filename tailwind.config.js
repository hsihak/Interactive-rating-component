module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // =>
      }, 
      maxWidth: {
        '480px': '480px'
      },
      colors: {
        'primary': 'hsl(25, 97%, 53%)',
        'white': 'hsl(0, 0%, 100%)',
        'light-grey': 'hsl(217, 12%, 63%)',
        'medium-grey': 'hsl(216, 12%, 54%)',
        'dark-blue': '#1f252e',
        'dark-blue-circle': '#29313d',
        'very-dark-blue': 'hsl(216, 12%, 8%)'
      },
      padding: {
        '1rem': '1rem'
      },
    }
  },
  plugins: [],
}
