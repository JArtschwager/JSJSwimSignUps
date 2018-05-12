// CHECK THAT I MAY HAVE THE WRONG CONNECTION FOR UUID.  SEE IF IT WORKS. 
//-------------------------------------------------
var Sequelize = require("sequelize");
var UUID = require("uuid");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");
// Sequelize (capital) references the standard library

//stoll this online and idk what it does
///-----------------------------------//
// sequelize.define('model',` {
//     uuid: {
//       type: DataTypes.UUID,
//       defaultValue: DataTypes.UUIDV1,
//       primaryKey: true
//     }
//   })
//------------------------------------//
// Creates a model that matches up with DB to create a class
module.exports = function (sequelize, DataTypes) {

  var Class_instances = sequelize.define("class_instances", {
    class_instance_id: {
      //   figure how to add in uuid here somewhere
      type: Sequelize.UUID,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    class_ID: {
      type: Sequelize.UUID
    },
    Week_day: {
      type: Sequelize.STRING
    },
    start_date: {
      type: Sequelize.INTEGER
    },
    end_date: {
      type: Sequelize.INTEGER
    },
    length: {
      type: Sequelize.STRING
    },
    seats_available: {
      type: Sequelize.INTEGER
    },
    seats_total: {
      type: Sequelize.INTEGER
    },
    seats_filled: {
      type: Sequelize.INTEGER
    }
  }, {
    timestamps: false
  });

  // Syncs with DB
  // Class_instances.sync();
  return Class_instances;

};