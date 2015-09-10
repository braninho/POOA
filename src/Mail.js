/**
 * Created by blefebur on 10/09/15.
 */

var Contact = Contact || {};

Contact = (function (self) {
    'use strict';

    self.MailCategory = {
        PERSO : 1,
        PRO : 2
    };

    self.Mail = function (attr_address, attr_category) {
        var address;
        var category;

        this.address = function () {
           return address;
        };

        this.set_address = function (attr_address) {
           address = attr_address;
        };

        this.category = function () {
            return category;
        };

        this.set_category = function (attr_category) {
           category = attr_category;
        };

        var process = function ()
        { };

        var init = function (attr_address, attr_category) {
            address = attr_address;
            category = attr_category;
        };

        init(attr_address, attr_category);
    };

    return self;

}(Contact || {}));