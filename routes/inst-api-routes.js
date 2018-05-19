var db = require("../models");


module.exports = function (app) {

app.get("/api/instance", function (req, res) {
  db.Class_instance.findAll({
    include: [db.Class_description]
  }).then(function (dbClass_instance) {
    res.json(dbClass_instance);
  });

});

app.get("/api/instance/:id", function(req, res) {
  // Here we add an "include" property to our options in our findOne query
  // We set the value to an array of the models we want to include in a left outer join
  // In this case, just db.Post
  db.Class_instance.findOne({
    where: {
      id: req.params.id
    },
    include: [db.Class_description]
  }).then(function(dbClass_instance) {
    res.json(dbClass_instance);
  });
});

app.post("/api/instance", function (req, res) {
  // console.log(req.body);
  db.Class_instance.create({
    week_day: req.body.week_day,
    time: req.body.time,
    start_date: req.body.start_date,
    end_date: req.body.end_date,
    seats_total: req.body.seats_total,
    seats_filled: req.body.seats_filled,
    ClassDescriptionId: req.body.ClassDescriptionId
    //i can add in a .then here for instance when ready.
  }).then(function (dbInst_description) {
    // db.push(req.body);
      include: [db.Class_description]
    res.json(dbInst_description);
    console.log(dbInst_description);
  });
});

app.put("/api/instance", function (req, res) {

});

};