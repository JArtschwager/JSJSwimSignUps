//this page is not yet working.

var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
  // Get all classes
  app.get("/api/addclass", function(req, res) {
      db.Class_instances.findAll({}).then(function(results) {
      res.json(results);
    });
  });

  // Add a class instance
  app.post("/api/new", function(req, res) {
    console.log("class added:");
    console.log(req.body);
    db.Class_instances.create({
    class_instance_id: req.body.class_instance_id,
    class_ID: req.body.class_ID,
    week_day: req.body.week_day,
    start_date: req.body.start_date,
    end_date: req.body.end_date,
    length: req.body.length,
    seats_available: req.body.seats_available,
    seats_total: req.body.seats_total,
    seats_filled: req.body.seats_filled
    })
    .then(function(addedClass) {
      res.json(addedClass);
    });
  });


};
