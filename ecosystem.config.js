const appName = 'tap-tap_node'
module.exports = {
  apps: [
    {
      name: appName,
      script: 'app.js',
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      },
      error_file: `/var/www/log/${appName}/${appName}.stderr.log/`,
      out_file: `/var/www/log/${appName}/${appName}.stdout.log/`,
      pid_file: `/var/www/log/${appName}/${appName}.pid/`
    }
  ],
  deploy: {
    production: {
      user: 'root',
      host: '111.230.110.59',
      ref: 'origin/master',
      repo: 'git@github.com:GisonL/Don-t-Tap-The-White-Tile.git',
      path: '/var/www/Don-t-Tap-The-White-Tile',
      'post-deploy':
        'git pull && npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
}
