import React, {Component} from "react"


class MemeGenerator extends Component {
    constructor() {
        super()
        this.state ={
          topText:"",
          bottomText:"",
          randomImg:"http://i.imgflip.com/1bij.jpg",
          memes:[]
        }
        this.changeHandler=this.changeHandler.bind(this)
        this.genClicked=this.genClicked.bind(this)
    }

    changeHandler(evt){
      const {name,value} = evt.target
      this.setState({
          [name]:value
      })
    }

    genClicked(evt){
      evt.preventDefault()
      const memes = this.state.memes
      const randomIndex=Math.floor(Math.random()*memes.length)
      const newRandomImg = memes[randomIndex].url
        this.setState({
          randomImg:newRandomImg
        })
    }

    componentDidMount(){
      fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(response => {
          const {memes} = response.data
          this.setState({
            memes:memes
            })
        })
    }
    
    render() {
        return (
            <>
              <form className="meme-form">
              
                <input 
                type="text" 
                value={this.state.topText} 
                name="topText" 
                onChange={this.changeHandler}
                placeholder="topText" />

                <input 
                type="text" 
                value={this.state.bottomText} 
                name="bottomText" 
                onChange={this.changeHandler}
                placeholder="bottomText" />

                <button onClick={this.genClicked}>Gen</button>
              </form>

              <div className="meme">
                <img src={this.state.randomImg} alt="" />
                <h2 className="top">{this.state.topText}</h2>
                <h2 className="bottom">{this.state.bottomText}</h2>
              </div>
              
            </>
        )
    }
}

export default MemeGenerator