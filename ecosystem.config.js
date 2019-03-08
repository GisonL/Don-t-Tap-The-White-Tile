module.exports = {
  app: [
    {
      name: 'tap-tap_node',
      script: './app.js',
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ],
  deploy: {
    production: {
      user: 'root',
      host: '111.230.110.59',
      ref: 'origin/master',
      repo: 'git@github.com:GisonL/Don-t-Tap-The-White-Tile.git',
      path: '/root/Don-t-Tap-The-White-Tile',
      'post-deploy':'git pull && npm -v'
      // 'post-deploy':'git pull && npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
}
