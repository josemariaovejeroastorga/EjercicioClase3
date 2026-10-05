import {defineConfig} from "vite"
console.log('GITHUB_ACTIONS:', process.env.GITHUB_ACTIONS)
export default defineConfig({
base: process.env.NETLIFY ? '/EjercicioClase3/': '/',
})