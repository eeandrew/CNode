"use strict";
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require("rxjs/add/operator/map");
require('rxjs/add/operator/toPromise');
var TopicListService = (function () {
    function TopicListService(_http) {
        this._http = _http;
        this.baseURL = 'https://cnodejs.org/api/v1/';
    }
    TopicListService.prototype.makeGetQueryString = function (params) {
        var queryString = '';
        for (var key in params) {
            if (params.hasOwnProperty(key)) {
                queryString += key + "=" + params[key] + "&";
            }
        }
        return queryString;
    };
    TopicListService.prototype.getTopicList = function (params) {
        var queryString = this.makeGetQueryString(params);
        var queryUrl = this.baseURL + "topics?" + queryString;
        var headers = new http_1.Headers();
        headers.append("Authorization", "Bearer ");
        return this._http.get('https://api.everlive.com/v1/GWfRtXi1Lwt4jcqK/Groceries', {
            headers: headers
        })
            .toPromise()
            .then(function (res) { alert(res); return res; })
            .catch(this.handleErr);
    };
    TopicListService.prototype.handleErr = function (err) {
        alert(JSON.stringify(err));
        return Promise.reject(err);
    };
    TopicListService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], TopicListService);
    return TopicListService;
}());
exports.TopicListService = TopicListService;
//# sourceMappingURL=topiclist.service.js.map