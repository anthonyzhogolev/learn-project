import { lazy } from 'react'
const delay = async (delay: number) => await new Promise((resolve, reject) => setTimeout(resolve, delay))

export const AboutPageAsync = lazy(async () => {
    return await import('./AboutPage')
})
