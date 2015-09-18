/**
 * Created by blefebur on 18/09/15.
 */


var Contact = Contact || {};

Contact = (function (self) {
    'use strict';

    self.ChangePhoneStrategy = function (firstname, lastname, oldPhone, newPhone) {

        this.change = function (attr_contacts) {
            var contact;


            for (var i = 0; i < attr_contacts.length; i++) {
                if (attr_contacts[i].firstName() === firstname && attr_contacts[i].lastName() === lastname) {
                    for (var j = 0; j < attr_contacts[i].phones().length; j++) {
                        if (attr_contacts[i].phones()[j].number() === oldPhone) {
                            attr_contacts[i].phones()[j].set_number(newPhone);
                            contact = attr_contacts[i];
                        }
                    }
                }
            }

            console.log(contact.firstName());
            console.log(contact.lastName());
            console.log(contact.phones()[0].number());
            contact.notify();
        };
    };

    return self;

}(Contact || {}));