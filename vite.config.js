import {defineConfig} from "vite"
console.log("NETLIFY:", process.env.NETLIFY)
console.log('GITHUB_ACTIONS:', process.env.GITHUB_ACTIONS)
export default defineConfig({
base: process.env.NETLIFY ? '/' : '/EjercicioClase3/',
})