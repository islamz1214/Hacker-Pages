Hackers = new Mongo.Collection('hackers');
if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('hackers', function hackersPub() {
    console.log('Publishing Hackers');
    return Hackers.find({allegiance:"Black Hat"});
  });
}
