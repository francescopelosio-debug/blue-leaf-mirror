import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.mdx?$/,
  // add remark/rehype plugins here if needed
});

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "mdx"],
  // No "experimental.turbo" here. Use: npx next dev --no-turbo
};

export default withMDX(nextConfig);