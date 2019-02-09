
function showDeleteDialog(onYes){
	$("#deleteUser").html(`
        <div class="my-dialog">
            <div class="my-dialog-content" style="width:300px;margin-top:10vh;">
                <span class="close" id="_close-dialog">&times;</span>
                <div class="my-dialog-header align-center">
                    <p>Delete</p>
                </div>
                <div class="my-dialog-body">
                	<div class="block">
	                    <p>Are you sure? </p>
                	</div>
                    <div class="align-center">
	                    <a id="_yesBtn" class="btn grid-5 btn-default text-white bg-red shadow-hover">
	                        <i class="material-icons" style="position:relative; top:7px;margin-top:-12px;">delete</i>  Yes
	                    </a>

                    	<a id="_noBtn" class="btn grid-5 btn-default text-white bg-green shadow-hover">
	                        <i class="material-icons" style="position:relative; top:7px;margin-top:-12px;">close</i> Cancel
	                    </a>
                    </div>
                </div>
            </div>
        </div>
	`);
	$("#_yesBtn").click(function(){
		$("#deleteUser").html(``);
		if (onYes) {onYes();}
	});

	$("#_noBtn").click(function(){
		$("#deleteUser").html(``);
	});

	$("#_close-dialog").click(function(){
		$("#deleteUser").html(``);
	});
	
	$(window).click(function(event){
        var modals = $(".my-dialog");
        for (var i = 0; i < modals.length; i++) {
            if (event.target == modals[i]) {
				$("#deleteUser").html(``);
                break;
            }
        }
    });
}

var app = new Vue({
	el:".my-content",
	data:{
		// accounts: accounts,
		accounts: [], //uncomment for using ajax 
		onAdd:{
			account_id:0,
			username:"",
			password:"",
			retype_password:"",
			campus:"Lingayen",
			f_name:"",
			m_name:"",
			l_name:"",
			type:"User",
		},
		onEdit: {
			account_id: 0,
			username:"safd",
			password:"",
			retype_password:"",
			campus:"",
			f_name:"",
			m_name:"",
			l_name:"",
			type:"",
		},
		action:"",
		edit_id:"",
	},
	mounted: function(){
		var thisData = this;
		if (user.type=="") {
            window.location="login.html";
        }else if (user.type!=="admin") {
        	window.location = "index.html";
        }
        thisData.getUsers();
	},
	methods:{
		showImg: function(profPic){
			return "background-image: url("+profPic+")";
		},
		onSearch: function(keyword){
			var thisData = this;
			$.post(hosting+"search.php", {search:keyword}, function(result, status){
	          	console.log(result);
	          	thisData.accounts = JSON.parse(result);
	        });
		},
		getUsers: function(){
			var thisData = this;
			$.post(hosting+"getAccounts.php", {}, function(result, status){
	          	// console.log(result);
	          	thisData.accounts = JSON.parse(result);
	        });
		},
		updateUser: function(user){
			var thisData = this;
			thisData.action = "";
			thisData.edit_id = "";
			thisData.onEdit = user;
			$.post(hosting+"updateAccount.php", thisData.onEdit, function(result, status){
	          	console.log(result);
	          	// thisData.accounts = JSON.parse(result);
	        });
		},
		deleteUser: function(user){
			var thisData = user;
			var index = 0;
			for (var i = 0; i < this.accounts.length; i++) {
				if (this.accounts[i].account_id==user.account_id) {
					index = i;
					break;
				}
			}
			var data_accounts = this.accounts;
			showDeleteDialog(function(){
				// ============================
				// insert ajax here
				// ============================
				// -->to do
				$.post(hosting+"deleteAccount.php", {account_id:user.account_id}, function(result, status){
		          	console.log(result);
		          	thisData.accounts = JSON.parse(result);
		        });

				// if success, remove from array
				data_accounts.splice(index, 1); 
			});
		},
		addUser: function(){
			// remove this part for actual
			var thisData = this;
			var lastId = 0;
			if (thisData.accounts.length>0) {
				lastId = thisData.accounts[thisData.accounts.length-1].account_id + 1;
			}
			thisData.onAdd.account_id = lastId;
			// ----------------------------------
			
			// ----------------------------------
			const add_account = thisData.onAdd; 
			thisData.onAdd = {
				account_id:0,
				username:"",
				password:"",
				retype_password:"",
				campus:"Lingayen",
				f_name:"",
				m_name:"",
				l_name:"",
				type:"User",
			};

			// ============================
			// insert ajax here
			// ============================
			// -->to do
			showPreload();
			if (thisData.password === thisData.retype_password) {
				if (thisData.username!="" && thisData.password!="" && thisData.retype_password!="" && thisData.campus!="" && thisData.f_name!="" && thisData.m_name!="" && thisData.l_name!="" && thisData.type!="") {
					$.post(hosting+"addAccount.php", add_account, function(result, status){
			          	console.log(result);
						// if success, add to array
						hidePreload();
						if (result==1) {

						}
						thisData.accounts.push(add_account);
			        });
				}
				 $.post(hosting+"getAccounts.php", add_account, function(result, status){
		          	console.log(result);
		          	thisData.account = JSON.parse(result);
		        });
			}
		},
		editUser: function(user){
			this.action = "edit";
			this.edit_id = user.account_id;
			const thisUser = user;
			this.onEdit = {
				account_id:0,
				username:"",
				password:"",
				retype_password:"",
				campus:"Lingayen",
				f_name:"",
				m_name:"",
				l_name:"",
				type:"User",
			};
			this.onEdit.user = thisUser;
		},
	}
});