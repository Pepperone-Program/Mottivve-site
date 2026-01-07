
export const appConfig = {
  name: 'Mottivve',
  description: 'Site oficial da Mottivve',
  version: '1.0.0',

  contact: {
    email: 'derickcampossantos1@gmail.com',
    phone: '+55 11 986261007',
  },

  // Navigation items
  navigation: {
    main: [
      { name: 'Sobre', href: '/about' },
      { name: 'Loja', href: 'https://mottivve.lojavirtualnuvem.com.br/' },
      { name: 'Contato', href: '/contact' },
    ],
    auth: [
      { name: 'Login', href: 'https://mottivve.lojavirtualnuvem.com.br/account/login/' },
      { name: 'Iniciar', href: 'https://mottivve.lojavirtualnuvem.com.br/' },
    ],
  },

  branding: {
    logo: '/images/MOTTIVVE_LOGOMARCA_01.png',
    logoAlt: 'Mottivve logo',
    favicon: '/images/MOTTIVVE_LOGOMARCA_01.png',
  },
};

export default appConfig;