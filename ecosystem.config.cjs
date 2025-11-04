module.exports = {
  apps: [
    {
      name: 'verificador',
      script: './verificador_automatico.js',
      interpreter: 'node',
      env: {
        NODE_ENV: 'production',
        GMAIL_USER: 'netaru3@gmail.com',
        GMAIL_PASS: 'vhwa ibyy zoyr nwuo',
        GMAIL_DESTI: "netaru3@gmail.com"
      }
    }
  ]
};