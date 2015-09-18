/**
 * Created by blefebur on 11/09/15.
 */

var Contact = Contact || {};

Contact = (function (self) {
    'use strict';

    self.FromMailSearchStrategy = function (attr_address) {

        this.search = function (attr_contacts) {
            var contact = null;

            for (var i = 0; i <attr_contacts.length; i++) {
                for (var j = 0; j <attr_contacts[i].mails().length; j++) {
                    if (attr_contacts[i].mails()[j].address() === attr_address) {
                        contact = attr_contacts[i];
                    }
                }
            }
            return contact;
        };

        this.getKey = function () {
            return attr_address;
        };
    };

    return self;

}(Contact || {}));
