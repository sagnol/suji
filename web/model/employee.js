Employee = new Mongo.Collection("employee");

Employee.allow({
    insert: function(userId, thing) {
        thing.createAt = new Date();
        return userId != null;
    },
    update: function(userId, thing, fields, modifier) {
        thing.createdAt = new Date();
        return true;
    },
    remove: function(userId) {
        return userId != null;
    }
});
