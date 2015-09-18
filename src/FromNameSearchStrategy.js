/**
 * Created by blefebur on 11/09/15.
 */

var Contact = Contact || {};

Contact = (function (self) {
    'use strict';

    self.FromNameSearchStrategy = function (attr_firstname, attr_lastname) {

        this.search = function (attr_contacts) {
            var contact = null;

            for (var i = 0; i< attr_contacts.length ;i++){
                if (attr_contacts[i].firstName() === attr_firstname) {
                    if (attr_contacts[i].lastName() === attr_lastname) {
                        contact = attr_contacts[i];
                    }
                }
            }
            return contact;
        };

        this.getKey = function () {
            return attr_lastname;
        };
    };

    return self;

}(Contact || {}));
