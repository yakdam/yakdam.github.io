# Yakdam

Website for Yakdam, backend systems, automation, and infrastructure consultancy.

Single static page, no build step. Open `index.html` directly, or serve it with GitHub Pages.

## Deploying with GitHub Pages (user site)

This repo is named `yakdam.github.io`, which is GitHub's special name for a user or org site. Once pushed to the `yakdam` GitHub account:

1. Go to the repo's **Settings > Pages**.
2. Source should already default to the `main` branch, root folder, since this is a `<username>.github.io` repo.
3. The site is live at `https://yakdam.github.io/` within a few minutes.

## Custom domain: yakd.am

The `CNAME` file in this repo already contains `yakd.am`, which tells GitHub to serve this site on that domain instead.

To finish the setup, point the DNS for yakd.am at GitHub:

- **Apex domain (yakd.am itself):** add A records pointing to GitHub's Pages IPs:
  - 185.199.108.153
  - 185.199.109.153
  - 185.199.110.153
  - 185.199.111.153
- **www subdomain (optional):** add a CNAME record for `www` pointing to `yakdam.github.io`.

After DNS propagates (can take up to a few hours), go to **Settings > Pages** in the repo and enter `yakd.am` as the custom domain if it isn't already picked up from the CNAME file, then enable "Enforce HTTPS" once the certificate is issued.
