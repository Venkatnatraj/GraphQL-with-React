const graphql = require('graphql')

const _ = require('lodash');

var books = [
    {id: "1" , name : 'Game Of Thrones' , genre : "Commercial"},
    {id: "2" , name : 'Avatar' , genre : "Sci-Fi"},
    {id: "3" , name : 'Marvels' , genre : "Action"}
]

const {GraphQLObjectType , GraphQLString , GraphQLSchema} = graphql;

const BookType = new GraphQLObjectType({
    name : 'Book',
    fields : ()=>({
        id : {type: GraphQLString},
        name : {type : GraphQLString},
        genre : {type : GraphQLString}
    })
})

const RootQuery = new GraphQLObjectType({
    name : 'RootQueryType',
    fields : {
        book : {
            type : BookType,
            args : {id : {type : GraphQLString}},
            resolve (parent , args){

                //Code to get Data from DataBase

                return _.find(books,{id : args.id})
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query : RootQuery
})