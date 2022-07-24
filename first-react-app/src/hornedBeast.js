import React from 'react';

class HornedBeast extends React.Component{

    render(){
        return(
            <div>
                <h2> Lamblike Beast</h2>
                <img src={require('./images/lamblike.png')} alt='Lamblike Beast'/>
                <p> The lamblike beast represented the priests of Roman state religion. Modern parallels exist in religious leaders who unite the separate kingdoms of the state and God into a civil religion that places one’s allegiance to the flag alongside or above one’s allegiance to the Cross.</p>
                <h2> Unicorn</h2>
                <img src={require('./images/unicorn.png')} alt='unicorn'/>
                <p> Tens of thousands of years ago, unicorns did, in fact, exist. They were just more hideous than you’d ever imagine. In real life, the Siberian unicorn looked more like a giant, hairy rhino than a Lisa Frank horse. It fed its six-and-a-half-foot, four-ton frame by eating lots of grass.</p>
            </div>
           
        )
    }
}

export default HornedBeast;