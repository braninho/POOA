/**
 * Created by blefebur on 15/09/15.
 */

var Contact = Contact || {};

Contact = (function (self) {
    'use strict';

    self.RemoveCommand = function () {
        var contact;

        this.execute = function (attr_id) {
            contact = Contact.Contacts.instance().get(attr_id);
            Contact.Contacts.instance().remove(attr_id);
        };

        this.undo = function () {
            Contact.Contacts.instance().add(contact);
        };
    };

    return self;

}(Contact || {}));