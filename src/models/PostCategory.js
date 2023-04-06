module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
  }, {
    timestamps: false,
    tableName: 'post_categories',
    underscored: true,
  });

  PostCategory.associate = (models) => { 
    models.BlogPost.belongsToMany(models.Category, {
      through: 'PostCategory', foreignKey: 'categoryId', as: 'categories',
    }), 
    models.Category.belongsToMany(models.BlogPost, {
      through: 'PostCategory', foreignKey: 'postId', as: 'posts' 
  }
)}
  return PostCategory;
} 
