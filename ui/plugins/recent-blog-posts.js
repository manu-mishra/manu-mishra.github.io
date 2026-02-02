const fs = require('node:fs');
const blogPluginExports = require('@docusaurus/plugin-content-blog');
const defaultBlogPlugin = blogPluginExports.default;

async function blogPluginEnhanced(...pluginArgs) {
  const blogPluginInstance = await defaultBlogPlugin(...pluginArgs);
  const dir = '.docusaurus';

  return {
    ...blogPluginInstance,
    contentLoaded: async function (data) {
      let recentPosts = [...data.content.blogPosts]
        .filter((p) => !p.metadata.unlisted)
        .slice(0, 3);

      recentPosts = recentPosts.map((p) => {
        return {
          id: p.id,
          metadata: p.metadata,
        };
      });

      fs.mkdirSync(dir, { recursive: true });
      const fd = fs.openSync(`${dir}/recent-posts.json`, 'w');
      fs.writeSync(fd, JSON.stringify(recentPosts));

      return blogPluginInstance.contentLoaded(data);
    },
  };
}

module.exports = {
  ...blogPluginExports,
  default: blogPluginEnhanced,
};
