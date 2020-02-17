
const username = "login"
const password = "password"
const token = get_HTML()["_token"]
const action = get_HTML()["action"]
const data = "username="+username+"&password="+password+"&token="+token+"&action="+action+"&pl=&env="

// sends the xhr request with the above data ^^^^
function send(method,url,data){
    const xhr = new XMLHttpRequest();
    const promise = new Promise(function(resolve,reject){
        xhr.open(method, url)
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.onload = function(){
            const raw_content = String(xhr.response)
            const start_index = raw_content.indexOf("request")
            const end_index = raw_content.indexOf("</settings>")
            const x_request = raw_content.substring(start_index+("request=").length+1, end_index-3)
            resolve(x_request)
        };
        xhr.send(data)
    });
    return promise;
};

// async function capturing the response
async function final(){
    await send("POST", "https://www.thecrims.com/login",data).then((responseData)=>{
        console.log(responseData)
    });
};

// returns dynamic attributes required to send the request
function get_HTML(){
    const hidden_values = {};
    var all_inputs = document.querySelectorAll(".form-signin input");
    all_inputs.forEach((single)=>{
        const single_name = single.getAttribute("name")
        const single_value = single.getAttribute("value")
        if(single_name === "_token" || single_name === "action"){
            hidden_values[single_name] = single_value;
        };
    });
    return(hidden_values);
};


