import React, {Component} from "react"


class MemeGenerator extends Component {
    constructor() {
        super()
        this.state ={
          topText:"",
          bottomText:"",
          randomImg:"http://i.imgflip.com/1bij.jpg",
        }
    }

    /**
     * We'll be using an API that provides a bunch of meme images.
     * 
     * Your task:
     * make an API call to "https://api.imgflip.com/get_memes" and save the 
     * data that comes back (`response.data.memes`) to a new state property
     * called `allMemeImgs`. (The data that comes back is an array)
     */
    
    render() {
        return (
            <h1>MEME GENERATOR SECTION</h1>
        )
    }
}

export default MemeGenerator