// Meteor package definition.
Package.describe({
  name: 'orlade:js-quantities',
  version: '1.5.0',
  summary: 'JavaScript library for quantity calculation and unit conversion',
  git: 'https://github.com/orlade/js-quantities.git'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0');
  api.export(['Qty']);
  api.addFiles(['src/quantities.js']);
});
