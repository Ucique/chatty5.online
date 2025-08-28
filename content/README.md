# Content Directory

This folder contains user-generated content for the site. You can add your own images and markdown posts here without touching any build tooling.

- `posts/` — Place markdown files (`.md`) for the blog. Each file should include a YAML front matter block with at least `title`, `date` (ISO 8601), and `excerpt`.
- `art/` — Store images for the artwork gallery. Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`, `.gif`. Each file will automatically appear in the gallery.
- `shop/` — Contains the product metadata JSON and images for the shop. Edit `products.json` to add products and add matching images into `shop/img/`.
- `forum/` — Reserved for documentation regarding the forum. Discussions are pulled automatically from GitHub; you don’t need to place files here.
- `static/` — Optional directory for other static assets such as favicons or logos.
- `SHOP_README.md` — Documentation for connecting the shop to Printify.

To add content:

1. Add new markdown posts into `posts/` with a unique filename and proper front matter.
2. Drop new images into `art/` to expand the gallery.
3. Update `shop/products.json` and upload product images into `shop/img/` when adding new products.
4. Commit your changes to the `main` branch; GitHub Actions will rebuild and deploy the site.
