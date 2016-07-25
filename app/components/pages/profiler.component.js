"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
require('rxjs/add/operator/map');
var github_services_1 = require("../services/github.services");
var ProfilerComponent = (function () {
    function ProfilerComponent(_githubService) {
        this._githubService = _githubService;
        this.user = [];
        this.repos = [];
        this.isThere = false;
    }
    ProfilerComponent.prototype.searchUser = function () {
        var _this = this;
        this.isThere = true;
        this._githubService.updateUser(this.username);
        this._githubService.getUser().subscribe(function (user) {
            _this.user = user;
        });
        this._githubService.getRepos().subscribe(function (repos) {
            _this.repos = repos;
        });
    };
    ProfilerComponent.prototype.ngOnInit = function () { };
    ProfilerComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'profiler',
            templateUrl: 'profiler.component.html'
        }), 
        __metadata('design:paramtypes', [github_services_1.GithubService])
    ], ProfilerComponent);
    return ProfilerComponent;
}());
exports.ProfilerComponent = ProfilerComponent;
//# sourceMappingURL=profiler.component.js.map