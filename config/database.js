module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'suadetwo_strapi_test'),
      user: env('DATABASE_USERNAME', 'javito'),
      password: env('DATABASE_PASSWORD', 'javi5450'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
