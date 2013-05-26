Posts = new Meteor.Collection('posts');
if(Meteor.isServer) {
  Posts.allow({
    insert: function(userId, doc) {
      return !!userId;
    }
  })
}