angular.module('templates', []).run(['$templateCache', function($templateCache) {$templateCache.put('index.html','<!doctype html>\n<html lang="en" ng-app="myApp">\n<head>\n  <title>My Awesome App</title>\n  <link rel="stylesheet" href="/css/styles.css">\n</head>\n<body ng-controller=\'WelcomeCtrl\'>\n<div class="wrapper">\n  <comment-widget></comment-widget>\n  <div class="homeHeader">\n  \t<img src="/images/logo.png" />\n  \t<h1><span>WEB</span><span>DESIGN</span><span>BLOG</span></h1>\n  \t<ul class="links">\n  \t\t<li><a href="#">Home</a></li>\n  \t\t<li><a href="#">About</a></li>\n  \t\t<li><a href="#">Portfolio</a></li>\n  \t\t<li><a href="#">Blog</a><li>\n  \t</ul>\n  </div>\n\n  <div class="homeStories">\n\t  <div id="story-0">\n    <vote-counter-widget></vote-counter-widget>\n\t  <section>\n\t  \t\t<h1>Heading One</h1>\n\t  \t\t<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>\n\t  \t\t<p>Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n\t  \t\t</p>\n\t  \t\t<ul class="hashtags">\n\t  \t\t\t<li><a href="#">#tag1</a></li>\n\t  \t\t\t<li><a href="#">#tag2</a></li>\n\t  \t\t\t<li><a href="#">#tag3</a></li>\n\t  \t\t</ul>\n\t  \t\t<button type="button" ng-click="openCommentWidget(\'story-0\')">Comment</button>\n\t  </section>\n\t  </div>\n  </div>\n\n</div>\n  <script src="/js/bundle.js"></script>\n  <script src="/js/templates.js"></script>\n</body>\n</html>\n');
$templateCache.put('views/comment.html','<div class="commentWidgetWrapper" ng-show="commentWidgetIsActive">\n<div id="close" ng-click="commentWidgetIsActive=false"></div>\n<form id="commentWidgetForm">\n<h2>{{header}}</h2>\n<div id="nameInput">\n  <label for="name">{{nameHeader}}</label>\n  <input type="text" name="name" id="name" value="" ng-model="commentName"><br>\n</div>\n<div id="commentInput">\n<label for="comment">{{commentHeader}}</label>\n\t<textarea form="commentWidgetForm" ng-model="commentContent"></textarea>\n</div>\n<div id="commentCounter" ng-class="{limitReached: limitReached()}">\n{{commentContent.length || 0}} characters out of {{commentLengthLimit}}\n</div>\n<div id="submitButton">\n\t<input id="submit" type="submit" value="Save" ng-class="limitReached() ? \'inactive\' : \'active\' " ng-click="save()">\n</div>\n\n</form>\n</div>\n\n');
$templateCache.put('views/voteCounter.html','<div class="vote">\n  <span class="up" ng-click="like()"></span><span class="value">{{count}}</span><span class="down" ng-click="unlike()"></span>\n</div>');}]);