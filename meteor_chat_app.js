if (Meteor.isClient) {

  // Set default room id
  Session.setDefault('room', 0);

  // Find messages of rooms
  Template.rooms.helpers({
    rooms: function() {
        return Rooms.find({}, { sort: { time: -1}});
    }
  })

  //  Find messages of rooms 
  Template.messages.helpers({
    messages: function() {
        return Messages.find({room_id: Session.get('room')}, { sort: { time: -1}});
    }
  })

  //  Add Chat messages 
  Template.inputroom.events = {
    'keydown input#room' : function (event) {
      if (event.which == 13) { // 13 is the enter key event
        var name = 'Anonymous';
        var room = document.getElementById('room');
        
        if (room.value != '') {
          Rooms.insert({
            name: name,
            room_name: room.value,
            time: Date.now(),
          });
          document.getElementById('room').value = '';
          room.value = '';
        }
      }
    }

  }

  // Event for room  
  Template.rooms.events = {
    'click button' : function (event) {
      console.log(event.currentTarget.id);
      Session.set('room', event.currentTarget.id);

      $('.rooms').hide();
      $('.messages').show();
    }    
  }

   
  //  Add Chat messages 
  Template.input.events = {
    'keydown input#message' : function (event) {
      if (event.which == 13) { // 13 is the enter key event
        var name = 'Anonymous';
        var message = document.getElementById('message');
   
        if (message.value != '') {
          Messages.insert({
            name: name,
            message: message.value,
            room_id: Session.get('room'),
            time: Date.now(),
          });
   
          document.getElementById('message').value = '';
          message.value = '';
        }
      }
    }
  }
}


if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
