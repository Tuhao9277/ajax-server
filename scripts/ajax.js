function ajax(options){
    let defaults  = {type:"get"};
    Object.assign(defaults,options);
    let xhr = null;
    if(window.VBArray){
        xhr = new ActiveXObject("Msxml.XMLHTTP");
    }else{
        xhr = new XMLHttpRequest();
    }
    xhr.open(defaults.type,defaults.url);
    xhr.onload = function(){
        // 如果存在回调函数，则执行
        defaults.success ? defaults.success(JSON.parse(xhr.response)):"";
    }
    // 如果是get请求
    if(defaults.type == "get"){
        xhr.send();
    }
    // 如果是post请求
    if(defaults.type == "post"){
        xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        xhr.send(defaults.data);
    }
}