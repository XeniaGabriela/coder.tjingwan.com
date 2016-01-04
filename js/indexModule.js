var app = angular.module("indexApp", [])

.controller("indexCtrl", function ($scope, $log, $element) {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////// STARTSEITENBILDER ///////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

      $scope.languages = {"german": {}, "english": {}};


      $log.log(window.innerWidth, "Hello");


      $scope.languages.german = {
          "links": {
              "home": "Home", 
              "homeTitle": "Startseite",
              "about": "About", 
              "aboutTitle": "über mich",
              "projects": "Projektliste",
              "projectLink": "pdfs/Projektliste.pdf",
              "impressum": "Impressum"
            }, 
          "titles": {
              "profiles": "Weitere Profile im Netz",
              "articles": "Öffentliche Artikel"
            }

      }

      $scope.languages.english = {
          "links": {
              "home": "Home", 
              "homeTitle": "overview",
              "about": "About", 
              "aboutTitle": "about me",
              "projects": "Project List",
              "projectLink": "pdfs/Projectlist_En.pdf",
              "impressum": "Disclaimer"
            }, 
          "titles": {
              "profiles": "More Profiles",
              "articles": "Public Articles"
            }
      }

      // fade header visibility on scroll
      $scope.centered = document.getElementsByClassName("centered")[0];

      document.onscroll = function() {
          var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;      
          var centeredOpacity = 0.5 + scrollTop * 0.002;
          $scope.centered.style["background-color"] = "rgba(0, 0, 0, " + centeredOpacity.toString() + ")";
      }

      
      $scope.params = {};
      var urlParts = location.search.substring(1).split('&');
      if (urlParts.length > 0 && urlParts[0] == "english") {
          $log.log(urlParts)
          $scope.chosenLanguage = $scope.languages.english;
          $scope.switchLanguage = "Deutsch";
          $scope.homeLink = "indexEn.htm";
      }
      else {
        $scope.chosenLanguage = $scope.languages.german
        $scope.switchLanguage = "English";
        $scope.homeLink = "index.htm";
      }

      $scope.changeLanguage = function() {
          if ($scope.chosenLanguage == $scope.languages.german) {
              $scope.chosenLanguage = $scope.languages.english;
              $scope.switchLanguage = "Deutsch";
              $scope.homeLink = "indexEn.htm";
              window.location.href = window.location.href + "?english";
          }
          else {
              $scope.chosenLanguage = $scope.languages.german;
              $scope.switchLanguage = "English";
              $scope.homeLink = "index.htm";
              window.location.href = window.location.href.replace("?english", "")
          }

      }

      function openWindow (adress, left, top, width, height) {
        
      }

      ///////////////////////////////////////// MULTIPLICATION //////////////////////////////////////

      $scope.showFieldDescription = function(num) {
        var description = document.getElementsByClassName("fieldDescription")[num];
        var plus = document.getElementsByClassName("plus")[num];
        var minus = document.getElementsByClassName("minus")[num];
        if (description.style.display == "block") {
          description.style.display = "none";
          plus.style.display = "block";
          minus.style.display = "none";
        }
        else {
          description.style.display = "block";
          plus.style.display = "none";
          minus.style.display = "block";
        }
      }

      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


      window.addEventListener("keyup", function(e){
            if(e.keyCode == 27) {
            } 
            if(e.keyCode == 39) {
            } 
            if(e.keyCode == 37) {
            } 
            $scope.$apply();
      });
                
})
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////// directives for widgets //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
// links to sub-pages
// title of system

// german Abstract
.directive('germanAbstract', function() {
    return {
        restrict: 'E',
        templateUrl: 'texts/germanAbstract.htm'
    }
})
// german Abstract
.directive('englishAbstract', function($log) {
    return {
        restrict: 'E',  
        templateUrl: 'texts/englishAbstract.htm'
    }
})
// german About
.directive('germanAbout', function() {
    return {
        restrict: 'E',
        templateUrl: 'texts/germanAbout.htm'
    }
})
// german About
.directive('englishAbout', function($log) {
    return {
        restrict: 'E',  
        templateUrl: 'texts/englishAbout.htm'
    }
})
;










