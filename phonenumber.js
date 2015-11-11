if (Meteor.isClient) {
  Session.setDefault('number', '[Please click on "Click Me"]');

  Template.hello.helpers({
    number: function () {
      return Session.get('number');
    }
  });

  Template.hello.events({
    'click button': function () {
      if (Meteor.isCordova) {
        TelephoneNumber.get(function(result) {
            Session.set('number', result.line1Number);
          }, function() {
            Session.set('number', 'Error. Do the phone have this feature? (Settings > About Phone > SIM > Number)');
          });
      }
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
