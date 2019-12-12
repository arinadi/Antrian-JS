class Render {
    constructor(setting) {
        this.setting = setting;
    }
    renderPage() {
        var data = [];
        this.renderForm();
        data['waitingList'] = this.renderList();

        return data
    }
    renderForm() {
        var getPart = $("#partForm").clone();
        var htmlPart = getPart[0]['innerHTML'];
        var i = 1;
        var html = "";

        $.each(this.setting.antrian_type, function (key, value) {
            html += replaceType(htmlPart, value.name);
            i++;
        })
        $("#formAntrian").html(html);
    }
    renderList() {
        var data = [];
        var getPart = $("#partList").clone();
        var htmlPart = getPart[0]['innerHTML'];
        var i = 1;
        var html = "";

        $.each(this.setting.antrian_type, function (key, value) {
            html += replaceType(htmlPart, value.name);
            data[value.name] = [];
            i++;
        })
        $("#listAntrian").html(html);
        return data;
    }

    renderTable(type, data) {
        var html = "";

        var array = data['waitingList'][type];
        console.log(array);
        for(var i in array){
            console.log(i);
            html += "<tr><td>"+i+"</td><td>"+array[i]['name']+"</td></tr>";
        }
        // console.log(html);
        $("#table"+type).html(html);
    }
}

function replaceType(text, type) {
    return text.replace(/{TYPE}/gi, type)
}

render = new Render(setting);