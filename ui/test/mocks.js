const { ObjectId } = require('mongoose').Types;

const mockTodos = [
  {
    "id" : ObjectId("5f6ce226fcc2d67a3cd2aba2"),
    "isComplete" : true,
    "isDeleted" : false,
    "text" : "Test Todo"
  },
  {
    "id" : ObjectId("5f6ce26efcc2d67a3cd2aba3"),
    "isComplete" : false,
    "isDeleted" : false,
    "text" : "Test Todo 2"
  },
  {
    "id" : ObjectId("5f6cf87f037cafc3cc813fde"),
    "isComplete" : false,
    "isDeleted" : true,
    "text" : "Delete Me"
  },
  {
    "id" : ObjectId("5f74c77b21ab55c9c0ea176b"),
    "isComplete" : true,
    "isDeleted" : true,
    "text" : "Test todo input"
  }
];

const nonDeletedTodos = [
  {
    "id" : ObjectId("5f6ce226fcc2d67a3cd2aba2"),
    "isComplete" : true,
    "isDeleted" : false,
    "text" : "Test Todo"
  },
  {
    "id" : ObjectId("5f6ce26efcc2d67a3cd2aba3"),
    "isComplete" : false,
    "isDeleted" : false,
    "text" : "Test Todo 2"
  }
]

const deletedTodos = [
  {
    "id" : ObjectId("5f6cf87f037cafc3cc813fde"),
    "isComplete" : false,
    "isDeleted" : true,
    "text" : "Delete Me"
  },
  {
    "id" : ObjectId("5f74c77b21ab55c9c0ea176b"),
    "isComplete" : true,
    "isDeleted" : true,
    "text" : "Test todo input"
  }
];

module.exports = {
  mockTodos,
  nonDeletedTodos,
  deletedTodos
};
