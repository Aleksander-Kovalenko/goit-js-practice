// Write code under this line
class Storage {
  constructor(items) {
    this.items = items;
  }
  getItems() {
    return this.items;
  }

  addItem(item) {
    this.items.push(item);
  }
  removeItem(item) {
    // const indexToDelete = this.items.findIndex(items => items === item);
    // if (indexToDelete > -1) {
    //   this.items.splice(indexToDelete, 1);
    // }
    // Упрощенная версия
    this.items.splice(this.items.indexOf(item), 1);
  }
}
console.log(typeof Storage);
// 'function'

const goods = ['Нанитоиды', 'Пролонгер', 'Железные жупи', 'Антигравитатор'];

const storage = new Storage(goods);

console.log(storage.getItems());
/* [
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор'
] */

storage.addItem('Дроид');
console.log(storage.getItems());
/* [
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
  'Дроид'
] */

storage.removeItem('Пролонгер');
console.log(storage.getItems());
/* [
  'Нанитоиды',
  'Железные жупи',
  'Антигравитатор',
  'Дроид'
] */
