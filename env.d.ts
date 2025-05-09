/// <reference types="vite/client" />
declare const MY_GLOBAL_VARIABLE: string

declare module '*.vue' {
    import { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
  }