import List "mo:core/List";
import ContactLib "../lib/contact";
import Types "../types/contact";

mixin (contacts : List.List<Types.ContactEntry>) {
  public func submitContact(name : Text, phone : Text, message : Text) : async Bool {
    ignore ContactLib.submit(contacts, name, phone, message);
    true;
  };

  public query func getContacts() : async [Types.ContactEntry] {
    ContactLib.list(contacts);
  };
};
