/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://cruxstudios.dev',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      // Block AI training bots — they add no SEO value
      { userAgent: 'GPTBot', disallow: '/' },
      { userAgent: 'Google-Extended', disallow: '/' },
      { userAgent: 'CCBot', disallow: '/' },
      { userAgent: 'anthropic-ai', disallow: '/' },
    ],
    additionalSitemaps: [],
  },
  // Single-page site, no exclusions needed
  exclude: [],
}
