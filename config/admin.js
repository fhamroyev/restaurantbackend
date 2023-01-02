module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f74ad15264e8e28a8e35713ef29f3c1d'),
  },
});
