$(function () {
    $(".create-form").on('submit', function () {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burgerText").val().trim()
        };


        $.ajax("/api/burgers", {
            type: "POST", data: newBurger
        }).then(function () {
            console.log("new burger");
            location.reload();
        });


    });

    $(".devouredBtns").on('click', function () {
        var id = $(this).data('id');
        var burgerDevoured = $(this).data('devoured');

        var newBurger = {
            devoured: burgerDevoured
        }
        console.log("id");
        console.log("devoured");

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newBurger
        }).then(function () {
            console.log("devoured");
            location.reload();
        });


    });

    $(".deleteBurger").on('click', function (result) {
        var id = $(this).data('id');


        console.log("deletebtn clicked");

        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(function () {
            console.log("deletebtn working");
            location.reload();
        });
    });

});