/* eslint-disable i18next/no-literal-string */
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

void i18n
    .use(initReactI18next)
    .init({
        lng: 'ru',
        fallbackLng: 'ru',
        debug: false,
        resources: { ru: { translations: {} } }
    })

export default i18n