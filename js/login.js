var app = new Vue({
	el:".my-content",
	data:{
		username:"",
		password:"",
		invalid:false,
	},
	mounted: function(){
		if(user.type=="Admin" || user.type=="admin"){
			window.location="index.html"
		}
	},
	methods:{
		showImg: function(building){
			return "background-image: url("+building+")";
		},
		login: function(){
			var thisData = this;
			$.post(hosting+"login.php", {username:thisData.username, password:thisData.password}, function(result, status){
	          console.log(result);
	          if (status=="success") {
	            if (result==="1"||result===1) {
	              thisData.invalid=true;
	            }else{
	              var userdata = JSON.parse(result);
	              // console.log(userdata);
	              if (userdata.user) {
	                user.user = userdata.user;
	                user.id = userdata.id;
	                user.type = userdata.type.toLowerCase();
	                util.saveData("user.json", user);
					// goto index when successful
					window.location = "index.html";
	              }
	            }
	          }
	        });
		},
	}
});