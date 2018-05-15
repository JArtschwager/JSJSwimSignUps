var db = require("../models");

module.exports = function(app) {
  app.get("/api/description", function(req, res) {
    db.Class_description.findAll({
      include: [db.instance]//adding the coresponding instance folder.
    }).then(function(dbClass_description) {
      res.json(dbClass_description);
    });
  });

};