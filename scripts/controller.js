

angular.module('webPortfolio')
.controller('IndexController', ['$scope', '$stateParams', '$http',  '$window',
  function($scope, $stateParams, $http, $window) {

 }])

angular.module('webPortfolio')
.controller('headerController', ['$scope', '$stateParams', '$http',  '$window',
  function($scope, $stateParams, $http, $window) {

      $scope.toggleVal = false;
      $scope.toggleFunct = function(){
        
        $scope.toggleVal = !$scope.toggleVal;
       
      };
 }])

angular.module('webPortfolio')
.controller('footerController', ['$scope', '$stateParams', '$http',  '$window',
  function($scope, $stateParams, $http, $window) {

 }])


angular.module('webPortfolio')
.controller('educationController', ['$scope', '$stateParams', '$http',  '$window',
  function($scope, $stateParams, $http, $window) {
  	console.log("test");
  	 $scope.education =  [ 
      { years: "2008-2015", yearCompleted: "2015", degree: "Ph.D. Philosophy" , subject: "Philosophy (Formal Epistemology & Logic)",
       university: "University of Connecticut",
     description: "My specializations are in logic, and formal epistemology. In particular, my research is in areas of philosophy involving decision theory, probability, analytic combinatorics, and other mathematically heavy areas of inquiry that are relevant to mainstream philosophy."
       },
      { years: "2002-2007", yearCompleted: "2007", degree: "Bachelor of Arts (Quadruple Major)" , 
      university: "University of Maine at Farmington (Maine’s Public Liberal Arts College)",
      accolade: "summa cum-laude", description: "Quadruple Major: Mathematics; Philosophy/Religion; English; Interdisciplinary Political Science/Social Science"
      	 
       },
    ];

 }])

angular.module('webPortfolio')
.controller('coursesController', ['$scope', '$stateParams', '$http',  '$window',
  function($scope, $stateParams, $http, $window) {

  	$scope.skillTerm = "Skills"; 

  	$scope.courseFilter = function(text){

  		if (text=="all"){
  				$scope.courses = $scope.coursesOrig.filter(x=> x.keywords.indexOf('')>=0);
  		$scope.skillTerm = text;
  		}
  		else {
  		$scope.courses = $scope.coursesOrig.filter(x=> x.keywords.indexOf(text)>=0);
  		$scope.skillTerm = text;
  	}
  	};

  

  	$scope.coursesOrig =  [
      { courseTitle: "Web App Development: Javascript and MongoDB", university: "University of London & Goldsmiths, University of London",
       courseURL: " ", keywords: "web development, javascript, mongodb, meteor, responsive, database"},
      { courseTitle: " Functional Programming Principles in Scala", university: "École Polytechnique Fédérale de Lausanne", 
      courseURL: " ", keywords: "functional, scala, eclipse"},
      { courseTitle: " Functional Program Design in Scala", university: "École Polytechnique Fédérale de Lausanne", 
      courseURL : "", keywords: "functional, scala, eclipse" },
      { courseTitle: "Database Management Essentials", university: "University of Colorado System", 
      courseURL : " ", keywords: "database, oracle, sql"},
      { courseTitle: "Advanced Data Structures in Java", university: "University of California, San Diego", 
      courseURL : " ", keywords: "algorithms, object oriented, java "},
      { courseTitle: "Data Structures and Performance", university: "University of California, San Diego", 
      courseURL : " ", keywords: "algorithms, object oriented, java "},
      { courseTitle: "Object Oriented Programming in Java", university: "University of California, San Diego ", 
      courseURL : " ", keywords: "algorithms, object oriented, java "},
    { courseTitle: "Java Programming: Principles of Software Design", university: "Duke University", 
      courseURL : " ", keywords: "algorithms, object oriented, java "},
      { courseTitle: "Java Programming: Solving Problems with Software", university: "Duke University", 
      courseURL : " ", keywords: "algorithms, object oriented, java "},
      { courseTitle: "Java Programming: Structured Data", university: "Duke University", 
      courseURL : " ", keywords: "algorithms, object oriented, java "},
      { courseTitle: "Principles of Computing (Part 1 and 2)", university: "Rice University ", 
      courseURL : " ", keywords: "algorithms, object oriented, python"},
      { courseTitle: "Using Databases with Python", university: "University of Michigan", 
      courseURL : " ", keywords: "database, python, sql"},
      { courseTitle: "Python Data Structures", university: "University of Michigan", 
      courseURL : " ", keywords: "algorithms, python"},
      { courseTitle: "Using Python to Access Web Data", university: "University of Michigan ", 
      courseURL : " ", keywords: "python"},
      { courseTitle: "Python for Genomic Data Science", university: "Johns Hopkins University", 
      courseURL : " ", keywords: "data-science, python"},
      { courseTitle: "Introduction to Python for Data Science*", university: "Microsoft DAT208x ", 
      courseURL : " ", keywords: "data-science, python"},
      { courseTitle: "Introduction to R*", university: "Microsoft DAT204x", 
      courseURL : " ", keywords: "data-science, R"},
      { courseTitle: "Programming for Everybody", university: "University of Michigan", 
      courseURL : " ", keywords: "python"},
    { courseTitle: "Ruby on Rails: An Introduction", university: "Johns Hopkins University", 
      courseURL : " ", keywords: "ruby, web development"},
      { courseTitle: "Rails with Active Record and Action Pack", university: "Johns Hopkins University", 
      courseURL : " ", keywords: "ruby, web development, sql, database"},
      { courseTitle: "Introduction to Meteor.js Development", university: "University of London & Goldsmiths, University of London", 
      courseURL : " ", keywords: "web development, meteor, javascript, mongodb, database, responsive"},
      { courseTitle: "Responsive Web Design", university: "University of London & Goldsmiths, University of London", 
      courseURL : " ", keywords: "web development, meteor, javascript, responsive"},
      { courseTitle: "Responsive Website Basics", university: "University of London & Goldsmiths, University of London", 
      courseURL : " ", keywords: "web development, meteor, javascript, responsive"},
      { courseTitle: "Interactivity with JavaScript", university: "University of Michigan", 
      courseURL : " ", keywords: "web development, javascript"},
    
      { courseTitle: "Cryptography I", university: "Stanford University", 
      courseURL : " ", keywords: "cryptography"},
      { courseTitle: "Introduction to Software Product Management", university: "University of Alberta ", 
      courseURL : " ", keywords: "agile, product-management"},
      { courseTitle: "Programming Foundations with JavaScript, HTML and CSS", university: "Duke University", 
      courseURL : " ", keywords: "web development, javascript, css, responsive"}
    ];
     $scope.courses = $scope.coursesOrig;
     
    

 }]);


