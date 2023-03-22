var title = document.getElementById("header-title");
title.style.borderBottom = '2px solid black';
var title2 = document.getElementsByClassName("title")[0];
title2.style.fontWeight = 'bold';
title2.style.color = 'green';
var item = document.getElementsByClassName("list-group-item");
item[2].style.backgroundColor = 'green';
for (var i = 0; i < item.length; i++) {
    item[i].style.fontWeight = 'bold';
}
