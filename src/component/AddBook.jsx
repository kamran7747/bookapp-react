import React,{Component}  from "react";
import BookService from "../services/BookService";

class AddBook extends  Component{
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            author: '',
            price: '',
            publisher: ''
        }
    }
    titleOnChangeEvent = event => {
        this.setState({
            title: event.target.value
        })
    }
    authorOnChangeEvent = event => {
        this.setState({
            author: event.target.value
        })
    }
    priceOnChangeEvent = event => {
        this.setState({
            price: event.target.value
        })
    }
    publisherOnChangeEvent = event => {
        this.setState({
            publisher: event.target.value
        })
    }

    saveBook = e => {
        e.preventDefault()
        let book = {author: this.state.author,
            publisher: this.state.publisher,title:this.state.title,price:this.state.price}
    BookService.addBook(book).then()
        console.log(book)
    }


    render(){
        return (
            <form>
                <div>
                    <label>
                        Title:
                        <input type="text"
                               value={this.state.title}
                               onChange={this.titleOnChangeEvent}
                        />
                    </label>

                    <label>
                        Author:
                        <input type="text"
                               value={this.state.author}
                               onChange={this.authorOnChangeEvent}
                        />
                    </label>
                    <label>
                        Price:
                        <input type="text"
                               value={this.state.price}
                               onChange={this.priceOnChangeEvent}
                        />
                    </label>
                    <label>
                        Publisher:
                        <input type="text"
                               value={this.state.publisher}
                               onChange={this.publisherOnChangeEvent}
                        />
                    </label>
                    <input type="submit" value="Add"
                    onClick={this.saveBook}/>

                </div>
            </form>
        );
    }
}
export default AddBook;