sequelize model:create --name users --attributes username:string
sequelize model:create --name topics --attributes title:string
sequelize model:create --name messages --attributes body:string

sequelize migration:create --name user-constraints
