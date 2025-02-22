const __refs = Array.from({ length: 7 }, () => ({}));
const __refMap = {
  "#/components/schemas/Pet": __refs[0],
  "#/components/schemas/ApiResponse": __refs[1],
  "#/components/schemas/Order": __refs[2],
  "#/components/schemas/User": __refs[3],
  "#/components/schemas/Address": __refs[4],
  "#/components/schemas/Category": __refs[5],
  "#/components/schemas/Tag": __refs[6]
};
Object.assign(__refs[0], {
  "required": [
    "name",
    "photoUrls"
  ],
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "examples": {
        "default": {
          "value": 10
        }
      }
    },
    "name": {
      "type": "string",
      "examples": {
        "default": {
          "value": "doggie"
        }
      }
    },
    "category": __refMap["#/components/schemas/Category"],
    "photoUrls": {
      "type": "array",
      "xml": {
        "wrapped": true
      },
      "items": {
        "type": "string",
        "xml": {
          "name": "photoUrl"
        }
      }
    },
    "tags": {
      "type": "array",
      "xml": {
        "wrapped": true
      },
      "items": __refMap["#/components/schemas/Tag"]
    },
    "status": {
      "type": "string",
      "description": "pet status in the store",
      "enum": [
        "available",
        "pending",
        "sold"
      ]
    }
  },
  "xml": {
    "name": "pet"
  }
});
Object.assign(__refs[1], {
  "type": "object",
  "properties": {
    "code": {
      "type": "integer",
      "format": "int32"
    },
    "type": {
      "type": "string"
    },
    "message": {
      "type": "string"
    }
  },
  "xml": {
    "name": "##default"
  }
});
Object.assign(__refs[2], {
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "examples": {
        "default": {
          "value": 10
        }
      }
    },
    "petId": {
      "type": "integer",
      "format": "int64",
      "examples": {
        "default": {
          "value": 198772
        }
      }
    },
    "quantity": {
      "type": "integer",
      "format": "int32",
      "examples": {
        "default": {
          "value": 7
        }
      }
    },
    "shipDate": {
      "type": "string",
      "format": "date-time"
    },
    "status": {
      "type": "string",
      "description": "Order Status",
      "enum": [
        "placed",
        "approved",
        "delivered"
      ],
      "examples": {
        "default": {
          "value": "approved"
        }
      }
    },
    "complete": {
      "type": "boolean"
    }
  },
  "xml": {
    "name": "order"
  }
});
Object.assign(__refs[3], {
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "examples": {
        "default": {
          "value": 10
        }
      }
    },
    "username": {
      "type": "string",
      "examples": {
        "default": {
          "value": "theUser"
        }
      }
    },
    "firstName": {
      "type": "string",
      "examples": {
        "default": {
          "value": "John"
        }
      }
    },
    "lastName": {
      "type": "string",
      "examples": {
        "default": {
          "value": "James"
        }
      }
    },
    "email": {
      "type": "string",
      "examples": {
        "default": {
          "value": "john@email.com"
        }
      }
    },
    "password": {
      "type": "string",
      "examples": {
        "default": {
          "value": "12345"
        }
      }
    },
    "phone": {
      "type": "string",
      "examples": {
        "default": {
          "value": "12345"
        }
      }
    },
    "userStatus": {
      "type": "integer",
      "description": "User Status",
      "format": "int32",
      "examples": {
        "default": {
          "value": 1
        }
      }
    }
  },
  "xml": {
    "name": "user"
  }
});
Object.assign(__refs[4], {
  "type": "object",
  "properties": {
    "street": {
      "type": "string",
      "examples": {
        "default": {
          "value": "437 Lytton"
        }
      }
    },
    "city": {
      "type": "string",
      "examples": {
        "default": {
          "value": "Palo Alto"
        }
      }
    },
    "state": {
      "type": "string",
      "examples": {
        "default": {
          "value": "CA"
        }
      }
    },
    "zip": {
      "type": "string",
      "examples": {
        "default": {
          "value": "94301"
        }
      }
    }
  },
  "xml": {
    "name": "address"
  }
});
Object.assign(__refs[5], {
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "examples": {
        "default": {
          "value": 1
        }
      }
    },
    "name": {
      "type": "string",
      "examples": {
        "default": {
          "value": "Dogs"
        }
      }
    }
  },
  "xml": {
    "name": "category"
  }
});
Object.assign(__refs[6], {
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64"
    },
    "name": {
      "type": "string"
    }
  },
  "xml": {
    "name": "tag"
  }
});
const schema = {
  "openapi": "3.1.0",
  "info": {
    "title": "Swagger Petstore - OpenAPI 3.0",
    "description": "This is a sample Pet Store Server based on the OpenAPI 3.0 specification.  You can find out more about\nSwagger at [http://swagger.io](http://swagger.io). In the third iteration of the pet store, we've switched to the design first approach!\nYou can now help us improve the API whether it's by making changes to the definition itself or to the code.\nThat way, with time, we can improve the API in general, and expose some of the new features in OAS3.\n\nSome useful links:\n- [The Pet Store repository](https://github.com/swagger-api/swagger-petstore)\n- [The source API definition for the Pet Store](https://github.com/swagger-api/swagger-petstore/blob/master/src/main/resources/openapi.yaml)",
    "termsOfService": "http://swagger.io/terms/",
    "contact": {
      "email": "apiteam@swagger.io"
    },
    "license": {
      "name": "Apache 2.0",
      "url": "http://www.apache.org/licenses/LICENSE-2.0.html"
    },
    "version": "1.0.19"
  },
  "externalDocs": {
    "description": "Find out more about Swagger",
    "url": "http://swagger.io"
  },
  "servers": [
    {
      "url": "/api/v3"
    }
  ],
  "tags": [
    {
      "name": "pet",
      "description": "Everything about your Pets",
      "externalDocs": {
        "description": "Find out more",
        "url": "http://swagger.io"
      }
    },
    {
      "name": "store",
      "description": "Access to Petstore orders",
      "externalDocs": {
        "description": "Find out more about our store",
        "url": "http://swagger.io"
      }
    },
    {
      "name": "user",
      "description": "Operations about user"
    }
  ],
  "paths": {
    "/pet": {
      "put": {
        "tags": [
          "pet"
        ],
        "summary": "Update an existing pet",
        "description": "Update an existing pet by Id",
        "operationId": "updatePet",
        "requestBody": {
          "description": "Update an existent pet in the store",
          "content": {
            "application/json": {
              "schema": __refMap["#/components/schemas/Pet"]
            },
            "application/xml": {
              "schema": __refMap["#/components/schemas/Pet"]
            },
            "application/x-www-form-urlencoded": {
              "schema": __refMap["#/components/schemas/Pet"]
            }
          },
          "required": true
        },
        "responses": {
          "200": {
            "description": "Successful operation",
            "content": {
              "application/xml": {
                "schema": __refMap["#/components/schemas/Pet"]
              },
              "application/json": {
                "schema": __refMap["#/components/schemas/Pet"]
              }
            }
          },
          "400": {
            "description": "Invalid ID supplied"
          },
          "404": {
            "description": "Pet not found"
          },
          "405": {
            "description": "Validation exception"
          }
        },
        "security": [
          {
            "petstore_auth": [
              "write:pets",
              "read:pets"
            ]
          }
        ]
      },
      "post": {
        "tags": [
          "pet"
        ],
        "summary": "Add a new pet to the store",
        "description": "Add a new pet to the store",
        "operationId": "addPet",
        "requestBody": {
          "description": "Create a new pet in the store",
          "content": {
            "application/json": {
              "schema": __refMap["#/components/schemas/Pet"]
            },
            "application/xml": {
              "schema": __refMap["#/components/schemas/Pet"]
            },
            "application/x-www-form-urlencoded": {
              "schema": __refMap["#/components/schemas/Pet"]
            }
          },
          "required": true
        },
        "responses": {
          "200": {
            "description": "Successful operation",
            "content": {
              "application/xml": {
                "schema": __refMap["#/components/schemas/Pet"]
              },
              "application/json": {
                "schema": __refMap["#/components/schemas/Pet"]
              }
            }
          },
          "405": {
            "description": "Invalid input"
          }
        },
        "security": [
          {
            "petstore_auth": [
              "write:pets",
              "read:pets"
            ]
          }
        ]
      }
    },
    "/pet/findByStatus": {
      "get": {
        "tags": [
          "pet"
        ],
        "summary": "Finds Pets by status",
        "description": "Multiple status values can be provided with comma separated strings",
        "operationId": "findPetsByStatus",
        "parameters": [
          {
            "name": "status",
            "in": "query",
            "description": "Status values that need to be considered for filter",
            "required": false,
            "explode": true,
            "schema": {
              "type": "string",
              "default": "available",
              "enum": [
                "available",
                "pending",
                "sold"
              ]
            }
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "content": {
              "application/xml": {
                "schema": {
                  "type": "array",
                  "items": __refMap["#/components/schemas/Pet"]
                }
              },
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": __refMap["#/components/schemas/Pet"]
                }
              }
            }
          },
          "400": {
            "description": "Invalid status value"
          }
        },
        "security": [
          {
            "petstore_auth": [
              "write:pets",
              "read:pets"
            ]
          }
        ]
      }
    },
    "/pet/findByTags": {
      "get": {
        "tags": [
          "pet"
        ],
        "summary": "Finds Pets by tags",
        "description": "Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.",
        "operationId": "findPetsByTags",
        "parameters": [
          {
            "name": "tags",
            "in": "query",
            "description": "Tags to filter by",
            "required": false,
            "explode": true,
            "schema": {
              "type": "array",
              "items": {
                "type": "string"
              }
            }
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "content": {
              "application/xml": {
                "schema": {
                  "type": "array",
                  "items": __refMap["#/components/schemas/Pet"]
                }
              },
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": __refMap["#/components/schemas/Pet"]
                }
              }
            }
          },
          "400": {
            "description": "Invalid tag value"
          }
        },
        "security": [
          {
            "petstore_auth": [
              "write:pets",
              "read:pets"
            ]
          }
        ]
      }
    },
    "/pet/{petId}": {
      "get": {
        "tags": [
          "pet"
        ],
        "summary": "Find pet by ID",
        "description": "Returns a single pet",
        "operationId": "getPetById",
        "parameters": [
          {
            "name": "petId",
            "in": "path",
            "description": "ID of pet to return",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int64"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "content": {
              "application/xml": {
                "schema": __refMap["#/components/schemas/Pet"]
              },
              "application/json": {
                "schema": __refMap["#/components/schemas/Pet"]
              }
            }
          },
          "400": {
            "description": "Invalid ID supplied"
          },
          "404": {
            "description": "Pet not found"
          }
        },
        "security": [
          {
            "api_key": []
          },
          {
            "petstore_auth": [
              "write:pets",
              "read:pets"
            ]
          }
        ]
      },
      "post": {
        "tags": [
          "pet"
        ],
        "summary": "Updates a pet in the store with form data",
        "description": "",
        "operationId": "updatePetWithForm",
        "parameters": [
          {
            "name": "petId",
            "in": "path",
            "description": "ID of pet that needs to be updated",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int64"
            }
          },
          {
            "name": "name",
            "in": "query",
            "description": "Name of pet that needs to be updated",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "status",
            "in": "query",
            "description": "Status of pet that needs to be updated",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "405": {
            "description": "Invalid input"
          }
        },
        "security": [
          {
            "petstore_auth": [
              "write:pets",
              "read:pets"
            ]
          }
        ]
      },
      "delete": {
        "tags": [
          "pet"
        ],
        "summary": "Deletes a pet",
        "description": "",
        "operationId": "deletePet",
        "parameters": [
          {
            "name": "api_key",
            "in": "header",
            "description": "",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "petId",
            "in": "path",
            "description": "Pet id to delete",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int64"
            }
          }
        ],
        "responses": {
          "400": {
            "description": "Invalid pet value"
          }
        },
        "security": [
          {
            "petstore_auth": [
              "write:pets",
              "read:pets"
            ]
          }
        ]
      }
    },
    "/pet/{petId}/uploadImage": {
      "post": {
        "tags": [
          "pet"
        ],
        "summary": "uploads an image",
        "description": "",
        "operationId": "uploadFile",
        "parameters": [
          {
            "name": "petId",
            "in": "path",
            "description": "ID of pet to update",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int64"
            }
          },
          {
            "name": "additionalMetadata",
            "in": "query",
            "description": "Additional Metadata",
            "required": false,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/octet-stream": {}
          }
        },
        "responses": {
          "200": {
            "description": "successful operation",
            "content": {
              "application/json": {
                "schema": __refMap["#/components/schemas/ApiResponse"]
              }
            }
          }
        },
        "security": [
          {
            "petstore_auth": [
              "write:pets",
              "read:pets"
            ]
          }
        ]
      }
    },
    "/store/inventory": {
      "get": {
        "tags": [
          "store"
        ],
        "summary": "Returns pet inventories by status",
        "description": "Returns a map of status codes to quantities",
        "operationId": "getInventory",
        "responses": {
          "200": {
            "description": "successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "additionalProperties": {
                    "type": "integer",
                    "format": "int32"
                  }
                }
              }
            }
          }
        },
        "security": [
          {
            "api_key": []
          }
        ]
      }
    },
    "/store/order": {
      "post": {
        "tags": [
          "store"
        ],
        "summary": "Place an order for a pet",
        "description": "Place a new order in the store",
        "operationId": "placeOrder",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": __refMap["#/components/schemas/Order"]
            },
            "application/xml": {
              "schema": __refMap["#/components/schemas/Order"]
            },
            "application/x-www-form-urlencoded": {
              "schema": __refMap["#/components/schemas/Order"]
            }
          }
        },
        "responses": {
          "200": {
            "description": "successful operation",
            "content": {
              "application/json": {
                "schema": __refMap["#/components/schemas/Order"]
              }
            }
          },
          "405": {
            "description": "Invalid input"
          }
        }
      }
    },
    "/store/order/{orderId}": {
      "get": {
        "tags": [
          "store"
        ],
        "summary": "Find purchase order by ID",
        "description": "For valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions.",
        "operationId": "getOrderById",
        "parameters": [
          {
            "name": "orderId",
            "in": "path",
            "description": "ID of order that needs to be fetched",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int64"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "content": {
              "application/xml": {
                "schema": __refMap["#/components/schemas/Order"]
              },
              "application/json": {
                "schema": __refMap["#/components/schemas/Order"]
              }
            }
          },
          "400": {
            "description": "Invalid ID supplied"
          },
          "404": {
            "description": "Order not found"
          }
        }
      },
      "delete": {
        "tags": [
          "store"
        ],
        "summary": "Delete purchase order by ID",
        "description": "For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors",
        "operationId": "deleteOrder",
        "parameters": [
          {
            "name": "orderId",
            "in": "path",
            "description": "ID of the order that needs to be deleted",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int64"
            }
          }
        ],
        "responses": {
          "400": {
            "description": "Invalid ID supplied"
          },
          "404": {
            "description": "Order not found"
          }
        }
      }
    },
    "/user": {
      "post": {
        "tags": [
          "user"
        ],
        "summary": "Create user",
        "description": "This can only be done by the logged in user.",
        "operationId": "createUser",
        "requestBody": {
          "description": "Created user object",
          "content": {
            "application/json": {
              "schema": __refMap["#/components/schemas/User"]
            },
            "application/xml": {
              "schema": __refMap["#/components/schemas/User"]
            },
            "application/x-www-form-urlencoded": {
              "schema": __refMap["#/components/schemas/User"]
            }
          }
        },
        "responses": {
          "default": {
            "description": "successful operation",
            "content": {
              "application/json": {
                "schema": __refMap["#/components/schemas/User"]
              },
              "application/xml": {
                "schema": __refMap["#/components/schemas/User"]
              }
            }
          }
        }
      }
    },
    "/user/createWithList": {
      "post": {
        "tags": [
          "user"
        ],
        "summary": "Creates list of users with given input array",
        "description": "Creates list of users with given input array",
        "operationId": "createUsersWithListInput",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "array",
                "items": __refMap["#/components/schemas/User"]
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful operation",
            "content": {
              "application/xml": {
                "schema": __refMap["#/components/schemas/User"]
              },
              "application/json": {
                "schema": __refMap["#/components/schemas/User"]
              }
            }
          },
          "default": {
            "description": "successful operation"
          }
        }
      }
    },
    "/user/login": {
      "get": {
        "tags": [
          "user"
        ],
        "summary": "Logs user into the system",
        "description": "",
        "operationId": "loginUser",
        "parameters": [
          {
            "name": "username",
            "in": "query",
            "description": "The user name for login",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "password",
            "in": "query",
            "description": "The password for login in clear text",
            "required": false,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "headers": {
              "X-Rate-Limit": {
                "description": "calls per hour allowed by the user",
                "schema": {
                  "type": "integer",
                  "format": "int32"
                }
              },
              "X-Expires-After": {
                "description": "date in UTC when token expires",
                "schema": {
                  "type": "string",
                  "format": "date-time"
                }
              }
            },
            "content": {
              "application/xml": {
                "schema": {
                  "type": "string"
                }
              },
              "application/json": {
                "schema": {
                  "type": "string"
                }
              }
            }
          },
          "400": {
            "description": "Invalid username/password supplied"
          }
        }
      }
    },
    "/user/logout": {
      "get": {
        "tags": [
          "user"
        ],
        "summary": "Logs out current logged in user session",
        "description": "",
        "operationId": "logoutUser",
        "parameters": [],
        "responses": {
          "default": {
            "description": "successful operation"
          }
        }
      }
    },
    "/user/{username}": {
      "get": {
        "tags": [
          "user"
        ],
        "summary": "Get user by user name",
        "description": "",
        "operationId": "getUserByName",
        "parameters": [
          {
            "name": "username",
            "in": "path",
            "description": "The name that needs to be fetched. Use user1 for testing. ",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "content": {
              "application/xml": {
                "schema": __refMap["#/components/schemas/User"]
              },
              "application/json": {
                "schema": __refMap["#/components/schemas/User"]
              }
            }
          },
          "400": {
            "description": "Invalid username supplied"
          },
          "404": {
            "description": "User not found"
          }
        }
      },
      "put": {
        "tags": [
          "user"
        ],
        "summary": "Update user",
        "description": "This can only be done by the logged in user.",
        "operationId": "updateUser",
        "parameters": [
          {
            "name": "username",
            "in": "path",
            "description": "name that needs to be updated",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "description": "Update an existent user in the store",
          "content": {
            "application/json": {
              "schema": __refMap["#/components/schemas/User"]
            },
            "application/xml": {
              "schema": __refMap["#/components/schemas/User"]
            },
            "application/x-www-form-urlencoded": {
              "schema": __refMap["#/components/schemas/User"]
            }
          }
        },
        "responses": {
          "default": {
            "description": "successful operation"
          }
        }
      },
      "delete": {
        "tags": [
          "user"
        ],
        "summary": "Delete user",
        "description": "This can only be done by the logged in user.",
        "operationId": "deleteUser",
        "parameters": [
          {
            "name": "username",
            "in": "path",
            "description": "The name that needs to be deleted",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "400": {
            "description": "Invalid username supplied"
          },
          "404": {
            "description": "User not found"
          }
        }
      }
    }
  },
  "components": {
    "schemas": {
      "Order": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int64",
            "examples": {
              "default": {
                "value": 10
              }
            }
          },
          "petId": {
            "type": "integer",
            "format": "int64",
            "examples": {
              "default": {
                "value": 198772
              }
            }
          },
          "quantity": {
            "type": "integer",
            "format": "int32",
            "examples": {
              "default": {
                "value": 7
              }
            }
          },
          "shipDate": {
            "type": "string",
            "format": "date-time"
          },
          "status": {
            "type": "string",
            "description": "Order Status",
            "enum": [
              "placed",
              "approved",
              "delivered"
            ],
            "examples": {
              "default": {
                "value": "approved"
              }
            }
          },
          "complete": {
            "type": "boolean"
          }
        },
        "xml": {
          "name": "order"
        }
      },
      "Customer": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int64",
            "examples": {
              "default": {
                "value": 1e5
              }
            }
          },
          "username": {
            "type": "string",
            "examples": {
              "default": {
                "value": "fehguy"
              }
            }
          },
          "address": {
            "type": "array",
            "xml": {
              "name": "addresses",
              "wrapped": true
            },
            "items": __refMap["#/components/schemas/Address"]
          }
        },
        "xml": {
          "name": "customer"
        }
      },
      "Address": {
        "type": "object",
        "properties": {
          "street": {
            "type": "string",
            "examples": {
              "default": {
                "value": "437 Lytton"
              }
            }
          },
          "city": {
            "type": "string",
            "examples": {
              "default": {
                "value": "Palo Alto"
              }
            }
          },
          "state": {
            "type": "string",
            "examples": {
              "default": {
                "value": "CA"
              }
            }
          },
          "zip": {
            "type": "string",
            "examples": {
              "default": {
                "value": "94301"
              }
            }
          }
        },
        "xml": {
          "name": "address"
        }
      },
      "Category": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int64",
            "examples": {
              "default": {
                "value": 1
              }
            }
          },
          "name": {
            "type": "string",
            "examples": {
              "default": {
                "value": "Dogs"
              }
            }
          }
        },
        "xml": {
          "name": "category"
        }
      },
      "User": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int64",
            "examples": {
              "default": {
                "value": 10
              }
            }
          },
          "username": {
            "type": "string",
            "examples": {
              "default": {
                "value": "theUser"
              }
            }
          },
          "firstName": {
            "type": "string",
            "examples": {
              "default": {
                "value": "John"
              }
            }
          },
          "lastName": {
            "type": "string",
            "examples": {
              "default": {
                "value": "James"
              }
            }
          },
          "email": {
            "type": "string",
            "examples": {
              "default": {
                "value": "john@email.com"
              }
            }
          },
          "password": {
            "type": "string",
            "examples": {
              "default": {
                "value": "12345"
              }
            }
          },
          "phone": {
            "type": "string",
            "examples": {
              "default": {
                "value": "12345"
              }
            }
          },
          "userStatus": {
            "type": "integer",
            "description": "User Status",
            "format": "int32",
            "examples": {
              "default": {
                "value": 1
              }
            }
          }
        },
        "xml": {
          "name": "user"
        }
      },
      "Tag": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int64"
          },
          "name": {
            "type": "string"
          }
        },
        "xml": {
          "name": "tag"
        }
      },
      "Pet": {
        "required": [
          "name",
          "photoUrls"
        ],
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int64",
            "examples": {
              "default": {
                "value": 10
              }
            }
          },
          "name": {
            "type": "string",
            "examples": {
              "default": {
                "value": "doggie"
              }
            }
          },
          "category": __refMap["#/components/schemas/Category"],
          "photoUrls": {
            "type": "array",
            "xml": {
              "wrapped": true
            },
            "items": {
              "type": "string",
              "xml": {
                "name": "photoUrl"
              }
            }
          },
          "tags": {
            "type": "array",
            "xml": {
              "wrapped": true
            },
            "items": __refMap["#/components/schemas/Tag"]
          },
          "status": {
            "type": "string",
            "description": "pet status in the store",
            "enum": [
              "available",
              "pending",
              "sold"
            ]
          }
        },
        "xml": {
          "name": "pet"
        }
      },
      "ApiResponse": {
        "type": "object",
        "properties": {
          "code": {
            "type": "integer",
            "format": "int32"
          },
          "type": {
            "type": "string"
          },
          "message": {
            "type": "string"
          }
        },
        "xml": {
          "name": "##default"
        }
      }
    },
    "requestBodies": {
      "Pet": {
        "description": "Pet object that needs to be added to the store",
        "content": {
          "application/json": {
            "schema": __refMap["#/components/schemas/Pet"]
          },
          "application/xml": {
            "schema": __refMap["#/components/schemas/Pet"]
          }
        }
      },
      "UserArray": {
        "description": "List of user object",
        "content": {
          "application/json": {
            "schema": {
              "type": "array",
              "items": __refMap["#/components/schemas/User"]
            }
          }
        }
      }
    },
    "securitySchemes": {
      "petstore_auth": {
        "type": "oauth2",
        "flows": {
          "implicit": {
            "authorizationUrl": "https://petstore3.swagger.io/oauth/authorize",
            "scopes": {
              "write:pets": "modify pets in your account",
              "read:pets": "read your pets"
            }
          }
        }
      },
      "api_key": {
        "type": "apiKey",
        "name": "api_key",
        "in": "header"
      }
    }
  }
};
export {
  schema
};
//# sourceMappingURL=openapi.yaml-C31iRuAX.js.map
