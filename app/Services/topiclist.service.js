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
    TopicListService.prototype.mockData = function () {
        return {
            _body: {
                success: true,
                data: [{
                        author: {
                            loginname: 'eeandrew',
                            avatar_url: 'xxx',
                        },
                        create_at: '昨天',
                        title: '这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题'
                    }, {
                        author: {
                            loginname: 'eeandrew',
                            avatar_url: 'xxx',
                        },
                        create_at: '昨天',
                        title: '这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题'
                    }]
            }
        };
    };
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
        // return this._http.get(queryUrl)
        //   .toPromise()
        //   .then(res => {return res;})
        //   .catch(this.handleErr)
        return Promise.resolve(this.mockData());
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