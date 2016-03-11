# angular-validation-bootstrap
Angular Validation for specific input tag in Bootstrap

#Install using bower:

bower install angular-validation-bootstrap --save

#Usage

inject directives and services

var app = angular.module('app', ['ngValidationBootstrap'])

<div class="form-group formusername" ng-class="username">
		<label class="control-label" for="username">Username</label>
		<input type="text" class="form-control" id="username" aria-describedby="helpusername" placeholder="Username" ng-init="member.username =''" ng-model="member.username"  ngvb-isempty ='member.username' ngvb-isfor='username' ngvb-ismsg ='usernamemsg'>
		<span id="helpusername" class="help-block" ng-show="usernamemsg">Username is Required</span>
</div>
