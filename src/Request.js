/**
 * Created by blefebur on 18/09/15.
 */

var Contact = Contact || {};

Contact = (function (self) {
    'use strict';

    var contact;

    self.Request = function (attr_contact) {
        contact = attr_contact;
        contact.set_Tag(attr_contact.tag());
        contact.set_firstName(attr_contact.firstName());
        contact.set_lastName(attr_contact.lastName());

        this.get_contact = function () {
           return contact;
        };
    };

    return self;

}(Contact || {}));