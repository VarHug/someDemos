// 获取DOM元素
let tag = document.getElementsByClassName('tag')[0];
let view = document.getElementsByClassName('route-view')[0];
// 事件委托
tag.onclick = function (e) {
  location.hash = e.target.getAttribute('data-path');
};
// 路由器类
class Router {
  constructor() {
    this.currentUrl = '';
    this.routes = {};
  }

  route(path, callback) {
    this.routes[path] = callback || (() => {});
  }

  refresh() {
    this.currentUrl = location.hash.slice(1) || '/';
    this.routes[this.currentUrl]();
  }

  init() {
    window.addEventListener('load', this.refresh.bind(this));
    window.addEventListener('hashchange', this.refresh.bind(this));
  }
}
// 回调函数
let viewFn = function (path) {
  view.innerHTML = `<div class = ${path}>我是${path}</div>`;
}
// 实例化路由器
let route = new Router();

route.init();

route.route('/', viewFn.bind(null, 'apple'));
route.route('/apple', viewFn.bind(null, 'apple'));
route.route('/banana', viewFn.bind(null, 'banana'));
route.route('/pear', viewFn.bind(null, 'pear'));
