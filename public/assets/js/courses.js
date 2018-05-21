// $(document).ready(function () {

//     $("#signup-btn").click(function() {
//         console.log($('.coursesadmin').serialize())
//         $.post('/api/courses', $('.coursesadmin').serialize(), function(data) {
//             // console.log(data);
//             createCourseRow(data);
//         },
//         'json'
//     );
//     });
// .courseadmin in the html button submit


//     function createCourseRow(instanceData) {
//         var newTr = $("<tr>");
//         //check where i'm pulling description from.  may be the wrong word. 
//         // newTr.data("description", instanceData);
//         newTr.append("<td>" + instanceData.Class_description.class_name + "</td>");
//         newTr.append("<td>" + instanceData.week_day + "</td>");
//         newTr.append("<td>" + instanceData.time + "</td>")
//         newTr.append("<td>" + instanceData.start_date + "</td>");
//         newTr.append("<td>" + instanceData.end_date + "</td>");
//         newTr.append("<td style='text-align: center;'>" + instanceData.seats_total+ "</td>");
//         newTr.append("<td style='text-align: center;'>" + instanceData.seats_filled+ "</td>");
//         //line below needs info to capture the info from the table description
//         $("#swimclass-table tbody").append(newTr);

//         return newTr;
//     };




//     //function to add a row? not sure if this is currently being used or was last nights testing.  will need to look with console logs.
//     function addingRows(data) {
//         var rowsToAdd = [];
//         for (var i = 0; i < data.length; i++) {
//         rowsToAdd.push(createDescripRow(data[i]));
//         }
//         // console.log(rowsToAdd);
//      };

       
//     function getcourses() {
//         $.get("api/courses", function (data) {
//             for (i = 0; i <data.length; i++) {
//                 createCourseRow(data[i]);
//             };
//         });
//     };
// createCourseRow(); 
  
// });
