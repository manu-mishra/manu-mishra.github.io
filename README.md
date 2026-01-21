# Personal Website & Blog

Built with Docusaurus 3.8.0 - A modern static website generator.

## Requirements

- Node.js >= 18.0
- npm

## Development

```bash
cd ui
npm install
npm start
```

Opens development server at `http://localhost:3000`

## Deployment

### Build & Deploy to GitHub Pages

```bash
# Build the site
cd ui
npm run build

# Copy to docs directory
cd ..
cp -r ui/build/* docs/

# Commit and push
git add .
git commit -m "Deploy updates"
git push
```

### Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm run serve` - Serve production build locally
- `npm run deploy` - Deploy to GitHub Pages (if configured)
- `npm run clear` - Clear Docusaurus cache

## Project Structure

```
├── ui/                 # Docusaurus source
│   ├── blog/          # Blog posts (.mdx)
│   ├── src/           # React components
│   ├── static/        # Static assets
│   └── package.json   # Dependencies & scripts
├── docs/              # GitHub Pages output
└── README.md          # This file
```

## Adding Blog Posts

1. Create `.mdx` file in `ui/blog/` with format: `YYYY-MM-DD-slug.mdx`
2. Add frontmatter with metadata
3. Build and deploy:
   ```bash
   cd ui
   npm run build
   cd ..
   cp -r ui/build/* docs/
   git add .
   git commit -m "Add new blog post"
   git push
   ```
