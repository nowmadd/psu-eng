var app = new Vue({
	el:".my-content",
	data:{
		profiles:[],
		user_account:{
			username:"",
			f_name:"",
			m_name:"",
			l_name:"",
			campus:"",
			type:"",
		}
	},
	mounted: function(){
		if (user.type=="") {
            window.location="login.html";
        }
        // ===================================
        // Ajax here
        var thisData = this;

        $.post(hosting+"getProfile.php", {account_id:user.id}, function(result, status){
	        var data = JSON.parse(result);
	        thisData.user_account = data[0];
        });
	},
	methods:{
		showImg: function(building){
			return "background-image: url("+building+")";
		},
		edit: function(thisUser){
			console.log(thisUser);
		},
	}
});