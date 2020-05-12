module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'admin',
  database: 'online_budget',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  }
};