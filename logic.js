function pushData(type, data) {
    name = $("#name" + type).val();
    number = parseInt($("#number" + type).val());
    nextNumber = $("#number" + type).val(number + 1);

    datetime = getDatetime();

    data['waitingList'][type][number] = {
        'name': name,
        'waitingDate': datetime
    };
    $("#name" + type).val("");
    return data;
}

function getDatetime() {
    today = new Date();
    date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    dateTime = date + ' ' + time;

    return dateTime;
}