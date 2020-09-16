// Global
const orm = require("../config/orm.js");
// Burger
const burger = {
    select: function(cb){
        orm.selectAll("burgers",function(res){
            cb(res);
        });
    },
    create: function(cols,vals,cb){
        orm.insertOne("burgers",cols,vals,function(res){
            cb(res);
        });
    },
    update: function(objColVals,condition,cb){
        orm.updateOne("burgers",objColVals,condition,function(res){
            cb(res);
        });
    }
};
// Export Burger
module.exports = burger;