
Template.hackerList.helpers({
    'Hackers':function (){
      return Hackers.find();
    }
});

Template.hackerList.onCreated(function(){
  console.info("Subbing to Hackers");
	Meteor.subscribe('hackers');
	});
