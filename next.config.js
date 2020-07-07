const withMdxEnhanced = require('next-mdx-enhanced');
const withMDX = require('@next/mdx');

module.exports = withMdxEnhanced({
  layoutPath: 'layouts',
  fileExtensions: ['md', 'mdx'],
  remarkPlugins: [],
  rehypePlugins: [],
  extendFrontMatter: {
    phase: 'prebuild|loader|both',
  },
})(withMDX());
