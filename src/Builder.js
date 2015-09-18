/**
 * Created by blefebur on 10/09/15.
 */

var Contact = Contact || {};

Contact = (function (self) {
    'use strict';

    self.Builder = function () {

        this.createMinimalContact = function (attr_gender, attr_firstname, attr_lastname) {
            return new Contact.Contact(attr_gender, attr_firstname, attr_lastname);
        };

        this.createContactWithProfessionalMail = function (attr_gender, attr_firstname, attr_lastname, attr_address) {
            var contact = new Contact.Contact(attr_gender, attr_firstname, attr_lastname);

            contact.addMail(new Contact.Mail(attr_address,Contact.MailCategory.PRO));

            return contact;
        };

        this.createContactWithProfessionalMobile = function (attr_gender, attr_firstname, attr_lastname, attr_number) {
            var contact = new Contact.Contact(attr_gender, attr_firstname, attr_lastname);

            contact.addPhone(new Contact.Phone(attr_number,Contact.PhoneCategory.PRO,Contact.PhoneType.MOBILE));

            return contact;
        };

        this.createContactWithTag = function (attr_gender, attr_firstname, attr_lastname, attr_tag){
            var contact = new Contact.Contact(attr_gender, attr_firstname, attr_lastname);

            contact.set_tag(attr_tag);

            return contact;
        };
    };

    return self;

}(Contact || {}));
