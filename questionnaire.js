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

function check(q4 ) {
	if(q4 == false) {
		alert("第4题起码要选择一个选项");
		return false;
	}
	return true;
}

function check_inputBox(textArea) {
    if (textArea.value === '') {
        alert("第5题不能为空！");
        return false;
    }
    return true;
}

function checkAndInputBox() {    
    var q4 = checkBox("q4");
    var textArea = document.getElementById('textArea');
    check(q4);  
    check_inputBox(textArea);
    if(q4 == true || textArea.value !== ''){
        alert("提交成功!");
    }
}  

function showInputBox() {  
    var inputBox = document.getElementById("otherInput");  
    if (inputBox.style.display === "none") {  
      inputBox.style.display = "block";  
    } else {  
      inputBox.style.display = "none";  
    }  
}
