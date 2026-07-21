import { Bookmark } from 'lucide-react'


// Receving as Individual Props or Separate Props
// const Card = (props) => {
//     return (

//         <div className="card">

//             <div>

//                 <div className="top">
//                     <img src={props.brandLogo} alt="Brand logo" />
//                     <button>Save <Bookmark size={12} /></button>
//                 </div>

//                 <div className="center">
//                     <h3>{props.companyName} <span>{props.datePosted}</span></h3>
//                     <h2>{props.post}</h2>
//                     <div className='tag'>
//                         <h4>{props.tag1}</h4>
//                         <h4>{props.tag2}</h4>
//                     </div>
//                 </div>

//             </div>

//             <div className="buttom">
//                 <div>
//                     <h3>{props.salary}</h3>
//                     <p>{props.location}</p>
//                 </div>
//                 <button>Apply Now</button>
//             </div>

//         </div>

//     );
// };

// Receving as Object Prop
const Card = ({props}) => {
    return (
        <div className="card">

            <div>

                <div className="top">
                    <img src={props.brandLogo} alt={props.companyName} />
                    <button>Save <Bookmark size={12} /></button>
                </div>

                <div className="center">
                    <h3>{props.companyName} <span>{props.datePosted}</span></h3>
                    <h2>{props.post}</h2>
                    <div className='tag'>
                        <h4>{props.tag1}</h4>
                        <h4>{props.tag2}</h4>
                    </div>
                </div>

            </div>

            <div className="buttom">
                <div>
                    <h3>{props.salary}</h3>
                    <p>{props.location}</p>
                </div>
                <button>Apply Now</button>
            </div>

        </div>

    );
};


export default Card