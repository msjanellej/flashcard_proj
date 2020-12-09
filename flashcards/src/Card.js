import React, {Component} from 'react';
import Axios from 'axios';


class Card extends Component {
    state={
        word: null,
        definition: null
    }
    componentDidMount(){
        Axios.get(`https://localhost:44393/api/collection`)
        .then(res =>{
            const collection = res.data;
            this.setState({collection})
        })
    }

    render() {
        return(
            <div>
                <h1>TESTING DIV WOO WOO</h1>
            </div>
        );
    }
}

export default Card;