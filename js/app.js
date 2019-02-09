util.initData({
    obj:{},
}, "projects.json");

var user = util.initData({
    type:"",
    username:"",
    key:"",
    id:"",
}, "user.json"); 

//hosting
// var hosting = "https://psu-eng.000webhostapp.com/scripts/";
var hosting = "http://localhost/psu_eng/scripts/";
// Date Constants
var today = date.getDate({format:"g"});
var tomorrow = date.getDate({format:"g", add:{
    day: 1,
}});
var monthLater = date.getDate({format:"g", add:{
    month:1
}});
// Time constant
var currentTime = date.getTime({
    isMilitaryTime: true,
});
var day3 = date.getDate({
    format: "e",
    add:{
        day:3,
    }
});

var navbar = new Vue({
    el:".navbar",
    data:{
        user:user,
        id: 1,
        proj_name: "Building Name",
        campus: "",
    },
    mounted: function(){
        var obj = util.loadData("projects.json");
        this.proj_name = obj.proj_name;
        this.campus = obj.campus;
        // console.log(obj);
    },
    methods:{
        back:function(){
            window.history.back();
        },
        logout: function(obj){
            console.log(obj);
            user.username = "";
            user.id = "";
            user.key = "";
            user.type = "";
            util.saveData("user.json",user);
            window.location = "login.html";
        },
    }
});

var rotate;
function showPreload(onComplete){
    $("#preloader").html(`
        <div class="my-dialog">
            <div class="my-dialog-content" style="width:300px;margin-top:10vh;">
                <div class="my-dialog-header align-center">
                    <p>Please Wait...</p>
                </div>
                <div class="my-dialog-body">
                    <div class="block">
                        <div id="_preloader"></div>
                    </div>
                </div>
            </div>
        </div>
    `);

    var rotation = 10;
    rotate = setInterval(function(){
        $("#_preloader")[0].style.transform = "rotate("+rotation+"deg)";
        rotation = rotation + 10; 
    },10);
}

function hidePreload(onComplete){
    $("#preloader").html(``);
    clearInterval(rotate);
    if (onComplete) {
        onComplete();
    }
}

function showDialog(msg,content,onComplete){
    var msg = msg?msg:"";
    var content = content?content:"";
    $("#preloader").html(`
        <div class="my-dialog">
            <div class="my-dialog-content" style="width:300px;margin-top:10vh;">
                <div class="my-dialog-header align-center">
                    <p>`+msg+`</p>
                </div>
                 <div class="my-dialog-body">
                        <p class="align-center">`+content+`</p>
                    <div class="block align-center">
                    </div>
                </div>
            </div>
        </div>
    `);
    setTimeout(function(onComplete){
        hidePreload(onComplete);
    },3000);
}


$(document).ready(function(){

    // ============================================
    // For modal events
    // ============================================
    // closes modal on window click
    $(window).click(function(event){
        var modals = $(".my-modal");
        for (var i = 0; i < modals.length; i++) {
            if (event.target == modals[i]) {
                modals[i].style.display = "none";
                break;
            }
        }
    });

    // opens modal
    $(".open-modal").click(function(){
        var modalBtn = this;
        var modalToOpen = modalBtn.attributes['open-modal'].value;
        // console.log(modalToOpen);
        var modals = $(".my-modal");
        for (var i = 0; i < modals.length; i++) {
            if (modals[i].attributes['modal-name']) {
                if (modals[i].attributes['modal-name'].value == modalToOpen) {
                    modals[i].style.display = "block";
                    break;
                }
            }
        }
    });

    // closes modal
    $(".close-modal").click(function(){
        var modals = $(".my-modal");
        for (var i = 0; i < modals.length; i++) {
            if (modals[i].style.display=="block") {
                modals[i].style.display = "none";
                break;
            }
        }
    });
});