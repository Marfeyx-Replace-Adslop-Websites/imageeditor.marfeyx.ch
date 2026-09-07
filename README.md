# Atelier Image Studio

A premium, private browser-based image editor. All editing happens locally: no server uploads, accounts, API keys, or sticker CDN requests.

Built with React, TypeScript, Vite, Fabric.js, HeroUI 3, and Tailwind CSS 4.

## Features

- Open PNG, JPEG, WebP, GIF, BMP, SVG, AVIF, and TIFF files
- Draw, erase, crop, resize, and flip
- Add text, shapes (rectangle, circle, line, arrow, star, callout), and local emoji stickers
- Image adjustments: brightness, contrast, saturation, blur, pixelate, grayscale, sepia
- Export as PNG, JPEG, WebP, or SVG with configurable quality and scale
- Keyboard shortcuts: Ctrl+Z undo, Ctrl+Y redo, Delete to remove selection
- Drag-and-drop file opening
- Undo / redo history
- Responsive editing workspace with automatic canvas fitting on smaller screens

## Local Development

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
```

## Deployment

Deploys automatically to GitHub Pages on push to `main` via the included GitHub Actions workflow. Vite uses relative asset paths, and `public/CNAME` preserves `imageeditor.marfeyx.ch` in the deployment artifact.

## License

[MIT](LICENSE)
