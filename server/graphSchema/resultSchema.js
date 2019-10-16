const mongoose = require('mongoose')
const resultSchema = require('../dbSchema/resultSchema')
const resultModel = mongoose.model('results', resultSchema, 'results')

const typeDef = `
    type Result {
        _id: ID!
        a_name: String,
        date: String,
        h_name: String,
        league: String,
        season: String,
        a_score: Int,
        h_score: Int
    }

    extend type Query {
        getResults(orderBy: String,direction:SortDirection): [Result],
        getRangeResult(date: String): [Result],
        getClubResult(name: String, from: String, to: String): [Result]
    }
`;



const resolvers = {
    Query: {
        getResults(obj, args, context, info) {
            const orderBy = args.orderBy
            const direction = args.direction
            let sortParam={}
            sortParam[orderBy]=direction
            return resultModel.find({}).sort(sortParam).exec()
        },
        getRangeResult(obj, args, context, info) {
            const date_var = args.date;
            if (typeof date_var !== 'undefined' && date_var.length != 0){
              return resultModel.find({date: date_var});
            }

            let last_one = resultModel.findOne().sort({'date':-1});
            let results = last_one.then(function(res){
              return resultModel.find({date: res.date}).exec();
            });
            return results;
        },
        getClubResult(obj, args, context, info) {
            const name = args.name;
            const from = args.from;
            const to = args.to;
            var win=0, total=0;
            result = resultModel.find({date: {$gt: from, $lt: to}})
                                .find({$or: [{a_name: [name]}, {h_name: [name]}]});

            return result.then(function(raw){
              let i, win=0;
              let wtf = [];
              for (i=0;i<raw.length;i++){
                if (raw[i]["a_name"]==name && raw[i]["a_score"] > raw[i]["h_score"])
                  wtf.push(raw[i]);
                else if (raw[i]["h_name"]==name && raw[i]["h_score"] > raw[i]["a_score"])
                  wtf.push(raw[i]);
              }
              return wtf;
            });;
        }
    }
};

// result2 = resultModel.find({$or: [{a_name: [name]}, {h_name: [name]}]});
// $and: [{a_name: [name]}, {a_score: {$lte: this.h_score}}]
module.exports={
    typeDef:typeDef,
    resolvers:resolvers
}
