import type { StorybookConfig } from '@storybook/react-webpack5'
import { buildCssLoader } from '../build/loaders/buildCssLoader'
import path from 'path'
import type webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

const config: StorybookConfig = {
    stories: [
        '../../src/**/*.mdx',
        '../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'
    ],
    addons: [
        '@storybook/addon-webpack5-compiler-swc',
        '@storybook/addon-onboarding',
        '@storybook/addon-essentials',
        '@chromatic-com/storybook',
        '@storybook/addon-interactions'
    ],
    framework: {
        name: '@storybook/react-webpack5',
        options: {}
    },
    swc: () => ({
        jsc: {
            transform: {
                react: {
                    runtime: 'automatic'
                }
            }
        }
    }),
    webpackFinal: async (config: webpack.Configuration) => {
        config.resolve?.modules?.push(path.resolve(__dirname, '..', '..', 'src'))
        config.module?.rules?.push(buildCssLoader(true))
        config.plugins?.push(new MiniCssExtractPlugin())

        const defaultSvgRule = config.module?.rules?.find(rule => rule !== undefined && rule !== '...' && /svg/.test(rule.test))

        if (defaultSvgRule !== undefined && defaultSvgRule !== '...') {
            defaultSvgRule.exclude = /\.svg$/i
        }

        config.module?.rules?.unshift({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ['@svgr/webpack']
        })

        return {
            ...config
        }
    }
}
export default config
