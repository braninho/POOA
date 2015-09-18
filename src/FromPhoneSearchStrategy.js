/**
 * Created by blefebur on 11/09/15.
 */

var Contact = Contact || {};

Contact = (function (self) {
    'use strict';

    self.FromPhoneSearchStrategy = function (attr_number) {

        this.search = function (attr_contacts) {
            var contact = null;

            for (var i = 0; i < attr_contacts.length; i++) {
                for (var j = 0; j <attr_contacts[i].phones().length; j++) {
                    if (attr_contacts[i].phones()[j].number() === attr_number) {
                        contact = attr_contacts[i];
                    }
                }
            }
            return contact;
        };

        this.getKey = function () {
          return attr_number;
        };
    };

    return self;

}(Contact || {}));
