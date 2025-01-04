import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export function buildCssLoader (isDev: boolean) {
    return {
        test: /\.s[ac]ss$/i,
        use: [
        // Creates `style` nodes from JS strings
            MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (filePath: string) => filePath.includes('.module.'),
                        localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]'
                    }
                }
            },
            // Compiles Sass to CSS
            'sass-loader'
        ]
    }
}
