import * as glamor from 'glamor'

declare module 'glamor' {
    export function rehydrate(ids: string[]): void

    interface Plugins {
        add: (plugin: Function) => void
        remove: (plugin: Function) => void
        clear: () => void
    }

    export const plugins: Plugins
}
