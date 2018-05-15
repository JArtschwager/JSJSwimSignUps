var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
app.get("/api/instance", function(req, res) {
    db.Class_instance.findAll({
      // include: [db.some other table when ready]
    }).then(function(dbClass_instance) {
      res.json(dbClass_instance);
    });
  });
};
