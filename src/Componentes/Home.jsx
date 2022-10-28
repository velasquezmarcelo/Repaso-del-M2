import React from "react";

//class component
export default  class Home extends React.Component{
    
    // constructor(props) {
    //     super (props);
    //     this.state = {
    //         name = 'topopai'
    //     }
    // }
    render(){
        let {name, age} = this.props
        return(
            <div>
                HOLA MUNDO PAJEROS {name} {age}
            </div>
        )
    }
}


