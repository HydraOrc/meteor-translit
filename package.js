Package.describe({
  name: 'hydraorc:translit',
  version: '2.0.0',
  summary: 'URL-safe transliteration for Meteor.',
  git: 'https://github.com/hydraorc/meteor-translit.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use('hydraorc:string@1.0.4');

  api.addFiles('index.js');

  api.export('translit');
});
