angular.module('webPortfolio')

.factory('DataFactory',  ['$stateParams', '$http', 'baseURL', function($stateParams, $http, baseURL) 
  {

  	dbService = {};
    dbService.getDetailsData = function(localURL, criteria, callback){
        console.log(baseURL+localURL+"/" + $stateParams.id);
    	return  $http({
            method: 'GET',
            url: baseURL+localURL+"/" + $stateParams.id
            
            }).then(function successCallback(response) {
        // this callback will be called asynchronously
        // when the response is available
                    console.log(response.data);
                   callback(response.data);
                   return response.data;
                   
                 
                 }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        console.log("ERROR!!!!");})
     };

      dbService.getDetailsNonPopulateData = function(localURL, criteria, callback){

      return  $http({
            method: 'GET',
            url: baseURL+localURL+"/" + "nonPopulate/" +$stateParams.id
            
            }).then(function successCallback(response) {
        // this callback will be called asynchronously
        // when the response is available
                   callback(response.data);
                   return response.data;
                   
                 
                 }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        console.log("ERROR!!!!");})
     };

     dbService.postDetailsData = function(localURL, data, callback){
        console.log(baseURL+localURL);
    	return  $http({
            method: 'POST',
            url: baseURL+localURL,
            data: data
            
            }).then(function successCallback(response) {
        // this callback will be called asynchronously
        // when the response is available
                   //console.log(response);
                   callback(response);
                   return response;
                 }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
       	console.log("ERROR!!!!")
       	console.log(response);

        		});

		};



     dbService.updateDetailsData = function(localURL, data, callback){

    	return  $http({
            method: 'PUT',
            url: baseURL+localURL+"/" + $stateParams.id,
            data: data
            
            }).then(function successCallback(response) {
        // this callback will be called asynchronously
        // when the response is available
                    //console.log(response);
                   callback(response.data);
                   return response.data;
                 }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
       	console.log("ERROR!!!!")

        		});

		};

	  dbService.getPageData = function(localURL, criteria, pageNum, docsPerPage, callback){
	  		
    	return  $http({
            method: 'GET',
            url: baseURL+localURL+pageNum+"/"+docsPerPage
            
            }).then(function successCallback(response) {
        // this callback will be called asynchronously
        // when the response is available
                   callback(response.data);
                   return response.data;
                   
                 
                 }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
       
        console.log("ERROR!!!!");})
            
     };

      dbService.getCount = function(localURL2, criteria, callback){

      return  $http({
            method: 'GET',
            url: baseURL+localURL2
            
            }).then(function successCallback(response) {
        // this callback will be called asynchronously
        // when the response is available
                   callback(response.data);
                   console.log(response.data);
                   return response.data;
           }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        console.log("ERROR!!!!");})
     };

        dbService.getPageSearchData = function(localURL, criteria, pageNum, docsPerPage, callback){
        
        console.log(baseURL+localURL);
        console.log(criteria);

         return  $http({
            method: 'POST',
            url: baseURL+localURL+pageNum+"/"+docsPerPage,
            data: criteria
            }).then(function successCallback(response) {
        // this callback will be called asynchronously
        // when the response is available
                   callback(response.data);
                   return response.data;
                   
                 
                 }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
       
        console.log("ERROR!!!!");})
            
     };


        dbService.getTopicPageData = function(localURL, keyWord, pageNum, docsPerPage, callback){
        
        console.log(baseURL+localURL);

         return  $http({
            method: 'GET',
            url: baseURL+localURL+ keyWord + "/" + pageNum+"/"+docsPerPage
            }).then(function successCallback(response) {
        // this callback will be called asynchronously
        // when the response is available
                   callback(response.data);
                   return response.data;
                   
                 
                 }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
       
        console.log("ERROR!!!!");})
            
     };

    

      dbService.getTopicCount = function(localURL2, keyword, callback){
        
      return  $http({
            method: 'GET',
            url: baseURL+localURL2+keyword
            
            }).then(function successCallback(response) {
        // this callback will be called asynchronously
        // when the response is available
                   callback(response.data);
                   return response.data;
           }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        console.log("ERROR!!!!");})
     };
     //


    return dbService;
}])

.factory('listShareFactory', function(){

    sharedService = {};
    sharedService.list = [];
    return sharedService;
})

