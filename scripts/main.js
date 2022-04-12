function init() { goodsOut(goods); }

function goodsOut(data) {
  let out = ""; 
  for(let key in data) {
    out += '<button class="cart">';
    out += '<p class="name">' + data[key].name + '</p>';
    out += '<img src="resources/images/' + data[key].img + '">';
    out += '<div class="cost">' + data[key].cost + '&#8381;</div>';
    out += '</button>';
  }

  console.log(document.getElementsByClassName("goods-out")[0]);
  document.getElementsByClassName("goods-out")[0].innerHTML = out;
}

window.onload = function() { init(); };