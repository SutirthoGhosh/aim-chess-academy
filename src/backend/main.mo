import List "mo:core/List";
import Types "types/contact";
import ContactMixin "mixins/contact-api";

actor {
  let contacts = List.empty<Types.ContactEntry>();

  include ContactMixin(contacts);
};
