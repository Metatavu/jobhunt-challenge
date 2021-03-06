(function() {
  'use strict';

  $.widget("custom.codeMirror", {
    options: {
      lineNumbers: true,
      foldGutter: true,
      lineWrapping: false,
      gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"]
    },
    _create : function() {
      this._editor = CodeMirror.fromTextArea(this.element[0], {
        mode: this.options.mode,
        extraKeys: {"Ctrl-Space": "autocomplete"},
        lineNumbers: this.options.lineNumbers,
        foldGutter: this.options.foldGutter,
        gutters: this.options.gutters,
        lineWrapping: this.options.lineWrapping,
        theme: 'the-matrix'
      });

      this._editor.on("change", $.proxy(function() {
        $(this.element).trigger("change");
      }, this));
    },
    
    value: function (value) {
      if (value !== undefined) {
        this._editor.setValue(value);
      } else {
        return this._editor.getValue();
      }
    },
    
    refresh: function () {
      this._editor.refresh();
    },
    
    _destroy : function() {
    
    }
  });
  
}).call(this);