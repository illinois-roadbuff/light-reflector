export default defineAppConfig({
  ui: {
    colors: {
      primary: "green",
      neutral: "slate",
    },
    footer: {
      slots: {
        root: "border-t border-default",
        left: "text-sm text-muted",
      },
    },
  },
  seo: {
    siteName: "Nuxt Docs Template",
  },
  header: {
    title: "Light Reflector",
    to: "/",
    logo: {
      alt: "",
      light: "",
      dark: "",
    },
    search: true,
    colorMode: true,
    links: [
      {
        icon: "i-simple-icons-codeberg",
        to: "https://codeberg.org/project-roadwork/light-reflector.git",
        target: "_blank",
        "aria-label": "Codeberg",
      },
    ],
  },
  footer: {
    credits: `Copyright © ${new Date().getFullYear()} Illinois_Roadbuff (Rogue Jr)`,
    colorMode: false,
    links: [
      {
        icon: "i-simple-icons-discord",
        to: "https://illinois-roadbuff.is-a.dev/to/?discord",
        target: "_blank",
        "aria-label": "Nuxt on Discord",
      },
      {
        icon: "i-simple-icons-codeberg",
        to: "https://codeberg.org/project-roadwork/light-reflector.git",
        target: "_blank",
        "aria-label": "Light Reflector on Codeberg",
      },
    ],
  },
  toc: {
    title: "Table of Contents",
    bottom: {
      title: "Community",
      edit: "https://github.com/illinois-roadbuff/light-reflector/edit/main/content",
      links: [
        {
          icon: "i-lucide-star",
          label: "Star on Codeberg",
          to: "https://codeberg.org/project-roadwork/light-reflector",
          target: "_blank",
        },
        {
          icon: "i-lucide-book-open",
          label: "Light Reflector docs",
          to: "https://illinois-roadbuff.is-a.dev/light-reflector/",
          target: "_blank",
        },
      ],
    },
  },
});
