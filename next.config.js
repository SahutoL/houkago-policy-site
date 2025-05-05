module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // 静的HTMLエクスポートするための設定
  output: "export",
  // ビルド設定
  distDir: "out",
  // ルーティング設定
  exportPathMap: async function () {
    return {
      "/": { page: "/" },
      "/contact": { page: "/contact" },
    };
  },
};
