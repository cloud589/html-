function checkBox(name) {  
	var j = 0;  
	var checkbox = document.getElementsByName(name);  
	if (checkbox.length > 0) {
        for (var i = 0; i < checkbox.length; i++) {
            if(checkbox[i].checked) {
                j++;
                break;
            }
        }
	}
	return j > 0;  
}  

function check() {
	var q4 = checkBox("q4");
	if(q4 == false) {
		alert("第4题起码要选择一个选项");
		return false;
	}
	return true;
}

function check_inputBox() {
    var textArea = document.getElementById('textArea');
    if (textArea.value === '') {
        alert("第5题不能为空！");
        return false;
    }
    return true;
}

function checkAndInputBox() {  
    check();  
    check_inputBox();  
}  

function showInputBox() {  
    var inputBox = document.getElementById("otherInput");  
    if (inputBox.style.display === "none") {  
      inputBox.style.display = "block";  
    } else {  
      inputBox.style.display = "none";  
    }  
}
