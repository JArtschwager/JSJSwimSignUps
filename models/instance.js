// --------------------class instances------------------//
module.exports = function (sequelize, DataTypes) {
    var Class_instance = sequelize.define("Class_instance", {
      Week_day: {
        type: DataTypes.STRING
      },
      start_date: {
        type: DataTypes.INTEGER
      },
      end_date: {
        type: DataTypes.INTEGER
      },
      seats_available: {
        type: DataTypes.INTEGER
      },
      seats_total: {
        type: DataTypes.INTEGER
      },
      seats_filled: {
        type: DataTypes.INTEGER
      }
    });
    
    Class_instance.associate = function(models) {
        Class_instance.belongsTo(models.Class_description, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Class_instance;
  };
 
  
 
  