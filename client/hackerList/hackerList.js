
Template.hackerList.helpers({
    'Hackers':function (){
      return Hackers.find }();

}); 

Template.hackerList.OnCreated(function(){
	Meteor.subsribe('hackers')
	});
