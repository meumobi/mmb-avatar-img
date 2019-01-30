exports.config = {
  namespace: 'mmbavatarimg',
  generateDistribution: true,
  bundles: [
    { components: ['mmb-avatar-img'] }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
