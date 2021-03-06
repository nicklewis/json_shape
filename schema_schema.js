{
  "schema" : [ "dictionary", {"contents": "definition"} ],
  "definition" : [ "either", {"choices": ["definition_atom", "definition_singleton", "definition_pair"] } ],

  "builtin_type" : [ "enum", {
    "values": ["string", "number", "boolean", "null", "undefined", "array", "object", "anything",
               "literal", "optional", "integer", "enum",
               "tuple", "dictionary", "either", "restrict"
              ]
  } ],

  "definition_atom" : [ "either", {
    "choices": [ "custom_type", "builtin_type_with_optional_parameters", "builtin_type_without_parameters" ]
  } ],

  "definition_singleton" : [ "tuple", {
    "elements": [ "definition_atom" ]
  } ],

  "definition_pair" : ["either", {"choices" :
    [
      [ "tuple", {"elements": [ "builtin_type_without_parameters", ["literal",{}]  ] } ],

      [ "tuple", {"elements": [ ["literal", "literal"]   , "anything"              ] } ],
      [ "tuple", {"elements": [ ["literal", "optional"]  , "definition"            ] } ],

      [ "tuple", {"elements": [ ["literal", "string"]    , "string_parameters"     ] } ],
      [ "tuple", {"elements": [ ["literal", "number"]    , "number_parameters"     ] } ],
      [ "tuple", {"elements": [ ["literal", "integer"]   , "integer_parameters"    ] } ],
      [ "tuple", {"elements": [ ["literal", "array"]     , "array_parameters"      ] } ],
      [ "tuple", {"elements": [ ["literal", "object"]    , "object_parameters"     ] } ],
      [ "tuple", {"elements": [ ["literal", "dictionary"], "dictionary_parameters" ] } ],
      [ "tuple", {"elements": [ ["literal", "restrict"]  , "restrict_parameters"   ] } ],

      [ "tuple", {"elements": [ ["literal", "enum"]      , "enum_parameters"       ] } ],
      [ "tuple", {"elements": [ ["literal", "tuple"]     , "tuple_parameters"      ] } ],
      [ "tuple", {"elements": [ ["literal", "either"]    , "either_parameters"     ] } ]
    ]
  } ],

  "custom_type" : ["restrict", {
    "require": ["string"],
    "reject":  ["builtin_type"]
  } ],

  "builtin_type_without_parameters" : ["enum", {
    "values": ["boolean", "null", "undefined", "anything"]
  } ],

  "builtin_type_with_optional_parameters" :  ["enum", {
    "values": ["string", "number", "integer", "array", "object", "dictionary", "restrict"]
  } ],

  "builtin_type_with_mandatory_parameters" : ["enum", {
    "values": ["literal", "optional", "enum", "tuple", "either"]
  } ],

  "optional_definition": [ "optional", "definition" ],
  "optional_definitions": [ "optional", ["array", {"contents": "definition"} ] ],

  "string_parameters": [ "object", {"members": {"matches": ["optional", "string"] } } ],

  "number_parameters": [ "object", {"members": {"min": ["optional", "number"], "max": ["optional", "number"] } } ],

  "integer_parameters": [ "object", {"members": {"min": ["optional", "integer"], "max": ["optional", "integer"] } } ],

  "array_parameters": [ "object", {"members": {
    "contents": "optional_definition",
    "length":   "optional_definition"
  } } ],

  "object_parameters": [ "object", {"members": {
    "members": ["optional", ["dictionary", { "contents": "definition"} ] ],
    "allow_extra":   ["optional", "boolean"],
    "allow_missing": ["optional", "boolean"]
  } } ],

  "dictionary_parameters": [ "object", {"members": {"keys": ["optional", "string"], "contents": "optional_definition" } } ],

  "restrict_parameters": [ "object", {"members": {
    "require" : "optional_definitions",
    "reject"  : "optional_definitions"
  } } ],

  "enum_parameters": [ "object", {"members": {
    "values" : ["array", {"contents": "anything"}]
  } } ],

  "tuple_parameters": [ "object", {
    "members" : {
      "elements" : ["array", {"contents": "definition"}]
    }
  } ],

  "either_parameters": [ "object", {
    "members" : {
      "choices" : ["array", {"contents": "definition"}]
    }
  } ]

}
