/**
 * Created by blefebur on 18/09/15.
 */

var Contact = Contact || {};

Contact = (function (self) {
    'use strict';

    self.ProxyCache = function (listeContact) {
        var historique = {};

        this.search = function (attr_strategy) {
            var contact = null;
            var compteur = 0;

            if (historique.hasOwnProperty(attr_strategy.getKey()) === true) {
                return historique[attr_strategy.getKey()];
            } else {
                while (contact === null && compteur < listeContact.length) {
                    if (listeContact[compteur].search(attr_strategy) !== null) {
                        contact = listeContact[compteur].search(attr_strategy);
                    }
                    compteur = compteur + 1;
                }

                if (contact !== null) {
                    contact.register(this);
                    historique[attr_strategy.getKey()] = contact;
                }
            };

            return contact;
        };

        this.inCache = function (attr_strategy) {

            return historique.hasOwnProperty(attr_strategy.getKey());
        };

        this.update = function (attr_contact) {
            for (var key in historique) {
                if (historique[key] === attr_contact) {
                    delete historique[key];
                }
            }
        };

    };

    return self;

}(Contact || {}));