Blockly.Blocks['connect_blynk'] = {
  init: function() {
    this.appendValueInput("wifi")
        .setCheck(null)
        .appendField("kết nối Blynk với wifi");
    this.appendValueInput("password")
        .setCheck(null)
        .appendField("password");
    this.appendValueInput("auth_key")
        .setCheck(null)
        .appendField("mã xác thực");
    this.appendDummyInput();
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#00A06B');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['on_app_pin_write'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("khi app cập nhật ")
        .appendField(new Blockly.FieldVariable("giá trị"), "VALUE")
        .appendField("cho")
        .appendField(new Blockly.FieldDropdown([["V1","V1"], ["V2","V2"], ["V3","V3"], ["V4","V4"], ["V5","V5"], ["V6","V6"], ["V7","V7"], ["V8","V8"], ["V9","V9"], ["V10","V10"], ["V11","V11"], ["V12","V12"], ["V13","V13"], ["V14","V14"], ["V15","V15"], ["V16","V16"]]), "Pin");
    this.appendStatementInput("handler")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#00A06B');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['update_pin'] = {
  init: function() {
    this.appendValueInput("VALUE")
        .setCheck(null)
        .appendField("cập nhập ")
        .appendField(new Blockly.FieldDropdown([["V1","1"], ["V2","2"], ["V3","3"], ["V4","4"], ["V5","5"], ["V6","6"], ["V7","7"], ["V8","8"], ["V9","9"], ["V10","10"], ["V11","11"], ["V12","12"], ["V13","13"], ["V14","14"], ["V15","15"], ["16","16"]]), "Pin")
        .appendField("giá trị")
    this.appendDummyInput();
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#00A06B');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['notify'] = {
  init: function() {
    this.appendValueInput("message")
        .setCheck(null)
        .appendField("gửi thông báo");
    this.appendDummyInput();
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#00A06B');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['email'] = {
  init: function() {
    this.appendValueInput("Email")
        .setCheck(null)
        .appendField("gửi email đến");
    this.appendValueInput("Subject")
        .setCheck(null)
        .appendField("tiêu đề");
    this.appendValueInput("Body")
        .setCheck(null)
        .appendField("nội dung");
    this.appendDummyInput();
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#00A06B');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['blynk_run'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("cập nhập từ Blynk");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#00A06B');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

// Any imports need to be reserved words
Blockly.Python.addReservedWords('blynklib_mp');
Blockly.Python.addReservedWords('network');
Blockly.Python.addReservedWords('time');

Blockly.Python['connect_blynk'] = function(block) {
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

Blockly.Python['on_app_pin_write'] = function(block) {
  var dropdown_v = block.getFieldValue('Pin');
  var variable_value = Blockly.Python.variableDB_.getName(block.getFieldValue('VALUE'), Blockly.Variables.NAME_TYPE);
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
    [ '@blynk.handle_event(\'write ' + dropdown_v + '\')\n' +
      'def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(vpin, ' + variable_value +  '):\n' +
      Blockly.Python.INDENT + variable_value + ' = '+ variable_value + '[0]\n' +
      Blockly.Python.INDENT + 'try:\n' +
      Blockly.Python.INDENT + Blockly.Python.INDENT + variable_value + ' = float(' + variable_value + ')\n' +
      Blockly.Python.INDENT + 'except:\n' +
      Blockly.Python.INDENT + Blockly.Python.PASS,
      statements_action || Blockly.Python.PASS
    ]);
  return "";
};

Blockly.Python['update_pin'] = function(block) {
  var dropdown_name = block.getFieldValue('Pin');
  var value_value = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'blynk.virtual_write('+ dropdown_name + ', ' + value_value +')\n';
  return code;
};

Blockly.Python['notify'] = function(block) {
  var value_message = Blockly.Python.valueToCode(block, 'message', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'blynk.notify(' + value_message + ')\n';
  return code;
};

Blockly.Python['email'] = function(block) {
  var value_email = Blockly.Python.valueToCode(block, 'Email', Blockly.Python.ORDER_ATOMIC);
  var value_subject = Blockly.Python.valueToCode(block, 'Subject', Blockly.Python.ORDER_ATOMIC);
  var value_body = Blockly.Python.valueToCode(block, 'Body', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = "blynk.email(" + value_email + ", " + value_subject + ", " + value_body + ")\n";
  return code;
};

Blockly.Python['blynk_run'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'blynk.run()\n';
  return code;
};