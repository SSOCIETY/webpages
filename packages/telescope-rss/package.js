Package.describe({
  name: "telescope:rss",
  summary: "Telescope RSS package",
  version: "0.23.0",
  git: "https://github.com/TelescopeJS/telescope-rss.git"
});

Npm.depends({rss: "1.1.1"});

Package.onUse(function (api) {

  api.use(['telescope:core@0.23.0']);

  api.addFiles(['lib/server/rss.js', 'lib/server/routes.js'], ['server']);

});
