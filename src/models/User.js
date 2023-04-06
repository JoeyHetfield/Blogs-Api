module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  }, {
    timestamps: false,
    tableName: 'users',
    underscorede: true,
  });


  User.associate = (models) => {
    User.hasMany(models.blog_post, // alterar
      { foreignKey: 'userId', as: 'postsUser' })
  }

  return User;
}