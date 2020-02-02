const assert=require('assert');

exports.insertDocument=(db,document,collection,callback)=>{
    const coll=db.collection(collection);
    coll.insert(document,(err,result)=>{
        assert.equal(err,null);
        console.log('inserted'+result.result.n);//result.result.n how many doccuments has been inserted
        callback(result);
    });
};
exports.findDocument=(db,collection,callback)=>{
    const coll=db.collection(collection);
    coll.find({}).toArray((err,docs)=>{//{} empty obj means find all
        assert.equal(err,null);
        callback(docs);

    });

};
exports.removeDocument=(db,document,collection,callback)=>{
    const coll=db.collection(collection);
    coll.deleteOne(doccument,(err,result)=>{//deleteOne first occurance
        assert.equal(err,null);
        console.log("Removed the doccument",doccument);
        callback(result);
    });
};
exports.updateDocument=(db,document,update,collection,callback)=>{
    const coll=db.collection(collection);
    coll.updateOne(document,{$set : update},null,(err,result)=>{
        assert.equal(err,null);
        console.log("Updated the document with:",update);
        callback(result);
    });

};