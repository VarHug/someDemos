/**
 * 为CSS3属性加前缀
 * @export
 * @param {String} key
 */
export default function prefix(key) {
  let prefixArr = ['Moz', 'ms', 'Webkit', ''];
  return prefixArr.map(val => val + key);
}
