/**
 * Created by blefebur on 18/09/15.
 */

var Contact = Contact || {};

Contact = (function (self) {
    'use strict';

    self.Handler = function (attr_contact, attr_handler) {

        var list_contact = attr_contact;

        this.get_contact = function (attr_indice) {
            return list_contact[attr_indice];
        };

        this.getHandler = function () {
            return this;
        };

        this.processRequest = function (attr_request) {
            var contact = attr_request.get_contact();
            var bool;
            if (this === null) {
                bool = false;
            } else {
                if (list_contact.size() === 0) {
                    list_contact.add(contact);
                    bool = true;
                }else if (contact.tag() === list_contact.getListe().tag()) {
                    list_contact.add(contact);
                    bool = true;
                }else{
                    attr_handler.processRequest(attr_request);
                }
            }
        };

    };

    return self;

}(Contact || {}));