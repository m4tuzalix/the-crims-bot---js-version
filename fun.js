function login(){
    var login = document.querySelector("input[placeholder='Username']").value = "BananowyMati"
    var password = document.querySelector("input[name='password']").value = "bananek"

    document.querySelector("button[class='btn btn-large btn-inverse']").click();
};






function robber(){
    var final = 0
    var dropDown = document.querySelectorAll("select[id='singlerobbery-select-robbery'] option");
    dropDown.forEach((opcja) =>{
        if (opcja.innerText.includes("100")){
            final++;
        }
    });
    var choose_rob = document.querySelector("select[id='singlerobbery-select-robbery']").selectedIndex = final;
    var test = document.querySelectorAll("ul.dropdown-menu li");
    test.forEach((li)=>{
        if(li.innerText.includes("Rangi")){
            li.click();
        }
    });                  
};

function get_hp(){
    var hp = document.querySelector("div.progressbar-bar").offsetWidth;
    var current_hp = Math.round(100*hp / 128); // calculates the current hp
    return current_hp;
}; 

function got_to_night_club(){
    var which_club = Math.floor(Math.random() * 8) /// random number from 0-8
    console.log(which_club)
    var main_club = document.querySelector("div[id='menu-sprite-nightlife'").click();
    var all_clubs = document.getElementsByClassName("btn btn-inverse btn-small pull-right");
    all_clubs[which_club].click(); // enter the random club
}

var best_option;
function max_hp(){ // calculates the amount of drugs to buy
    all_possible_options = []
    var percent_restore = document.querySelectorAll("table.table.table-condensed.table-top-spacing tr td:nth-child(2)");
    percent_restore.forEach((td)=>{
        all_possible_options.push(td.innerText.slice(0,(td.innerText.length-1))) /// trims the last character of each element and appends to an array
    });

    best_option = (Math.max.apply(Math,all_possible_options)) // max number from array
    var current_hp = parseInt(get_hp())
    var hp_needed = Math.round(100/parseFloat(best_option)) - Math.round(current_hp / parseFloat(best_option))
    
    return hp_needed;
};
max_hp();
function restore_hp(){
    var inputs = document.querySelectorAll("table.table.table-condensed.table-top-spacing tr td:nth-child(4)");
    inputs.forEach((input)=>{
        var all_siblings = []
        var sibling = input.parentNode.firstChild;
        for(;sibling; sibling = sibling.nextSibling){
            if(sibling.innerText == best_option+"%"){
                var final_input = input.querySelector("input.nightlife_drug_quantity").value = max_hp();
                var buy = setTimeout(() => {
                    document.querySelector("button[class='btn btn-inverse btn-large pull-right'").click();
                }, 1000);
            }
        }
    
    });
};
restore_hp();


var work = setInterval(() => {
    if(get_hp() > 10){
        robber();
    }
    else{
        clearInterval(work);
    }
}, 1000);