const {MongoClient, ObjectId} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err,client) => {
    if(err){
        return console.log(err);
    }
    console.log("connected");
    const db = client.db ("TodoApp");

    db.collection("Todos").updateOne({_id: new ObjectId("5bbb0cd58e76bd21442141fe")},
    {$set:{
        completed:false
    }
}).then((result) => {
        console.log(JSON.stringify(docs, undefined, 4));
    }).catch((err) => {
        console.log(err);
    });
  
    client.close();
});