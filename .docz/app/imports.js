export const imports = {
  'index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "index" */ 'index.mdx'),
  'lib/avatar/Avatar.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "lib-avatar-avatar" */ 'lib/avatar/Avatar.mdx'),
}
