import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "🧠🌳 Chad's Mind Garden",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "www.chadly.net",
    ignorePatterns: [],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Titillium Web",
        body: "Titillium Web",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#FFFFFF", // white for background
          lightgray: "#F8F8F8", // very light gray for subtle contrast
          gray: "#B0B0B0", // lighter gray for standard contrast
          darkgray: "#505050", // medium gray for text
          dark: "#303030", // darker gray for high contrast elements
          secondary: "#2E7D32", // vibrant green for highlights
          tertiary: "#388E3C", // fresh green for accents
          highlight: "rgba(46, 125, 50, 0.15)", // green highlight
          textHighlight: "rgba(56, 142, 60, 0.2)",
        },
        darkMode: {
          light: "#101010", // very dark gray for background
          lightgray: "#181818", // dark gray for subtle contrast
          gray: "#7a8882", // medium dark gray for standard contrast
          darkgray: "#B0D69D", // lighter green-gray for text
          dark: "#E0F0E9", // very light green-gray for high contrast elements
          secondary: "#66BB6A", // medium green-gray for links and highlights
          tertiary: "#81C784", // fresh green for success messages and accents
          highlight: "rgba(102, 187, 106, 0.15)", // medium green-gray highlight
          textHighlight: "rgba(176, 214, 157, 0.3)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem", "git"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
