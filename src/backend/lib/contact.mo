import List "mo:core/List";
import Time "mo:core/Time";
import Types "../types/contact";

module {
  public type ContactEntry = Types.ContactEntry;

  public func submit(
    contacts : List.List<ContactEntry>,
    name : Text,
    phone : Text,
    message : Text,
  ) : ContactEntry {
    let entry : ContactEntry = {
      id = contacts.size();
      name = name;
      phone = phone;
      message = message;
      timestamp = Time.now();
    };
    contacts.add(entry);
    entry;
  };

  public func list(contacts : List.List<ContactEntry>) : [ContactEntry] {
    contacts.toArray();
  };
};
