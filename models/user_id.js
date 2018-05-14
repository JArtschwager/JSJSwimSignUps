
// //sumathi is working on this page
//---------------user ID---------------------//
module.exports = function (sequelize, DataTypes) {
    var User_ID =sequelize.define('User_ID', {
        name: {
          type: DataTypes.STRING
        },
        family_code: {
          type: DataTypes.UUID
        },
        type: {
          type: DataTypes.STRING
          //parent or child
        },
    });
    return User_ID;
};  