

angular.module('webPortfolio')
	.directive('educationDir', EducationDir)
	.directive('coursesDir', CoursesDir)
	.directive('aboutDir', AboutDir)
	.directive('navbarDir', NavbarDir)
	.directive('headerLinksDir', HeaderLinksDir)
	.directive('navbarDropdownDir', NavbarDropdownDir)
	.directive('examplesDir', ExamplesDir)
	
.directive('backImg', function(){
    return function(scope, element, attrs){
        attrs.$observe('backImg', function(value) {
            element.css({
                'background-image': 'url(' + value +')',
                'background-size' : 'cover'
            });
        });
    };
});

	

//EventDir.$inject = [...]
function HeaderLinksDir (){
	var ddo = {
		templateUrl : 'views/header_links.html'
	};
	return ddo;
}

function NavbarDropdownDir (){
	var ddo = {
		templateUrl : 'views/navbar_dropdown.html'
	};
	return ddo;
}

function ExamplesDir (){
	var ddo = {
		templateUrl : 'views/examples.html'
	};
	return ddo;
}


function EducationDir (){
	var ddo = {
		templateUrl : 'views/education.html'
	};
	return ddo;
}

function NavbarDir (){
	var ddo = {
		templateUrl : 'views/navbar.html'
	};
	return ddo;
}

function CoursesDir (){
	var ddo = {
		templateUrl : 'views/courses.html'
	};
	return ddo;
}

function AboutDir (){
	var ddo = {
		templateUrl : 'views/about.html'
	};
	return ddo;
}