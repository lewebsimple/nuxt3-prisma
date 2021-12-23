export interface NuxtPrismaOptions {}

declare module '@nuxt/schema' {
  interface NuxtConfig {
    prisma?: NuxtPrismaOptions
  }
  interface NuxtOptions {
    prisma?: NuxtPrismaOptions
  }
}
