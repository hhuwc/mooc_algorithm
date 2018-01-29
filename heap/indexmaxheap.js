let utils = require("../utils/randomArray");

function maxheap() {
  this._indexes = new Array();
  this._data = new Array();
  this._reverse = new Array();
  this._count = 0;
}

maxheap.prototype.size = function() {
  return this._count;
};
//父节点为 n  左子节点 为 2n , 右子节点 为 2n+1

maxheap.prototype.push = function(data) {
  this._data[++this._count] = data;
  this._shiftUp(this._count);
};
maxheap.prototype._shiftUp = function(index) {
  //使用 位运算 不需要 进行四舍五入
  while (index > 1 && this._data[index >> 1] < this._data[index]) {
    this._swap(index >> 1, index);
    index = index >> 1;
  }
};
maxheap.prototype.pop = function() {
  var temp = this._data[1];
  this._swap(1, this._count);
  this._data.splice(this._count--);
  this._shiftDown(1);
  return temp;
};
maxheap.prototype._shiftDown = function(index) {
  while (2 * index <= this._count) {
    var j = 2 * index;
    //判断 是否有 左右子树 ,并找出 其中 最大的 一颗 子树
    if (j + 1 <= this._count && this._data[j + 1] > this._data[j]) {
      j++;
    }

    if (this._data[index] >= this._data[j]) {
      break;
    }

    this._swap(index, j);
    index = j;
  }
};
maxheap.prototype._swap = function(arr, n1, n2) {
  arr[n1] = arr[n1] + arr[n2];
  arr[n2] = arr[n1] - arr[n2];
  arr[n1] = arr[n1] - arr[n2];
};

let count = 1000000;
let arr = utils.randomArray(count); //NearlyOrder

let start = new Date().getTime();

let end = new Date().getTime();
if (utils.isSorted(arr)) {
  console.log("堆排序时间" + (end - start));
}
