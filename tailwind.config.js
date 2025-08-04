tailwind.config = {
  content: ['*.html'],
  theme: {
    extend: {
      colors: {

      },
      borderColor: {
        DEFAULT: '#E5E7EB', // or another color
      },
      borderRadius: {
        defaultradius: '5px'
      },
      container: {
        center: true,
        padding: '12px',
        screens: {
          DEFAULT: '100%',
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1400px',
          '3xl': '1519px',
        },
      },
    },


  }
}