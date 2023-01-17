import './Hero.css';
import React from 'react';


class Hero extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div className="hero">
                <div className="container">
                    <h1>
                        {this.props.title}
                    </h1>
                    <p>
                        {this.props.description}
                    </p>
                    <button>
                        {this.props.cta}
                    </button>
                </div>
            </div>
        )

    }
}


// function Hero(props) {
//   return (
//       <div>
//           <div className="container">
//               <h1>
//                   { props.title }
//               </h1>
//               <p>
//                   { props.description }
//               </p>
//               <button>
//                   { props.cta }
//               </button>
//
//           </div>
//       </div>
//   );
// }

export default Hero;
