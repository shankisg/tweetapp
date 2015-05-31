function tweet_bind() {
    if ($.trim($(this).val()) == "") {
        $("#id-tweet-button").addClass("disabled");
    } else {
        $("#id-tweet-button").removeClass("disabled");
    }
}

function tweet() {
    var tweet_text = $("#id-tweet-text").val();
    $.post("/tweet", {'tweet_text': tweet_text}, function(data) {
        if(data['status']) {
            $("#id-tweet-text").val("");
            render_post(data['recent_tweets']);
        } else {
            alert(data['msg']);
        }
    });
}

function render_post(data) {
    $("#id-recent-tweets").html("");
    
    $.each(data, function(index, value) {
        $("#id-recent-tweets").append("<pre>" + value + "</pre>");
    });
    
}

$(function () {
    
});
