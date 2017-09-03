var delay;
var edt = CodeMirror.fromTextArea(document.getElementById("code"), {
  			mode: 'htmlmixed',
  			styleActiveLine: true,
  			lineNumbers: true,
  			lineWrapping: true,
			theme: "monokai",
			readOnly: false,
			renderLine: true
		});
		edt.on("change", function() {
        clearTimeout(delay);
        delay = setTimeout(updatePreview, 300);
      	});
      	
      	CodeMirror.commands["selectAll"](edt);
      function getSelectedRange() {
        return { from: edt.getCursor(true), to: edt.getCursor(false) };
      }
      
      function autoFormatSelection() {
        var range = getSelectedRange();
        edt.autoFormatRange(range.from, range.to);
      }
      
		function updatePreview() {
        var previewFrame = document.getElementById('hasil');
        var preview =  previewFrame.contentDocument ||  previewFrame.contentWindow.document;
        preview.open();
        preview.write(edt.getValue());
        preview.close();
      }
      setTimeout(updatePreview, 300);