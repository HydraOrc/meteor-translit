Package.describe({
  name: 'hydraorc:translit',
  version: '1.0.7',
  // Brief, one-line summary of the package.
  summary: 'URL-safe transliteration for Meteor.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/hydraorc/meteor-translit.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1');
  api.addFiles('translit.js');
  api.export('translit');
});
