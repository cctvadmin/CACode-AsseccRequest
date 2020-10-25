// 这是加的行
var data_item = "<div class=\"row\"><div class=\"col-xs-12 col-sm-5 col-md-5 col-lg-5\"><div class=\"form-group\"><label for=\"inputkey\"class=\"col-sm-2 control-label\">key:</label><div class=\"col-sm-10\"><input type=\"text\"name=\"key\"class=\"form-control inputkey\"value=\"\"required=\"required\"pattern=\"\"title=\"\"></div></div></div><div class=\"col-xs-12 col-sm-5 col-md-5 col-lg-5\"><div class=\"form-group\"><label for=\"inputvalue\"class=\"col-sm-2 control-label\">value:</label><div class=\"col-sm-10\"><input type=\"text\"name=\"value\"class=\"form-control inputvalue\"value=\"\"required=\"required\"pattern=\"\"title=\"\"></div></div></div><div class=\"col-xs-12 col-sm-1 col-md-1 col-lg-1\"><button class=\"btn btn-wide delete_line\"onclick=\"delete_line(this)\"><span class=\"fui-cross\"></span>删除本行</button></div></div><hr>"
$('#add_data').click(function () {
    $('#data').append(data_item)
});

$('#cancel').click(function () {
    $('#data').html(data_item)
});

function delete_line(doc) {
    $(doc).parent().parent().next().remove()
    $(doc).parent().parent().remove()
}

$('#send').click(function () {
    var link = $('#link').val()
    var keys = []
    var values = []
    $('.inputkey').each(function () {
        keys.push($(this).val() === "" ? "" : $(this).val())
    })
    $('.inputvalue').each(function () {
        values.push($(this).val() === "" ? "" : $(this).val())
    })
    da = {
        "url": link,
        "method": $('#method').val(),
        "keys": keys,
        "values": values
    }
    $.get('/access', da, function (d) {
        $('#result').text(d)
    })
})