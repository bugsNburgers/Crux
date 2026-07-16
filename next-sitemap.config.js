/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://cruxstudios.dev',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' }
    ],
    additionalSitemaps: [],
  },
  // Single-page site, no exclusions needed
  exclude: [],
}
