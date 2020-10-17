import { render } from '@testing-library/react';
import React, {Component} from 'react';
import Feed from './Components/Feed';

class App extends Component{
    constructor (props){
        super(props);
        this.state = {
             feed :[{ id: 1, username: 'Naira', curtidas: 10, comentarios:2},
                    { id: 2, username: 'Sergio', curtidas: 5, comentarios:1},
                    { id: 3, username: 'Yuna', curtidas: 30, comentarios:25},
                    { id: 4, username: 'Zack', curtidas: 1, comentarios:0},
                ]
        }
    }
    render(){
        return(
            <div>
                {this.state.feed.map((item) => {
                    
                    return(
                        <Feed key={item.id} username={item.username} curtidas={item.curtidas} comentarios={item.comentarios}/>
                    );
                })}
              
            </div>
        );
    }
}

export default App;
