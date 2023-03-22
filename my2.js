// var item=document.getElementsByClassName("list-group-item");
//   item[2].style.backgroundColor='green';
//   for(var i=0; i<item.length;i++){
//      item[i].style.fontWeight='bold';
//   }

//    this effect shown for only  on four element because we  access the elemetn by gettag name
var li = document.getElementsByTagName("li");

for (var i = 0; i < li.length; i++) {
    li[i].style.backgroundColor = 'green';
}
