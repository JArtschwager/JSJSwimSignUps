<<<<<<< HEAD
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
=======
$(document).ready(function () {

    $(document).on('click', ".regCourse", function () {
        var classInstanceId = $(this).attr("data-instanceId");
        var ClassDescriptionId = $(this).attr("data-descriptionId");
        var familyId = $(this).attr("data-familyId");


        var id = $(this).data('instanceid');
        var iddiv = $("#div" + id);
        var participantData = [];
        var flag = true;
        var len = iddiv.find("input").length;
        
        var i = 0;
        iddiv.find("input").each(function () {
            i++;
            alert(i);
            var state = $(this).prop("checked");
            var userId = $(this).attr("data-userid");
            var fName = $(this).attr("value");
            if (state) {
                var participantObj = {
                    ClassDescriptionId: ClassDescriptionId,
                    ClassInstanceId: classInstanceId,
                    FamilyId: familyId,
                    UserId: userId,
                    FullName: fName
                };
                console.log(participantObj);
                $.ajax({
                    type: "POST",
                    url: "/api/participant",
                    data: {
                        participant: participantObj
                    }
                }).then(function (resData) {
                    console.log("here");
                    console.log(resData);
                    if (!resData) {
                        participantData.push(participantObj);
                    } else {
                        flag = false;
                    }
                    console.log(participantData);
                    console.log(participantData.length);
                    if (i === len) {
                        if (participantData.length > 0 && flag) {
                            console.log(participantData);
                            $.ajax({
                                type: "POST",
                                url: "/api/classParticipant",
                                data: {
                                    participantData: participantData
                                }
                            }).then(function (resData) {
                                console.log(resData);
                                window.location.replace(resData);
                            })
                        } else if (!flag) {
                            $("#errorData").html("The member(s) already registered for this program!, Choose different participant/program to complete your registration!!</h4>");

                        } else {
                            console.log("You have TO select members to be Registered!!");
                            $("#errorData").html("<h4>You MUST select members to complete registration!!</h4>");
                        }
                    }
                })

            }else if (i === len) {
                if (participantData.length > 0 && flag) {
                    console.log(participantData);
                    $.ajax({
                        type: "POST",
                        url: "/api/classParticipant",
                        data: {
                            participantData: participantData
                        }
                    }).then(function (resData) {
                        console.log(resData);
                        window.location.replace(resData);
                    })
                } else if (!flag) {
                    $("#errorData").html("2)The member(s) already registered for this program!, Choose different participant/program to complete your registration!!</h4>");

                } else {
                    console.log("2)You have TO select members to be Registered!!");
                    $("#errorData").html("2)<h4>You MUST select members to complete registration!!</h4>");
                }
            }
        });

    })

})
>>>>>>> f1c249bd2e83381b0af5585fd09f1dec1de6d8e3
