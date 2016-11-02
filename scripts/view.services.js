angular.module('webPortfolio')

.factory('slideShowFactory', function(){

    slideShowService = {};
    
    slideShowService.setListLength = function(length)
    {
    	slideShowService.listLength = length;
    };
    slideShowService.plusSlides =  function plusSlides(curIndex, n, length) {
                        
                  slideShowService.showSlides(curIndex, curIndex.val+n, length);
                };
  
    slideShowService.currentSlide = function currentSlide(curIndex, n, length) {
                  
                  slideShowService.showSlides(curIndex, n, length);
                };
    

    slideShowService.showSlides = function showSlides(curIndex, n, length){
        if (n>length){curIndex.val = 1;}
        else if (n<1){curIndex.val = length;}
        else { curIndex.val = n; }
        
    };

   slideShowService.activeFilter = function activeFilter(index, curIndexVal) {
   	//console.log(curIndexVal)
    if (!curIndexVal){return index==0;}
    return index+1==curIndexVal;

   };  
    




    return slideShowService;
})

.filter('newlines', function () {
    return function(text) {
        return text.replace(/\n/g, '<br/>');
    }
})



.filter('newlines', function () {
    return function(text) {
        return text.replace(/\n/g, '<br/>');
    }
})


.factory('shortenTextFactory', function(){

    shortenTextService = {};
    shortenTextService.shorten = function(num){
            return function(text){
                    if (!text){return "";}
                    var paragraph = text.split('\n')[0];
                    var textVal = paragraph.split(' ')
                    if (textVal.length>num){
                        var textVal2 = ""
                        for (var i=0; i<num; i++){
                            textVal2 += textVal[i] + " "
                        }
                        //return "test";
                       return textVal2 + " ...";

                    }
                    else {
                        return paragraph;
                    }
                };

    };

    return shortenTextService;
})