/**
 * Created by blefebur on 10/09/15.
 */

var Contact = Contact || {};

Contact = (function (self) {
    'use strict';

    self.Gender = {
        MR : 1,
        MRS : 0
    };

    self.Contact = function (attr_gender, attr_firstname, attr_lastname) {
        var gender;
        var firstname;
        var lastname;

        this.gender = function () {
           return gender;
        };

        this.set_gender = function (attr_gender) {
           gender = attr_gender;
        };

        this.firstName = function () {
            return firstname;
        };

        this.set_firstName = function (attr_firstname) {
           firstname = attr_firstname;
        };

        this.lastName = function () {
            return lastname;
        };

        this.set_lastName = function (attr_lastname) {
           lastname = attr_lastname;
        };

        var process = function ()
        { };

        var init = function (attr_gender, attr_firstname, attr_lastname) {
            gender = attr_gender;
            firstname = attr_firstname;
            lastname = attr_lastname;
        };

        init(attr_gender, attr_firstname, attr_lastname);
    };

    return self;

}(Contact || {}));