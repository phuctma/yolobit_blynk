Blockly.Blocks['yolobit_blynk_connect'] = {
  init: function() {
    this.jsonInit({
    "type": "yolobit_blynk_connect",
    "message0": 
    Blockly.Msg.YOLOBIT_BLYNK_CONNECT_MESSAGE0,
      "args0": [
        {
          "type": "input_value",
          "name": "wifi"
        },
        {
          "type": "input_value",
          "name": "password"
        },
        {
          "type": "input_value",
          "name": "auth_key"
        },
        {
          "type": "input_dummy"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#00A06B",
      "tooltip":
        Blockly.Msg.YOLOBIT_BLYNK_CONNECT_TOOLTIP,
      "helpUrl": 
        Blockly.Msg.YOLOBIT_BLYNK_CONNECT_HELPURL
    });
  }
};

Blockly.Blocks['yolobit_blynk_app_pin_write'] = {
  init: function() {
    this.jsonInit({
    "type": "yolobit_blynk_app_pin_write",
    "message0": Blockly.Msg.YOLOBIT_BLYNK_APP_PIN_WRITE_MESSAGE0,
    "args0": [
      {
        "type": "field_variable",
        "name": "value",
        "variable": Blockly.Msg.YOLOBIT_BLYNK_APP_PIN_WRITE_MESSAGE1
      },
      {
        "type": "field_dropdown",
        "name": "pin",
        "options": [
          [
            "V1",
            "V1"
          ],
          [
            "V2",
            "V2"
          ],
          [
            "V3",
            "V3"
          ],
          [
            "V4",
            "V4"
          ],
          [
            "V5",
            "V5"
          ],
          [
            "V6",
            "V6"
          ],
          [
            "V7",
            "V7"
          ],
          [
            "V8",
            "V8"
          ],
          [
            "V9",
            "V9"
          ],
          [
            "V10",
            "V10"
          ],
          [
            "V11",
            "V11"
          ],
          [
            "V12",
            "V12"
          ],
          [
            "V13",
            "V13"
          ],
          [
            "V14",
            "V14"
          ],
          [
            "V15",
            "V15"
          ],
          [
            "V16",
            "V16"
          ]
        ]
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "handler"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": '#00A06B',
    "tooltip": Blockly.Msg.YOLOBIT_BLYNK_APP_PIN_WRITE_TOOLTIP,
    "helpUrl": Blockly.Msg.YOLOBIT_BLYNK_APP_PIN_WRITE_HELPURL
    });
  }
};

Blockly.Blocks['yolobit_blynk_update_pin'] = {
  init: function() {
    this.jsonInit({
      "type": "yolobit_blynk_update_pin",
      "message0": Blockly.Msg.YOLOBIT_BLYNK_UPDATE_PIN_MESSAGE0,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "pin",
          "options": [
            [
              "V0",
              "0"
            ],
            [
              "V1",
              "1"
            ],
            [
              "V2",
              "2"
            ],
            [
              "V3",
              "3"
            ],
            [
              "V4",
              "4"
            ],
            [
              "V5",
              "5"
            ],
            [
              "V6",
              "6"
            ],
            [
              "V7",
              "7"
            ],
            [
              "V8",
              "8"
            ],
            [
              "V9",
              "9"
            ],
            [
              "V10",
              "10"
            ],
            [
              "V11",
              "11"
            ],
            [
              "V12",
              "12"
            ],
            [
              "V13",
              "13"
            ],
            [
              "V14",
              "14"
            ],
            [
              "V15",
              "15"
            ],
            [
              "V16",
              "16"
            ]
          ]
        },
        {
          "type": "input_value",
          "name": "value"
        },
        {
          "type": "input_dummy"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#00A06B',
      "tooltip": Blockly.Msg.YOLOBIT_BLYNK_UPDATE_PIN_TOOLTIP,
      "helpUrl": Blockly.Msg.YOLOBIT_BLYNK_UPDATE_PIN_HELPURL
    });
  }
};

Blockly.Blocks['yolobit_blynk_notify'] = {
  init: function() {
    this.jsonInit({
      "type": "yolobit_blynk_notify",
      "message0": Blockly.Msg.YOLOBIT_BLYNK_NOTIFY_MESSAGE0,
      "args0": [
        {
          "type": "input_value",
          "name": "message"
        },
        {
          "type": "input_dummy"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#00A06B',
      "tooltip": Blockly.Msg.YOLOBIT_BLYNK_NOTIFY_TOOLTIP,
      "helpUrl": Blockly.Msg.YOLOBIT_BLYNK_NOTIFY_HELPURL
    });
  }
};

Blockly.Blocks['yolobit_blynk_email'] = {
  init: function() {
    this.jsonInit({
      "type": "yolobit_blynk_email",
      "message0": Blockly.Msg.YOLOBIT_BLYNK_EMAIL_MESSAGE0,
      "args0": [
        {
          "type": "input_value",
          "name": "email"
        },
        {
          "type": "input_value",
          "name": "subject"
        },
        {
          "type": "input_value",
          "name": "body"
        },
        {
          "type": "input_dummy"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#00A06B',
      "tooltip": Blockly.Msg.YOLOBIT_BLYNK_EMAIL_TOOLTIP,
      "helpUrl": Blockly.Msg.YOLOBIT_BLYNK_EMAIL_HELPURL
    });
  }
};

Blockly.Blocks['yolobit_blynk_run'] = {
  init: function() {
    this.jsonInit({
      "type": "yolobit_blynk_run",
      "message0": Blockly.Msg.YOLOBIT_BLYNK_RUN_MESSAGE0,
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#00A06B',
      "tooltip": Blockly.Msg.YOLOBIT_BLYNK_RUN_TOOLTIP,
      "helpUrl": Blockly.Msg.YOLOBIT_BLYNK_RUN_HELPURL
    });
  }
};

// Any imports need to be reserved words
Blockly.Python.addReservedWords('blynklib_mp');
Blockly.Python.addReservedWords('network');
Blockly.Python.addReservedWords('time');

Blockly.Python['yolobit_blynk_connect'] = function(block) {
  Blockly.Python.definitions_['import_blynklib_mp'] = 'from blynklib_mp import *';
  Blockly.Python.definitions_['import_network'] = 'from network import *';
  Blockly.Python.definitions_['import_time'] = 'from time import *';
  var value_wifi = Blockly.Python.valueToCode(block, 'wifi', Blockly.Python.ORDER_ATOMIC);
  var value_password = Blockly.Python.valueToCode(block, 'password', Blockly.Python.ORDER_ATOMIC);
  var value_auth_key = Blockly.Python.valueToCode(block, 'auth_key', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_connect'] = 'blynk = connect('+ value_wifi + ' , ' + value_password +', ' + value_auth_key + ')';
  return '';
};

Blockly.Python['yolobit_blynk_app_pin_write'] = function(block) {
  var dropdown_v = block.getFieldValue('pin');
  var variable_value = Blockly.Python.variableDB_.getName(block.getFieldValue('value'), Blockly.Variables.NAME_TYPE);
  var statements_action = Blockly.Python.statementToCode(block, 'handler');

  //Global variables except local variable
  var globals = [];
  var varName;
  var variables = block.workspace.getAllVariables() || [];

  for (var i = 0, variable; variable = variables[i]; i++) {
    varName = Blockly.Python.variableDB_.getName(variable.name,Blockly.Variables.NAME_TYPE);
    if (varName != variable_value){
      globals.push(varName);
    }
  }
  globals = globals.length ? Blockly.Python.INDENT + 'global ' + globals.join(', ') : '';
  // TODO: Assemble Python into code variable.
  var cbFunctionName = Blockly.Python.provideFunction_(
    'write_pin_handler_' + dropdown_v,
    ['@blynk.handle_event(\'write ' + dropdown_v + '\')\n' +
      'def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(vpin, ' + variable_value +  '):',
      globals,
      Blockly.Python.INDENT + variable_value + ' = '+ variable_value + '[0]\n' +
      Blockly.Python.INDENT + 'try:\n' +
      Blockly.Python.INDENT + Blockly.Python.INDENT + variable_value + ' = float(' + variable_value + ')\n' +
      Blockly.Python.INDENT + 'except:\n' +
      Blockly.Python.INDENT + Blockly.Python.PASS,
      statements_action || Blockly.Python.PASS
    ]);
  return "";
};

Blockly.Python['yolobit_blynk_update_pin'] = function(block) {
  var dropdown_name = block.getFieldValue('pin');
  var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'blynk.virtual_write('+ dropdown_name + ', ' + value_value +')\n';
  return code;
};

Blockly.Python['yolobit_blynk_notify'] = function(block) {
  var value_message = Blockly.Python.valueToCode(block, 'message', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'blynk.notify(' + value_message + ')\n';
  return code;
};

Blockly.Python['yolobit_blynk_email'] = function(block) {
  var value_email = Blockly.Python.valueToCode(block, 'email', Blockly.Python.ORDER_ATOMIC);
  var value_subject = Blockly.Python.valueToCode(block, 'subject', Blockly.Python.ORDER_ATOMIC);
  var value_body = Blockly.Python.valueToCode(block, 'body', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = "blynk.email(" + value_email + ", " + value_subject + ", " + value_body + ")\n";
  return code;
};

Blockly.Python['yolobit_blynk_run'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'blynk.run()\n';
  return code;
};