# Bella Italian Foods

This is the official website for Bella Italian Foods, an online store specializing in authentic Italian food products. This project is built using the [Astro](https://astro.build/) web framework.

## 🚀 Project Structure

The project follows a standard Astro project layout:

```text
/
├── public/
│   └── images/
│       ├── brands/
│       └── products/
├── src/
│   ├── assets/
│   ├── components/
│   │   └── Welcome.astro
│   ├── content/
│   │   └── products/
│   │       ├── mellin/
│   │       └── plasmon/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       ├── index.astro
│       ├── contact.astro
│       ├── shop.astro
│       └── success.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

Key directories:

- `src/pages/`: Contains the pages of the site.
- `src/components/`: Contains reusable Astro components.
- `src/layouts/`: Contains layout components for pages.
- `src/content/`: Contains content collections, like products.
- `public/`: Contains static assets like images.

## 🧞 Commands

All commands are run from the root of the project in a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

