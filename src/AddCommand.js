/**
 * Created by blefebur on 15/09/15.
 */

var Contact = Contact || {};

Contact = (function (self) {
    'use strict';

    self.AddCommand = function () {
        var contact;

        this.execute = function (attr_contact) {
            contact = attr_contact;
            Contact.Contacts.instance().add(attr_contact);
        };

        this.undo = function () {
            Contact.Contacts.instance().remove(contact.id());
        };
    };

    return self;

}(Contact || {}));

