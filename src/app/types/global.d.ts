/* eslint-disable @typescript-eslint/naming-convention */
declare module '*.scss' {
    type IClassnames = Record<string, string>
    const classNames: IClassnames
    export = classNames
}

declare module '*.svg' {
    import type React from 'react'
    const SVG: React.VFC<React.SVGProps<SVGSVGElement>>
    export default SVG
}

declare module '*.png';
declare module '*.jpeg';
declare module '*.jpg';

declare const __IS_DEV__: boolean
