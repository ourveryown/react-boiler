import i18next from 'i18next'
import { reactI18nextModule } from 'react-i18next'

import auth from 'domains/auth/dictionary'
import home from 'domains/home/dictionary'

const domains = [auth, home]
const languages = ['en']

const resources = languages.reduce((acc, language) => {
  const translation = domains.reduce((translations, domain) => {
    translations = { ...translations, ...domain[language] }
    return translations
  }, {})
  acc[language] = {
    translation
  }
  return acc
}, {})

i18next.use(reactI18nextModule).init({
  interpolation: {
    // React already does escaping
    escapeValue: false
  },
  lng: 'en',
  resources
})

export default i18next
