import path from 'path'
import type webpack from 'webpack'
import { type BuildEnv } from './config/build/types/config'
import { buildWebpackConfig } from './config/build/buildWebpackConfig'

export default function (env: BuildEnv) {
    const mode = env.mode || 'development'
    const isDev = mode === 'development'

    const PORT = env.port || 3000
    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths: {
            entry: path.resolve(__dirname, 'src/index.tsx'),
            build: path.resolve(__dirname, 'build'),
            html: path.resolve(__dirname, 'public', 'index.html'),
            src: path.resolve(__dirname, 'src')
        },
        isDev,
        port: PORT
    })
    return config
}
