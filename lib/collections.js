Hackers = new Mongo.Collection('hackers');
if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('hackers', function hackers() {
    return Hackers.find();
  });
}
