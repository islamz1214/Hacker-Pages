
Template.hackerList.helpers({
    'Hackers':function() {
      return Hackers.find();
    },
    'createdByUserId':function() {
    	return this.createdBy === Meteor.userId();
    }
});

Template.hackerList.onCreated(function(){
  console.info("Subbing to Hackers");
	Meteor.subscribe('hackers');
	});
