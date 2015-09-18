/**
 * Created by blefebur on 10/09/15.
 */

var Contact = Contact || {};

Contact = (function (self) {
    'use strict';

    self.PhoneCategory = {
        PERSO : 1,
        PRO : 2
    };

    self.PhoneType = {
        MOBILE : 1,
        FIXE : 2
    };

    self.Phone = function (attr_number, attr_category, attr_type) {
        var category;
        var number;
        var type;

        this.number = function () {
           return number;
        };

        this.set_number = function (attr_number) {
           number = attr_number;
        };

        this.category = function () {
            return category;
        };

        this.set_category = function (attr_category) {
           category = attr_category;
        };

        this.type = function () {
            return type;
        };

        this.set_type = function (attr_type) {
           type = attr_type;
        };

        var process = function ()
        { };

        var init = function (attr_number, attr_category, attr_type) {
            number = attr_number;
            category = attr_category;
            type = attr_type;
        };

        init(attr_number, attr_category, attr_type);
    };

    return self;

}(Contact || {}));