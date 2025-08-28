# Shop README

This directory contains information and guidelines for managing the store on Ucique.

## How to add products via Printify

1. **Create products on Printify / Printful / Shopify**: Use your print-on-demand provider of choice to design and create each product. When the product is ready, publish it in your store (e.g., Printify or Shopify storefront). Make note of the product page URL.
2. **Export product images**: Download the product image(s) from your print-on-demand provider. Save the images into this repository under `content/shop/img/`. Each image filename should match the product slug or descriptive name (e.g., `ritual-hoodie.jpg`). Commit these images to the repository.
3. **Update `products.json`**: Open `content/shop/products.json` and add a new object for each product:
   ```json
   {
     "title": "Ritual Hoodie",
     "price": 59,
     "image": "/shop/img/ritual-hoodie.jpg",
     "url": "https://your-storefront.com/products/ritual-hoodie"
   }
   ```
   
   - `title`: the product name (displayed on the shop page).
   - `price`: the price in euros (or your currency).
   - `image`: relative path to the product image in `/shop/img/`.
   - `url`: link to the product page on your storefront. If you don’t have a storefront yet, leave the URL as `#` or use a `mailto:` link.

4. **Commit and deploy**: After adding images and updating `products.json`, commit the changes to the `main` branch. The GitHub Actions workflow will rebuild the site and deploy updated shop data automatically.

## Adding new artwork or blog posts

- **Artwork**: Place image files into `content/art/` and commit. The build script will automatically generate an art gallery from these images.
- **Blog posts**: Add a new Markdown file to `content/posts/` with front matter specifying `title`, `date`, and an optional `excerpt`. Write your post content below the front matter. Commit to publish.

## Contact and print-on-demand options

If you aren’t ready to link directly to a storefront, set each product’s `url` to a `mailto:` link (e.g., `mailto:hello@ucique.com?subject=Product%20inquiry`). This allows customers to email you about products while you work on launching the store.

---

This README provides guidelines to ensure consistent formatting and makes it easy to keep your shop up to date with new products, art, and posts.