.factory('searchFactory',  ['$stateParams', '$http', 'baseURL', function($stateParams, $http, baseURL) 
  {

    searchService = {};
    searchService.searchVal = "";
    searchService.setSearchVal = function (str){
      searchService.searchVal = str;
    };
    return searchService
}])

.factory('topicFactory',  ['$stateParams', '$http', 'baseURL', function($stateParams, $http, baseURL) 
  {

    topicService = {};
    topicService.topicVal = "";
    topicService.setTopicVal = function (str){
      topicService.topicVal = str;
    };
    return topicService
}])

.factory('populatedDataFactory',  ['$stateParams', '$http', 'baseURL', function($stateParams, $http, baseURL) 
  {

    popDataService = {};
    popDataService.articles = [];
    popDataService.committees = [];
    popDataService.hearings = [];
    popDataService.events = [];
    popDataService.bills = [];
    return popDataService;
}])

.factory('dateTrackerFactory',  ['$stateParams', '$http', 'baseURL', function($stateParams, $http, baseURL) 
  {

    dateTrackerService = {};
    dateTrackerService.curCriteria = "default";
    dateTrackerService.setUpcoming = function(){
        dateTrackerService.curCriteria = "upcoming";
    };
      dateTrackerService.setPrevious = function(){
        dateTrackerService.curCriteria = "previous";
    };

     dateTrackerService.setAll = function(){
        dateTrackerService.curCriteria = "default";
    };


   
    return dateTrackerService;
}])


.factory('dateCriteriaFactory',  ['$stateParams', '$http', 'baseURL', '$window', 'dateTrackerFactory',
 function($stateParams, $http, baseURL, $window, dateTrackerFactory) 
  {

    dateCriteriaService = {};
    dateCriteriaService.curCriteria = "/pages/";
    dateCriteriaService.curURLCount = "/count";
    dateCriteriaService.functions = {};
    dateTrackerService.setAll();
    

     dateCriteriaService.functions.setToUpcoming = function(getData, getCount, resource){
        dateTrackerService.setUpcoming()
        if (dateCriteriaService.curCriteria == "/upcoming/"){return "";}
        // localURL = resource+dateCriteriaService.curCriteria;
        dateCriteriaService.curCriteria = "/upcoming/";
        dateCriteriaService.curURLCount = "/count/upcoming";
        // localURL2 = resource+dateCriteriaService.curURLCount;
        // getData(localURL);
        // getCount(localURL2);
        $window.location.href = '/#/'+resource+'/pages/'+ 0;
       

    }

       dateCriteriaService.functions.setToPrevious = function(getData, getCount, resource){
        dateTrackerService.setPrevious();
         if (dateCriteriaService.curCriteria == "/previous/"){return "";}
        console.log("previous");        
        dateCriteriaService.curCriteria = "/previous/";
        // localURL = resource+dateCriteriaService.curCriteria;
        dateCriteriaService.curURLCount = "/count/previous";
       //  localURL2 = resource+dateCriteriaService.curURLCount;
       // getData(localURL);
       //  getCount(localURL2);
       $window.location.href = '/#/'+resource+'/pages/'+ 0;
        

    }

     dateCriteriaService.functions.setToAll = function(getData, getCount, resource){
        dateTrackerService.setAll();
        if (dateCriteriaService.curCriteria == "/pages/"){return "";}
        dateCriteriaService.curCriteria = "/pages/";
        // localURL = resource+dateCriteriaService.curCriteria;
        dateCriteriaService.curURLCount = "/count";
        // localURL2 = resource+dateCriteriaService.curURLCount;
        // getData(localURL);
        // getCount(localURL2);
        $window.location.href = '/#/'+resource+'/pages/'+ 0;

    }
    return dateCriteriaService;
}])

