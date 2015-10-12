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
        var mails = [];
        var phones = [];
        var id;
        var cache;
        var tag;

        this.id = function () {
            return id;
        };

        this.set_id = function (attr_id) {
           id = attr_id;
        };

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

        this.mails = function () {
            return mails;
        };

        this.addMail = function (attr_address) {
            mails.push(attr_address);
        };

        this.phones = function () {
            return phones;
        };

        this.addPhone = function (attr_number) {
            phones.push(attr_number);
        };

        this.cache = function () {
           return cache;
        };

        this.tag = function () {
           return tag;
        };

        this.set_Tag = function (attr_tag) {
           tag = attr_tag;
        };

        var process = function ()
        { };

        this.register = function (observeur) {
            cache = observeur;
        };

        this.notify = function () {
           if (cache !== null) {
               cache.update(this);
           }
        };

        this.toObject = function () {
            return{
                _firstname : firstname,
                _lastname : lastname,
                _gender : gender,
                _id : id,
                _tag : tag
            };
        };

        var init = function (attr_gender, attr_firstname, attr_lastname) {
            gender = attr_gender;
            firstname = attr_firstname;
            lastname = attr_lastname;
            id ='xxxx-xxxx-xxxx-xxxx-xxxx'.replace (/x/g , function ( c ) {
                var r = Math.random () *16|0 , v = c == 'x' ? r : ( r&0x3|0x8 );

                return v.toString(16);
            });
        };

        init(attr_gender, attr_firstname, attr_lastname);
    };

    return self;

}(Contact || {}));