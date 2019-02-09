
var app = new Vue({
	el:".my-content",
	data:{
		buildings:[],
	},
	mounted: function(){
		var thisData = this;
		if (user.type=="") {
            window.location="login.html";
        }

        $.post(hosting+"finishedProjects.php",{}, function(result, status){
			console.log(result);
			if (status=="success") {
		  		if (result==1) {}else{
		    		var finalResult = JSON.parse(result);
		    		thisData.buildings = finalResult;
		    		thisData.dataLoad= false;
		  		}
			}
		});
	},
	methods:{
		showImg: function(building){
			return "background-image: url("+building+")";
		},
		view: function(obj){
			util.saveData("projects.json", obj);
			window.location= "view_project.html";
		},
	}
});