.factory('dateCriteriaSearchFactory',  ['$stateParams', '$http', 'baseURL', '$window', 'dateTrackerFactory',
 function($stateParams, $http, baseURL, $window, dateTrackerFactory) 
  {

    dateCriteriaService = {};
    dateCriteriaService.curCriteria = "/search/";
    dateCriteriaService.curURLCount = "/count";
    dateCriteriaService.functions = {};
    dateTrackerService.setAll();

     dateCriteriaService.functions.setToUpcoming = function(getData, getCount, resource){
        dateTrackerService.setUpcoming();
        if (dateCriteriaService.curCriteria == "/search/upcoming/"){return "";}
        
        dateCriteriaService.curCriteria = "/search/upcoming/";
        localURL = resource+dateCriteriaService.curCriteria;
       getData(localURL);
       

         $window.location.href = '/#/'+resource+'/search/'+0;
       

    }

       dateCriteriaService.functions.setToPrevious = function(getData, getCount, resource){
        dateTrackerService.setPrevious();
         if (dateCriteriaService.curCriteria == "/search/previous/"){return "";}
               
        dateCriteriaService.curCriteria = "/search/previous/";
        localURL = resource+dateCriteriaService.curCriteria;
        
       getData(localURL);
        
       $window.location.href = '/#/'+resource+'/search/'+0;
        

    }

     dateCriteriaService.functions.setToAll = function(getData, getCount, resource){
        dateTrackerService.setAll();
        if (dateCriteriaService.curCriteria == "/search/"){return "";}
        dateCriteriaService.curCriteria = "/search/";
        localURL = resource+dateCriteriaService.curCriteria;
        
        getData(localURL);
     
         $window.location.href = '/#/'+resource+'/search/'+0;

    }
    return dateCriteriaService;
}])

.factory('dateCriteriaSearchEmbeddedFactory',  ['$stateParams', '$http', 'baseURL', '$window', 'dateTrackerFactory',
    function($stateParams, $http, baseURL, $window, dateTrackerFactory) 
  {

    dateCriteriaService = {};
    dateCriteriaService.curCriteria = "/search/";
    dateCriteriaService.curURLCount = "/count";
    dateCriteriaService.functions = {};
    dateTrackerService.setAll();

     dateCriteriaService.functions.setToUpcoming = function(getData, getCount, resource){
        dateTrackerService.setUpcoming();
        if (dateCriteriaService.curCriteria == "/search/upcoming/"){return "";}
        dateCriteriaService.curCriteria = "/search/upcoming/";
        localURL = resource+dateCriteriaService.curCriteria;
        
       getData(localURL);
       
        
        
       

    }

       dateCriteriaService.functions.setToPrevious = function(getData, getCount, resource){
        dateTrackerService.setPrevious();
         if (dateCriteriaService.curCriteria == "/search/previous/"){return "";}
               
        dateCriteriaService.curCriteria = "/search/previous/";
        localURL = resource+dateCriteriaService.curCriteria;
        
       getData(localURL);
        
       
        

    }

     dateCriteriaService.functions.setToAll = function(getData, getCount, resource){

        dateTrackerService.setAll();
        if (dateCriteriaService.curCriteria == "/search/"){return "";}
        dateCriteriaService.curCriteria = "/search/";
        localURL = resource+dateCriteriaService.curCriteria;
        
        getData(localURL);
     
        

    }
    return dateCriteriaService;
}])

.factory('dateCriteriaTopicFactory',  ['$stateParams', '$http', 'baseURL', '$window', 'dateTrackerFactory',
    function($stateParams, $http, baseURL, $window, dateTrackerFactory) 
  {

    dateCriteriaService = {};
    dateCriteriaService.curCriteria = "/topic/";
    dateCriteriaService.curURLCount = "/count/topic/";
    dateCriteriaService.functions = {};
    dateTrackerService.setAll();

     dateCriteriaService.functions.setToUpcoming = function(getData, getCount, resource){
        dateTrackerService.setUpcoming();
        if (dateCriteriaService.curCriteria == "/topic/upcoming/"){return "";}
        
        dateCriteriaService.curCriteria = "/topic/upcoming/";
        dateCriteriaService.curURLCount = "/count/topic/upcoming/";
     
        
       

    }

       dateCriteriaService.functions.setToPrevious = function(getData, getCount, resource){
        dateTrackerService.setPrevious();
         if (dateCriteriaService.curCriteria == "/topic/previous/"){return "";}
        console.log("previous");        
        dateCriteriaService.curCriteria = "/topic/previous/";
        
        dateCriteriaService.curURLCount = "/count/topic/previous/";
    
       
        

    }

     dateCriteriaService.functions.setToAll = function(getData, getCount, resource){
        dateTrackerService.setAll();
        if (dateCriteriaService.curCriteria == "/topic/"){return "";}
        dateCriteriaService.curCriteria = "/topic/";
        dateCriteriaService.curURLCount = "/count/topic/";
       
        

    }
    return dateCriteriaService;
}]);

