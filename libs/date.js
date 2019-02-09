// date.getDate({time})


var date = {
    getDate: function(params){
        // localize params data
        var params = params ? params : {};
        var format = params.format ? (params.format).toString() : "a";
        var dateToAdd = params.add ? params.add : {day:0,month:0,year:0};
        var daysToAdd = dateToAdd.day;
        var monthsToAdd = dateToAdd.month;
        var yearsToAdd = dateToAdd.year;
        var timeInMilliSeconds = (params.time) ? params.time : new Date().getTime();
        if (params.customDate) {timeInMilliSeconds = new Date(params.customDate).getTime();}
        // variables
        var date = new Date(timeInMilliSeconds);
        if (yearsToAdd>0) {date.setFullYear(date.getFullYear() + yearsToAdd);}
        if (monthsToAdd>0) {date.setMonth(date.getMonth() + monthsToAdd);}
        if (daysToAdd>0) {date.setDate(date.getDate() + daysToAdd);}
        var dateMilliSeconds = date.getTime(); 
        var dateSeconds = date.getSeconds(); 
        var dateMinutes = date.getMinutes(); 
        var dateHours = date.getHours(); 
        var dateFullYear = date.getFullYear(); 
        var dateMonth = date.getMonth() + 1; 
        var dateDays = date.getDate(); 

        if (dateMonth < 10) {
            dateMonth = "0"+ dateMonth.toString()
        }
        if (dateDays < 10) {
            dateDays = "0"+ dateDays.toString()
        }
        var fullMonthNames = ["January","February","March","April","May","June","July","August","September","October", "November","December"];
        var shortMonthNames = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];
        var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

        var dateFormated;
        if(format=="a"){ //September 20, 2018
            var thisMonth = fullMonthNames[Number(dateMonth)-1];
            dateFormated = thisMonth+" "+dateDays+", "+dateFullYear;
        }else if(format=="b"){ //Sept 20, 2018
            var thisMonth = shortMonthNames[Number(dateMonth)-1];
            dateFormated = thisMonth+" "+dateDays+", "+dateFullYear;
        }else if(format=="c"){ //mm/dd/yyyy
            dateFormated = dateMonth+"/"+dateDays+"/"+dateFullYear;
        }else if(format=="d"){ //mm/dd/yy
            dateFormated = dateMonth+"/"+dateDays+"/"+(dateFullYear).toString().substring(2,(dateFullYear.toString().lenght));
        }else if(format=="e"){ //mm-dd-yyyy
            dateFormated = dateMonth+"-"+dateDays+"-"+dateFullYear;
        }else if(format=="f"){ //mm-dd-yy
            dateFormated = dateMonth+"-"+dateDays+"-"+(dateFullYear).toString().substring(2,(dateFullYear.toString().lenght));
        }else if(format=="g"){ //yyyy-mm-dd
            dateFormated = (dateFullYear+"-"+dateMonth+"-"+dateDays);
        }else if(format=="h"){ //yyyy-dd-mm
            dateFormated = dateFullYear+"-"+dateDays+"-"+dateMonth;
        }else if(format=="i"){ //yyyy/mm/dd
            dateFormated = (dateFullYear+"/"+dateMonth+"/"+dateDays);
        }else if(format=="j"){ //yyyy/dd/mm
            dateFormated = dateFullYear+"/"+dateDays+"/"+dateMonth;
        }else if(format=="k"){
            var thisMonth = fullMonthNames[Number(dateMonth)-1];
            dateFormated = thisMonth+" "+dateDays+", "+dateFullYear+" @"+dateHours+":"+dateMinutes;
        }
        // console.log(dateFormated);
        return dateFormated;
    },
    getDuration: function(date1, date2){
        var date1 = new Date(date1).getTime();
        var date2 = new Date(date2).getTime();
        var day = 1000 * 60 * 60 * 24;
        var diff = Math.abs(date2-date1);
        var duration = Math.floor(Math.round(diff/day),0);
        return duration;
    },
    getTime: function(params){
        // localize params data
        var params = params ? params : {};
        var _24format = params.isMilitaryTime;
        var timeToAdd = params.add ? params.add : {second:0,minute:0,hour:0,millisecond:0};
        var secondsToAdd = timeToAdd.second;
        var minutesToAdd = timeToAdd.minute;
        var hoursToAdd = timeToAdd.hour;
        var millisecondsToAdd = timeToAdd.millisecond;
        var timeInMilliSeconds = (params.time) ? params.time : new Date().getTime();
        // variables
        function formatToTens(t){if (Number(t)<10) {t="0"+t} return t;}
        var thisTime = new Date(timeInMilliSeconds);
        if (secondsToAdd>0) {thisTime.setSeconds(thisTime.getSeconds() + secondsToAdd);}
        if (minutesToAdd>0) {thisTime.setMinutes(thisTime.getMinutes() + minutesToAdd);}
        if (hoursToAdd>0) {thisTime.setHours(thisTime.getHours() + hoursToAdd);}
        var thisTimeMilliSeconds = thisTime.getTime(); 
        var thisTimeHours = thisTime.getHours();
        var thisTimeMinutes = thisTime.getMinutes();
        var thisTimeSeconds = thisTime.getSeconds();
        var formattedTime = thisTimeHours+":"+thisTimeMinutes;
        // console.log(params.time);
        if (!_24format) {
            var dst="AM";
            if (thisTimeHours>12) {
                thisTimeHours=thisTimeHours-12;
                if (thisTimeHours>0) {
                    dst="PM"
                }
            }

            formattedTime = formatToTens(thisTimeHours)+":"+formatToTens(thisTimeMinutes)+" "+dst;
        }else{
            formattedTime = formatToTens(thisTimeHours)+":"+formatToTens(thisTimeMinutes);
        }
        return formattedTime;
    }
};