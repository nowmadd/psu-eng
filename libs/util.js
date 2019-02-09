var util = {
    data:{},
    debug: false,
    debugConsole: function (msg){
        if (this.debug) {
            console.log(msg);
        }
    },
    loadData: function (jsonFileName){
        
        // convert JSON to object or array
        var data = JSON.parse(localStorage.getItem(jsonFileName));
        this.debugConsole("data loaded successfully!");
       
        return data;
    },
    saveData: function ( jsonFileName, jsonData ){

        // get json data
        var localData = jsonData;
        this.debugConsole(localData);    
        
        // format json data
        localData = JSON.stringify(localData);

        // save json data
        localStorage.setItem(jsonFileName, localData);
        this.debugConsole("data saved!");    
        
    },
    initData: function (data, jsonFileName){
       
        var loadedData = JSON.parse(localStorage.getItem(jsonFileName));
        this.debugConsole("loading data.....");    
        this.debugConsole(loadedData);    

        // -----------------------
        // Evaluate
        // -----------------------
        // json data doesnt exist!
        if (loadedData===null || Object.keys(loadedData).lenght===0) {
            this.debugConsole("no data exist!");    

            // get data passed
            this.data = data;
            loadedData = data;
            this.debugConsole("initializing data...");    
            this.debugConsole(data);    

           // format json data
            var tempData = JSON.stringify(this.data);
            this.debugConsole(tempData);    
            
            // save json data
            localStorage.setItem(jsonFileName, tempData);
            this.debugConsole("data saved!");    

        }else{

            // get data passed
            this.data = loadedData;   
            this.debugConsole(this.data);    
            this.debugConsole("data loaded!");    

        }

        return loadedData;
        
    },
    printAll: function (data){
        console.log(data);
    }
}