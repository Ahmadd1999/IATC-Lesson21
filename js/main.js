function show() {
    var day;
    var d = new Date().getDay();
    switch (d) {
        case 1: day="Bazar ertəsi";
        break;

        case 2: day="Çərşənbə axşami";
        break;

        case 3: day="Çərşənbə";
        break;

        case 4: day="Cümə axşami";
        break;

        case 5: day="Cümə";
        break;

        case 6: day="Şənbə";
        break;

        case 7: day="Bazar";
        break;
    
        default: day="Melumat sehvdir...";
    }
    document.getElementById("result").innerHTML = day;

}




var task = document.getElementById("list"),
            btn= document.getElementById("additembtn");

        
        function addItem(){
            var inputVal = document.getElementById("inputvalue").value,
            itemList = document.createElement('li'),
            itemText = document.createTextNode(inputVal);
            itemList.appendChild(itemText);

        if(inputVal == ''){
            alert("Melumati daxil edin");
            
        }
        else {
            task.appendChild(itemList);

        }

            var close = document.createElement('span');
            var closeTxt = document.createTextNode("X");
            close.appendChild(closeTxt);
            close.className= "closebtn";
            itemList.appendChild(close);
            close.onclick = function(){
            this.parentElement.style.display="none";
            }
        }
        function createCloseBtn(){

            for(var i=0;i<task.childElementCount;i++){
            var close = document.createElement('span');
            close.appendChild(closeTxt);
            close.className= "closebtn";
            task.children[i].appendChild(close);
            }

        }
        function closeBtn(){
            for(var i=0;i<task.childElementCount;i++){
            var closeBtns = document.getElementsByClassName("closebtn");
            closeBtns[i].onclick = function(){
            this.parentElement.style.display="none";
           }
          }
        }
        createCloseBtn();
        closeBtn();

// function myFunction() {
//     var h = document.createElement("H1", "br");
//     var t = document.createTextNode("Qarabagh Azerbaycandir");
//     h.appendChild(t);
//     document.body.appendChild(h);
//   }



window.onload = function() {
var txt = document.getElementById('txt');
document.getElementById('link').onclick = function(code) {
this.href = 'data:text/plain;charset=utf-11,' + encodeURIComponent(txt.value);
  };
};

main();