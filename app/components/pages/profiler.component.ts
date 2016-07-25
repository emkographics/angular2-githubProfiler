import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import {GithubService} from "../services/github.services";

@Component({
    moduleId: module.id,
    selector: 'profiler',
    templateUrl: 'profiler.component.html'
})
export class ProfilerComponent implements OnInit {
    user = [];
    repos = [];
    username;
    isThere;

    constructor(private _githubService:GithubService) {
        this.isThere = false;

    }

    searchUser() {
        this.isThere = true;
        this._githubService.updateUser(this.username);


        this._githubService.getUser().subscribe(user => {
            this.user = user;
        })

        this._githubService.getRepos().subscribe(repos => {
            this.repos = repos;
        })

    }

    ngOnInit() { }

}