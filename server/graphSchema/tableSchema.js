const mongoose = require('mongoose')
const tableSchema = require('../dbSchema/tableSchema')
const tableModel = mongoose.model('table', tableSchema, 'table')

const typeDef = `
    type Table {
        _id: ID!
        name: String,
        season:String,
        h_draw:Int,
        h_goal:Int,
        h_l_goal:Int,
        h_loss:Int,
        h_p:Int,
        h_pts:Int,
        h_win:Int,
        league:String,
        a_draw:Int,
        a_goal:Int,
        a_l_goal:Int,
        a_loss:Int,
        a_p:Int,
        a_pts:Int,
        a_win:Int,
        draw:Int,
        goal:Int,
        l_goal:Int,
        loss:Int,
        p:Int,
        pts:Int,
        win:Int,
        rank:Int
    }

    extend type Query {
        getTables(orderBy: String,direction:SortDirection): [Table],
        getPageTables(orderBy: String,direction:SortDirection,page:Int,keyword:String): [Table],
        getTableCount:Int,
        getWtf(orderBy: String,direction:Int): [Table]
    }
`;



const resolvers = {
    Query: {
        getTables(obj, args, context, info) {
            const orderBy = args.orderBy
            const direction = args.direction
            let sortParam={}
            sortParam[orderBy]=direction
            return tableModel.find({}).sort(sortParam).exec()
        },
        getPageTables(obj, args, context, info) {
            const orderBy = args.orderBy
            const direction = args.direction
            const page= args.page
            const keyword= args.keyword
            let sortParam={}
            sortParam[orderBy]=direction
            let searchParam={}
            if(keyword!==''){
                searchParam['name']={'$regex': keyword}
            }
            return tableModel.find(searchParam).sort(sortParam).skip((page-1)*10).limit(10).exec()
        },
        getTableCount(obj, args, context, info) {
            return tableModel.find({}).count()
        },
        getWtf(obj, args, context, info) {
            wtf = [{win:1}, {win:2}]
            return wtf
        }
    }
};

module.exports = {
    typeDef: typeDef,
    resolvers: resolvers
}
