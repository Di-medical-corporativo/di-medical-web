const productMeta = (title) => ({
    title: `${title} | Lo más selecto de las mejores marcas para el mercado hospitalario.`,
    meta: [
        { hid: 'description', name: 'description', content: 'Conoce nuestros productos, lo más selecto de las mejores marcas para el mercado hospitalario.' },
        { hid: 'author', name: 'author', content: 'Di-medical corporativo' },
        { hid: 'og-title', name: 'og:title', content: 'Productos | Lo más selecto de las mejores marcas para el mercado hospitalario.' },
        { hid: 'og-type', name: 'og:type', content: 'website' },
        { hid: 'og-url', name: 'og:url', content: `https://www.dimedicalcorporativo.mx/products` },
        { hid: 'og-description', name: 'og:description', content: 'Conoce nuestros productos, lo más selecto de las mejores marcas para el mercado hospitalario.' },
        { hid: 'og-image', name: 'og:image', content: 'https://firebasestorage.googleapis.com/v0/b/di-medical-del-sur.appspot.com/o/static%2FlogoCorporativo.png?alt=media&token=ca32a756-7656-4259-b5b7-921c11a0a3e8' }
      ]
})

export default productMeta