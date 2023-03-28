# Hygraph ⨯ Next.js Image Component with Custom Loader

[Join our Slack](https://slack.hygraph.com)

This example demonstrates how to use a [custom loader](https://nextjs.org/docs/api-reference/next/image#loader) function with [Next.js Image Component](https://nextjs.org/docs/api-reference/next/image) and Hygraph assets.

This allows you to perform [asset transformations](https://hygraph.com/docs/content-api/assets#transformations) using the Hygraph CDN, rather than the default Next.js loader.

> By using a custom loader, you will forgo the image caching provided by the default Next.js loader. Learn more [here](https://nextjs.org/docs/basic-features/image-optimization#caching).

• [Demo](https://hygraph-with-nextjs-image-loader.vercel.app)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/hygraph/hygraph-examples/tree/master/with-nextjs-image-loader) [![Clone project](https://hygraph.com/button)](https://app.hygraph.com/clone/0ff23f7a41ce4da69a366ab299cc24d8)

## How to Use

### Download Manually

```bash
npx degit hygraph/hygraph-examples/with-nextjs-image-loader with-nextjs-image-loader
```

Install & Run:

```bash
cd with-nextjs-image-loader
npm install
npm run dev
# or
cd with-nextjs-image-loader
yarn
yarn dev
```

### Run on Codesandbox

[![Develop with Codesandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/hygraph/hygraph-examples/tree/master/with-nextjs-image-loader)
