
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

var f7 = new Framework7({
    root:"#app",
    // photoBrowser: {
    //     type: 'popup',
    // }
});

var mainView = f7.views.create('.view-main');

var app1 = new Vue({
	el:".my-content",
	data:{
		onAdd:{
			activity_name:"",
			start_date: "",
			target_date: "",
		},
		building:{
			proj_id:"",
			campus:"",
			proj_name: "",
			model:"",
			duration: "",
			due_date:"",
			target_date:monthLater,
			finish_date:"",
			start_date:new Date(),
			src_fund:"",
			init_fund:0,
			contractor:"",
			progress:40,
			status:"",	
		},
		activity:[],
		finish_date:"",
		currentActivityId:0,
		currentActivityProgress:0,
		gantt_chart:{},
		tomorrow:tomorrow,
		today:today,
		tmpBuilding: {},
	},
	mounted:function(){
		var thisData = this;
		var obj = util.loadData("projects.json");
		this.building = obj?obj:{};
		// console.log(obj);
		this.building.progress = obj.progress?obj.progress:0;

		if (user.type=="") {
            window.location="login.html";
        }
		$.post(hosting+"getProject.php", {proj_id:thisData.building.proj_id}, function(result, status){
			if (result==1) {}else{
				thisData.tmpBuilding = JSON.parse(result)[0];
			}
		});
        thisData.getActivity();
        // console.log(this.building.proj_id);
	},
	methods:{
		getFinishDate: function(thisDate){
			if (thisDate==="" || thisDate === null) {
				return "xxxx-xx-xx";
			}else{
				return date.getDate({customDate:thisDate, format:"a"});
			}
		},
		getActivity: function(){
			var thisData = this;
			$.post(hosting+"getActivity.php", {proj_id:thisData.building.proj_id}, function(result, status){
				// console.log(result);
	          	thisData.activity = JSON.parse(result);
		        var tasks = [];
		        var total_prog = 0;
		        var finish_date = "";
		        for (var i = 0; i < thisData.activity.length; i++) {
		        	tasks[i]={};
		        	total_prog = total_prog + Number(thisData.activity[i]['progress']);
		        	tasks[i]['start'] = date.getDate({customDate:thisData.activity[i]['start_date'],format:"g"});
		        	if (thisData.activity[i]['finish_date']!="") {
			        	tasks[i]['end'] = date.getDate({customDate:thisData.activity[i]['finish_date'],format:"g"});
		        	}else{
			        	tasks[i]['end'] = date.getDate({customDate:thisData.activity[i]['target_date'],format:"g"});
		        	}
		        	tasks[i]['name'] = thisData.activity[i]['activity_name'];
		        	tasks[i]['progress'] = thisData.activity[i]['progress'];
		        }
		        if (thisData.activity==1) {
			        thisData.building.progress = 0;
		        }else{
			        thisData.building.progress = total_prog / thisData.activity.length;
		        }
		        if (thisData.building.progress>=100 && thisData.building.status=="ongoing" && thisData.finish_date!="") {
		        	thisData.building.status="finished";
		        	thisData.tmpBuilding.status="finished";
		        	thisData.tmpBuilding.finish_date= date.getDate({customDate:thisData.finish_date, format:"g"});
							console.log(thisData.finish_date);

					$.post(hosting+"finishProject.php", {proj_id:thisData.building.proj_id, finish_date: thisData.finish_date}, function(result, status){
						console.log(result);
						if (result==0) {
							console.log("project finished!");
						}
			        });
		        }
		        thisData.showGantt(tasks);
	        });
			 
		},
		formatHundreds: function(money){
		    var str = (money).toString();
		    var finalStr = '';
		    var counter=0;
		    for (var i = str.length - 1; i >= 0; i--) {
		        counter = counter + 1;
		        if (counter%3==0) {
		            if (counter!=str.length) {
		                finalStr = ","+str.substring(i,i+1)+finalStr;
		            }else{
		                finalStr = str.substring(i,i+1)+finalStr;
		            }
		        }else{
		            finalStr = str.substring(i,i+1)+finalStr;
		        }
		    }
		    return "₱"+finalStr;
		},
		deleteActivity: function(thisID){
			var thisData = this;
			f7.dialog.confirm("Are you sure?","Delete", function(){
				$.post(hosting+"deleteActivity.php", {activity_id:thisID}, function(result, status){
					// hidePreload();
					if (result==0) {
						f7.dialog.alert("Deleted successfully","");
						// showDialog("Deleted successfully","Delete Activity");
						thisData.getActivity();
					}
		        });
			});
			// showDeleteDialog(function(){
			// 	showPreload();
			// });
		},
		newActivity: function(){
			var thisData = this;
			// ============================
			var file_form = document.querySelector("#file-form");
		    var formData = new FormData(file_form);
		    var files = file_form[0].files;	    
			var maxSize = 1994000;
			var fileSizeMax = 0;
			var safeToUpload = true;
		    formData.append("progress",0);
		    formData.append("finish_date","");
		    formData.append("proj_id",thisData.building.proj_id);
		    if (files.length==0) {
		        f7.dialog.alert("Upload an Image!","");
				return;
		    }
			for (var i = 0; i < files.length; i++) {
				if (files[i].size>=maxSize) {
					safeToUpload = false;
					break;
				}
			}
			if (!safeToUpload) {
				f7.dialog.alert("Please select at least 1mb image size!","Image file is too large!");
				return;
			}
			if (file_form[0].value=="" || file_form[1].value=="" || file_form[2].value=="") {
				f7.dialog.alert("All fields are required!","Fill up all fields!");
			}else{
				f7.popup.close("#newUpdate", true)
				$.ajax({
			    	url: hosting+"view_project.php", //change url
					type: "POST",
					data:  formData,
					contentType: false,
				    processData:false,
					mimeType:"multipart/form-data",
					success: function(result){
                        f7.dialog.preloader("Please wait..","blue");
						//console.log(result);
						f7.dialog.close();
						if (result==1) {	
							f7.dialog.alert("Something went wrong! Try again!","Error!");
						}else{
							thisData.getActivity();
							f7.dialog.alert("Activity added successfully!","Success!",
							function(){
								// var popup = f7.popup.get("#newActivity");
								// popup.close();
							});
					   		file_form.reset();
				            $("#fileLabel").text('');
				            $("#thumbnail")[0].src="photos/default.jpg";
						}
					},
			   	});
			}
		},
		updateActivity: function(){
			var thisData = this;
			var activity_id = this.currentActivityId;
			// ============================

			var file_form = document.querySelector("#file-form1");
		    var formData = new FormData(file_form);
		    var files = file_form[0].files;	    
			var maxSize = 1994000;
			var fileSizeMax = 0;
			var safeToUpload = true;
		    formData.append("activity_id",activity_id);
		    formData.append("proj_id",thisData.building.proj_id);
		    if (files.length==0) {
				f7.dialog.alert("Upload an Image!","");
				return;
		    }
			for (var i = 0; i < files.length; i++) {
				if (files[i].size>=maxSize) {
					safeToUpload = false;
					break;
				}
			}
			if (!safeToUpload) {
				f7.dialog.alert("Please select at least 1mb image size!","Image file is too large!");
				return;
			}

		    if (file_form[0].files.length==0) {
				f7.dialog.alert("Upload an Image!","");
				return;
		    }
			if (file_form[0].value=="" || file_form[1].value=="" || file_form[2].value==""|| file_form[3].value=="") {
				f7.dialog.alert("All fields are required!","Fill up all fields!");
			}else{
				f7.popup.close("#newUpdate", true)
                f7.dialog.preloader("Please wait..","blue");
				$.ajax({
			    	url: hosting+"addActivityProgress.php", //change url
					type: "POST",
					data:  formData,
					contentType: false,
				    processData:false,
					mimeType:"multipart/form-data",
					success: function(result){
						
                        f7.dialog.close();
						//console.log(result);
						if (result==1) {	
							f7.dialog.alert("Something went wrong! Try again!","Error!");
						}else{
							thisData.finish_date = date.getDate({format:"g"});
							thisData.getActivity();
							f7.dialog.alert("Activity updated successfully!","Success!",
							function(){
								var popup = f7.popup.get("#newProgress");
								popup.close();
							});
					   		file_form.reset();
				            $("#fileLabel1").text('');
				            $("#thumbnail1")[0].src="photos/default.jpg";
						}
					},
			   	});
			}
		},
		updateActivityProgress: function(activity){
			// console.log(activity.activity_id);
			this.currentActivityId = activity.activity_id;
			this.currentActivityProgress = activity.progress;
			var popup = f7.popup.get("#newProgress");
			popup.open();
			return;
		},
		openProgressImages: function(activity){
			var gallery = activity.gallery;
			var progress_updates = activity.progress_updates;
			// console.log(gallery);
			// console.log(progress_updates);
			var img = [];
	        for (var i = 0; i < gallery.length; i++) {
	          img[i] = {};
	          img[i].url = gallery[i].dir+gallery[i].filename;
	        }

	        for (var i = 0; i < progress_updates.length+1; i++) {
	        	if (i==0) {
			        img[i].caption = "Initial Photo";
	        	}else{
		          	img[i].caption = "[Date Checked: "+progress_updates[i-1].date_checked+"] [Progress: "+progress_updates[i-1].progress+"%] Remarks: "+progress_updates[i-1].remarks;
	        	}
	        }
	        console.log(img);
	        var photoBrowser = f7.photoBrowser.create({
	            photos : img,
	            theme:"dark"
	        });
	        photoBrowser.open();
		},
		setProgress: function(progress){
			return "width:"+progress+"%;";
		},
		showImg: function(building){
			return "height:600px;background-image: url("+building+")";
		},
		openGallery:function(image){
	        var photoBrowser = f7.photoBrowser.create({
	            photos : [image],
	            theme:"dark"
	        });
	        photoBrowser.open();
	    },
	    setWidth: function(progress){
	    	return "width: "+progress+"%; height:inherit; background-color: green;display: block;";
	    },
		showGantt: function(tasks){
			if (tasks.length>0) {
				$(".gantt-target").html('');
				this.gantt_chart = new Gantt(".gantt-target", tasks, {
					on_click: function (task) {
						// console.log(task);
					},
					on_date_change: function(task, start, end) {
						// console.log(task, start, end);
					},
					on_progress_change: function(task, progress) {
						// console.log(task, progress);
					},
					on_view_change: function(mode) {
						// console.log(mode);
					},
					language: 'en',
					header_height: 20,
					column_width: 10,
					step: 44,
					view_modes: ['Quarter Day', 'Half Day', 'Day', 'Week', 'Month'],
					bar_height: 40,
					bar_corner_radius: 3,
					arrow_curve: 5,
					padding: 18,
					view_mode: 'Month',   
					date_format: 'MM-DD-YYYY',
					custom_popup_html: false
				});
			}else{
				$(".gantt-target").html('<p style="text-align:center;">Nothing to show!</p>');
			}
		}
	}
});

$("#fileInput").change(function(e){
	var reader = new FileReader();

	if (this.files[0].name) {
		$("#fileLabel").html(this.files[0].name);
	}

    reader.onload = function (e) {
        // get loaded data and render thumbnail.
        $("#thumbnail")[0].src = e.target.result;
        // document.getElementById("thumbnail").src = e.target.result;
    };

    // read the image file as a data URL.
    reader.readAsDataURL(this.files[0]);
});


$("#fileInput1").change(function(e){
	var reader = new FileReader();

	if (this.files.length>0 && this.files[0].name) {
		$("#fileLabel1").html(this.files[0].name);
	}

    reader.onload = function (e) {
        // get loaded data and render thumbnail.
        $("#thumbnail1")[0].src = e.target.result;
        // document.getElementById("thumbnail").src = e.target.result;
    };

    // read the image file as a data URL.
    reader.readAsDataURL(this.files[0]);
});