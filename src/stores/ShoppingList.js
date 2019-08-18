import { observable, action } from 'mobx'
import { Item } from './Item'


export class ShoppingList {
    // your code here
    @observable list = [];
    @observable length;
    @action checkItem = (name) => {
        let item = this.list.find( i => i.name === name )
        item.completed = !item.completed
    }
    @action addItem = (name) => {
        this.list.push(new Item(name))
    }
    @action editItem = (itemName, newLocation) => {
        let item = this.list.find( i => i.name === itemName )
        item.location = newLocation
    }
    @action deleteItem = (itemName) => {
        let item = this.list.find( i => i.name === itemName )
        let indexOfItem = this.list.indexOf(item)
        this.list.splice(indexOfItem, 1)
    } 
}

