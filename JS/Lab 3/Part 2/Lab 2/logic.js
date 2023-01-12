// Muhammad Ashraf Ali - OS - Lab 3 - Part 2 - Task 2

var contacts = [];

while (true) {
  var operation = prompt("Please Enter your operation (add - search)");

  switch (operation) {
    case "add":
      var contactName = prompt("Please Enter your contact name");
      var phoneNumber = prompt("Please Enter your contact phone number");
      var contactObj = {
        name: contactName,
        phone: phoneNumber,
      };
      contacts.push(contactObj);
      break;

    case "search":
      var searchToken = prompt("What to search for");
      contactSearchedFor = findContact(contacts) ? findContact(contacts) : null;

      if (contactSearchedFor) {
        alert(
          `Name: ${contactSearchedFor.name} \n Phone: ${contactSearchedFor.phone}`
        );
      } else {
        alert("Contact not found");
      }
      break;
  }
}

function findContact(contactsArr) {
  contactSearchedFor = contactsArr.find(function (element) {
    return element.name == searchToken;
  });

  if (!contactSearchedFor) {
    contactSearchedFor = contactsArr.find(function (element) {
      return element.phone == searchToken;
    });
  }

  return contactSearchedFor;
}
