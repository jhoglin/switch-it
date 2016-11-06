$(function () {
    console.log("starting the world");

    $("#btnGet").click(function () {
        console.info("Clicked");


        $.ajax({

            url: 'http://switchit.mobilportal.se/',
            data: { booking_type: "check", sys_id: "1234", p_nr: "123", p_pw: "1234" },
            type: 'POST',
            crossDomain: true,
            dataType: 'jsonp',
            success: function (data) { console.log("Success"); console.log(data); },
            error: function (data) { console.log("Failed"); console.log(data); }
        });



    });

});
