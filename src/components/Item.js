import React, { Component } from 'react';
import { observer } from 'mobx-react'

@observer
class Item extends Component {
    checkItem = (e) => {
        this.props.store.checkItem(e.target.value)
      }
    editItem = (e) => {
        let itemName = e.target.getAttribute("data-id")
        let newLocation = prompt("Enter a new location for the item:")
        newLocation ? this.props.store.editItem(itemName, newLocation) : null
    }
    deleteItem = (e) => {
        let itemName = e.target.getAttribute("data-id")
        this.props.store.deleteItem(itemName)
    }
    render() {
      let item = this.props.item
        return (
            <div className = {item.completed? "crossed" : null}>
              <input type="checkbox" onClick={this.checkItem} value={item.name}/>
              {item.name} {item.location}
              <button className="editItem" data-id={item.name} onClick={this.editItem}>Edit</button>
              <button className="deleteItem" data-id={item.name} onClick={this.deleteItem}>Delete</button>
            </div>)
    }
}

export default Item