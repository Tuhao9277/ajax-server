function ajax(options) {
    let defaults = {
        type: "get",
        jsonpCallback: "callback"
    };
    Object.assign(defaults, options);
    if (defaults.type == "jsonp") {
        let _script = document.createElement("script");

        // /.+\?(([^=]+=[^=]+))|()/

        // _script.src =defaults.url + defaults +defaults.jsonpCallback;
        let funcname = "$jsonp_" + new Date().getTime + Math.round(Math.random() * 1000000);
        whindow[funcname] = function (data) {
            defaults.success(data);
            _script.remove();
            delete window[funcname];
        }
        if (defaults.url.includes("?")) {
            _script.src = defaults.url + "&" + defaults.jsonpCallback + "=" + funcname;
        }
        else {
            _script.src = defaults.url + "?" + defaults.jsonpCallback + "=" + funcname;
        }
        document.body.appendChild(_script);
    } else {


        let xhr = null;
        if (window.VBArray) {
            xhr = new ActiveXObject("Msxml.XMLHTTP");
        } else {
            xhr = new XMLHttpRequest();
        }
        xhr.open(defaults.type, defaults.url);
        xhr.onload = function () {
            // 如果存在回调函数，则执行
            defaults.success ? defaults.success(JSON.parse(xhr.response)) : "";
        }
        // 如果是get请求
        if (defaults.type == "get") {
            xhr.send();
        }
        // 如果是post请求
        if (defaults.type == "post") {
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.send(defaults.data);
        }
    }
}