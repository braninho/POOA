/**
 * Created by blefebur on 10/09/15.
 */

var Contact = Contact || {};

Contact = (function (self) {
    'use strict';

    var EnsContact = function () {
        var contacts = [];

        this.clear = function () {
            while (contacts.length !=0) {
                contacts.pop();
            }

            return contacts;
        };

        this.add = function (attr_contact) {
            contacts.push(attr_contact);

        };

        this.get = function (attr_id) {
            var contact = null;
            for (var i =0; i<contacts.length;i++) {
                if(contacts[i].id() === attr_id) {
                    contact = contacts[i];
                }
            }

            return contact;
        };

        this.size = function () {
            return contacts.length;
        };

        this.getFromName = function (attr_firstname, attr_lastname) {
            var listContact = [];

            for (var i =0; i<contacts.length;i++) {
                if(contacts[i].firstName() === attr_firstname) {
                    if(contacts[i].lastName() === attr_lastname) {
                        listContact.push(contacts[i]);
                    }
                }
            }

            if(listContact.length == 0){
                listContact = null;
            }

            return listContact;
        };

        this.remove = function (attr_id) {
            var contact;
            var listContact = [];

            for (var i =0; i<contacts.length;i++) {
                listContact.push(contacts[i]);
            }
            contacts = [];

            for (var j =0; j<listContact.length;j++) {
                if(listContact[j].id() === attr_id) {
                    contact = listContact[j];
                }else{
                    contacts.push(listContact[j]);
                }
            }
        };

        this.search = function (attr_strategy) {
            return attr_strategy.search(contacts);
        };
    };

    var pInstance = null;
    self.Contacts = {
        instance : function () {

            if (!pInstance) pInstance = new EnsContact();
            return pInstance;
        }
    };

    return self;

}(Contact || {}));
