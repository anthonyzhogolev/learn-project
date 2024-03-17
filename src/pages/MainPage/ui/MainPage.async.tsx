import { lazy } from 'react'

const delay = async (delay: number) => await new Promise((resolve, reject) => setTimeout(resolve, delay))

export const MainPageAsync = lazy(async () => {
    return await import('./MainPage')
})