angular.module('webPortfolio')
.controller('examplesController', ['$scope', '$stateParams', '$http',  '$window',
  function($scope, $stateParams, $http, $window) {
  	$scope.testStyle = {'background-image': 'url(https://i.imgsafe.org/7a8e71c327.png)'};

  	

    $scope.examples = [
    {title: "Political Resources SPA Web App",
      skills: "MEAN stack (mongodb, express, angular, node), javascript, heroku, bootstrap, responsive design",
      imageURL: "https://i.imgsafe.org/8fb62863bb.png",
      exampleURL: "https://our-political-resources.herokuapp.com/#/",
      description: "Click to visit app.\n\n Disclaimer: This app is running on free dynos from heroku, and thus the server may need to wake from sleep mode, which may cause a 3-5 sec delay on the initial load."},

     {title: "Instant Messanging App",
      skills: "Meteorjs, mongodb, javascript, jquery, bootstrap, responsive design, authentication",
      imageURL: "https://i.imgsafe.org/8fbb54cdb8.png",
      exampleURL: "https://immense-bayou-41698.herokuapp.com/",
      description: "Click to visit app.\n\n Disclaimer: This app is running on free dynos from heroku, and thus the server may need to wake from sleep mode, which may cause a 3-5 sec delay on the initial load."},

     {title: "Web Connect4",
      skills: "javascript, jquery, html5 canvas, typescript",
      imageURL: "https://i.imgsafe.org/8fb99c7b18.png",
      exampleURL: "http://codepen.io/mwhughes/full/WxjYbp/",
      description: "Click to visit game."},

     {title: "Web Tic-Tac-Toe",
      skills: "javascript, jquery, bootstrap",
      imageURL: "https://i.imgsafe.org/8fc38b8ce0.png",
      exampleURL: "http://codepen.io/mwhughes/full/MeeeZo/",
      description: "Click to visit game."},

     {title: "Google Maps and The Traveling Salesman",
      skills: "java, javafx, algorithm design",
      imageURL: "https://i.imgsafe.org/8fc3a2b1ee.png",
      exampleURL: "https://github.com/mwhughes/uscd_google_map_uptodate/tree/master/src/roadgraph",
      description: "Click to visit code at github."},

     {title: "Google Maps and Earthquake Data",
      skills: "java, javafx, algorithm design",
      imageURL: "https://i.imgsafe.org/8fbcc964b3.png",
      exampleURL: "https://github.com/mwhughes/uscd-earthquake/tree/master/src/module6",
      description: "Click to visit code at github "}, 

      {title: "Scala Reactive Calculator",
      skills: "scala, functional programming",
      exampleURL: "https://github.com/mwhughes/scala_calculator/tree/master/src/main/scala/calculator",
      imageURL: "https://i.imgsafe.org/8fb97332d6.png",
      description: "Click to visit code at github."},

       {title: "Scala Bloxorz Solver",
      skills: "scala, functional programming",
      imageURL: "https://i.imgsafe.org/8fbbd0e15d.png",
      exampleURL: "https://github.com/mwhughes/scala_stream/tree/master/streams/src/main/scala/streams",
      description: "Click to visit code at github."},

      {title: "Python Tic-Tac-Toe",
      skills: "python",
      imageURL: "https://i.imgsafe.org/8fc370252b.png",
      exampleURL: "http://www.codeskulptor.org/#user42_kpKHDrCAMO_0.py",
      description: "Click to play game. \n\nOnce there, you just need to hit play to see the program in action."},

      {title: "Python Version of the Game 2048",
      skills: "python",
      imageURL: "https://i.imgsafe.org/8fc37c60c2.png",
      exampleURL: "http://www.codeskulptor.org/#user42_kpKHDrCAMO_1.py",
      description: "Click to play game. \n\nOnce there, you just need to hit play to see the program in action. \n\n Note that the goal of 2048 is to get any row or column to be 2048. "},



    ];

    function addBackgroundProperty(arr){
      for (var i=0; i<arr.length; i++)
      {
        var url = 'url(' + arr[i].imageURL + ')';
        arr[i].backgroundProp = {'background-image': url};
      }
    }

    addBackgroundProperty($scope.examples);

  $scope.visitProject= function(index){
    $window.open( $scope.examples[index].exampleURL);
  }
     

 }]);


//https://github.com/mwhughes/scala_stream/tree/master/streams/src/main/scala/streams
//