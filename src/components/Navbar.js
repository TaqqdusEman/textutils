// import React from "react";
// import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

// export default function Navbar(props) {
//   return (
//     <nav
//       className={`navbar navbar-expand-lg navbar-${props.mode}  bg-${props.mode}`}
//     >
//       <div className="container-fluid">
//         <Link className="navbar-brand" to="/">
//           {props.title}
//         </Link>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <Link className="nav-link active" aria-current="page" to="/">
//                 Home
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link active" to="/about">
//                 {props.aboutText}
//               </Link>
//             </li>
//           </ul>

//           {/* Enable Dark Mode */}
//           <div
//             className={`form-check form-switch text-${
//               props.mode === "light" ? "dark" : "light"
//             } mx-2`}
//           >
//             <input
//               className="form-check-input"
//               onClick={props.toggleMode}
//               type="checkbox"
//               role="switch"
//               id="flexSwitchCheckDefault"
//             />
//             <label
//               className="form-check-label"
//               htmlFor="flexSwitchCheckDefault"
//             >
//               DarkMode
//             </label>
//           </div>

//           {/* Search Button */}
//           <form className="d-flex" role="search">
//             <input
//               className="form-control me-2"
//               type="search"
//               placeholder="Search"
//               aria-label="Search"
//             />
//             <button className="btn btn-primary" type="submit">
//               Search
//             </button>
//           </form>
//         </div>
//       </div>
//     </nav>
//   );
// }

// Navbar.propTypes = {
//    title: PropTypes.string,
//    aboutText: PropTypes.string };


import React from 'react'
import PropTypes from 'prop-types'



export default function Navbar(props) {
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Default switch checkbox input</label>
      </div>
      <div className="d-flex">
     <div className="bg-primary rounded mx-2" onClick={()=>props.toggleMode('primary')} style={{height:'20px' ,width:'30px' }}></div>
     <div className="bg-success rounded mx-2"  onClick={()=>props.toggleMode('success')} style={{height:'20px' ,width:'30px' }}></div>
     <div className="bg-danger rounded mx-2"  onClick={()=>props.toggleMode('danger')} style={{height:'20px',width:'30px'}}></div>
     <div className="bg-secondary rounded mx-2"  onClick={()=>props.toggleMode('secondary')} style={{height:'20px',width:'30px'}}></div>
     </div>
      </nav>
    </>
   
  )
}


