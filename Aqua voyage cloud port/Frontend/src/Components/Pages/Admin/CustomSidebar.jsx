import './CustomSidebar.css';
import {Link} from 'react-router-dom';
const Ch=()=>
{
    return (
      <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  {/* <title>Bootstrap 5 Side Bar Navigation</title> */}
  {/* bootstrap 5 css */}
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl"
    crossOrigin="anonymous"
  />
  {/* BOX ICONS CSS*/}
  <link
    href="https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css"
    rel="stylesheet"
  />
  {/* custom css */}
  <link rel="stylesheet" href="style.css" />
  {/* Side-Nav */}
  <div
    className="side-navbar active-nav d-flex justify-content-between flex-wrap flex-column"
    id="sidebar"
  >
    <ul className="nav flex-column text-white w-100">
      <a href="#" className="nav-link h3 text-white my-2">
        AQUAQ <br />
        {/* ADMIN DASHBOARD */}
      </a>
      <li href="#" className="nav-link">
        <i className="bx bxs-dashboard" />
        <span className="mx-2"><Link to={'/dash'}>Dashboard</Link></span>
      </li>
      <li href="#" className="nav-link">
        <i className="bx bx-user-check" />
        <span className="mx-2"><Link to={'/admin/profile'}>Profile</Link></span>
      </li>
      <li href="#" className="nav-link">
        {/* <i className="bx bx-conversation" /> */}
        <i className="bx bxs-book" />
        <span className="mx-2"><Link to={'/boats'}>Boats List</Link></span>
      </li>
      <li href="#" className="nav-link">
      <i className="bx bxs-envelope" />
        <span className="mx-2"><Link to={'/userlist'}>User Details</Link></span>
      </li>
      <li href="#" className="nav-link">
      <i className="bx bxs-calendar" />
        <span className="mx-2"><Link to={'/bookinglist'}>Booking List</Link></span>
      </li>
      <li href="#" className="nav-link">
      <i className="bx bxs-dashboard" />
        <span className="mx-2"><Link to={'/home'}>My Website</Link></span>
      </li>
    </ul>
    <span href="#" className="nav-link h4 w-100 mb-5">
      <a href="">
        <i className="bx bxl-instagram-alt text-white" />
      </a>
      <a href="">
        <i className="bx bxl-twitter px-2 text-white" />
      </a>
      <a href="">
        <i className="bx bxl-facebook text-white" />
      </a>
    </span>
  </div>
  {/* Main Wrapper */}
  <div className="p-1 my-container active-cont">
    {/* Top Nav */}
    {/* <nav className="navbar top-navbar navbar-light bg-light px-5">
      <a className="btn border-0" id="menu-btn">
        <i className="bx bx-menu" />
      </a>
    </nav> */}
    {/*End Top Nav */}
    {/* <h3 className="text-dark p-3">RESPONSIVE SIDEBAR NAV 💻 📱</h3> */}
    {/* <p className="px-3">
      Responsive navigation sidebar built using{" "}
      <a className="text-dark" href="https://getbootstrap.com/">
        Bootstrap 5
      </a>
      .
    </p> */}
    {/* <p className="px-3">
      <a href="https://github.com/harshitjain-hj" className="text-dark">
        Checkout my Github
      </a>
    </p> */}
  </div>
  {/* bootstrap js */}
</>
    );
  }
  export default Ch


// import './CustomSidebar.css';
// const Ch=()=>
// {
//     return (
// <>
//   <meta charSet="UTF-8" />
//   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//   <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
//   <link rel="stylesheet" href="css/reset.css" />
//   <link
//     rel="stylesheet"
//     href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"
//     integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU"
//     crossOrigin="anonymous"
//   />
//   <link rel="stylesheet" href="css/font-awesome.min.css" />
//   <link rel="stylesheet" href="css/style.css" />
//   <link
//     href="https://fonts.googleapis.com/css?family=Poppins"
//     rel="stylesheet"
//   />
//   <title>Document</title>
//   {/* side bar */}
//   <div className="side-bar">
//     <nav>
//       {/* logo of side bar */}
//       <div className="logo">
//         <img
//           src="https://99designs-start-attachments.imgix.net/alchemy-pictures/2016%2F02%2F05%2F04%2F40%2F40%2F22a0d345-2354-4d6b-a11a-e385fbde0447%2F554327_OliverReika_5e3520_1.png?auto=format&ch=Width%2CDPR&fm=png&size=450x450"
//           alt="logo"
//           name="logo"
//         />
//         <h3>Welcome to AQUaQ</h3>
//         <p></p>
//       </div>
//       {/* List of side bar */}
//       <div className="nav-list">
//         <ul>
//           <li>
//             <a href="#intro">
//               <i className="fa fa-home" /> Intro
//             </a>
//           </li>
//           <li>
//             <a href="#portfolio">
//               <i className="fa fa-info-circle" /> Portfolio
//             </a>
//           </li>
//           <li>
//             <a href="#about">
//               <i className="fa fa-map-marker" /> About Me
//             </a>
//           </li>
//           <li>
//             <a href="#contact">
//               <i className="fa fa-commenting" /> Contact
//             </a>
//           </li>
//         </ul>
//       </div>
//       {/* social icons at the end of side bar */}
//       <div className="social-icons">
//         <ul>
//           <li>
//             <a href="#">
//               <i className="fa fa-facebook-square" />
//             </a>
//           </li>
//           <li>
//             <a href="#">
//               <i className="fa fa-twitter" />
//             </a>
//           </li>
//           <li>
//             <a href="#">
//               <i className="fa fa-github-alt" />
//             </a>
//           </li>
//           <li>
//             <a href="#">
//               <i className="fa fa-google-plus-square" />
//             </a>
//           </li>
//           <li>
//             <a href="#">
//               <i className="fa fa-envelope" />
//             </a>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   </div>
//   {/* Page content */}
//   <div className="container">
//     <div className="section one" id="intro">
//       {/*  Section one photo and content of photo */}
//       <div className="photo-content">
//         <div className="backgroud">
//           <div className="header paragraph">
//             <h1>
//               Hello World! I'm Mohamed
//               <br />
//               I'm greatful for <u>MR.Muhammad Alkhateeb</u>
//             </h1>
//             <p>
//               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
//               iure fugiat repellendus.
//             </p>
//             <button onclick="window.location.href='#portfolio'">Welcome</button>
//           </div>
//         </div>
//       </div>
//     </div>
//     <div className="tow" id="portfolio">
//       {/* Section tow portofolio and photos */}
//       <h1>Portfolio</h1>
//       <p>
//         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur
//         repellendus perspiciatis dicta? Ut porro tenetur laboriosam odio
//         accusamus voluptatibus eum fugiat perferendis vitae voluptate, amet hic,
//         ipsum fermentum etiam vivamus eget. Nunc nibh morbi quis fusce hendrerit
//         lacus ridiculus.
//       </p>
//       <div className="photos">
//         <div className="photo1">
//           <article>
//             <a href="#">
//               <img
//                 src="https://www.mad.no/wp-content/uploads/2016/06/sunset5.jpg"
//                 alt="row1"
//                 name="photo1"
//               />
//             </a>
//             <p>photo 1</p>
//           </article>
//           <article>
//             <a href="#">
//               <img
//                 src="https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=compress&cs=tinysrgb&h=350"
//                 alt="row1"
//                 name="photo2"
//               />
//             </a>
//             <p>photo 2</p>
//           </article>
//         </div>
//         <div className="photo1">
//           <article>
//             <a href="#">
//               <img
//                 src="https://media-cdn.tripadvisor.com/media/photo-s/12/1b/08/89/boardwalk-walking-trail.jpg"
//                 alt="row3"
//                 name="photo5"
//               />
//             </a>
//             <p>photo 3</p>
//           </article>
//           <article>
//             <a href="#">
//               <img
//                 src="https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&h=350"
//                 alt="row2"
//                 name="photo4"
//               />
//             </a>
//             <p>photo 4</p>
//           </article>
//         </div>
//         <div className="photo1">
//           <article>
//             <a href="#">
//               <img
//                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPuVYBlCHdgfRaNpDB6do2gEe4_LYVQ5th5lNnUGFP0X7EeuEaGw"
//                 alt="row3"
//                 name="photo5"
//               />
//             </a>
//             <p>photo 5</p>
//           </article>
//           <article>
//             <a href="#">
//               <img
//                 src="https://www.femalefirst.co.uk/image-library/land/1000/s/stocksnapnzkns1a1ow.jpg"
//                 alt="row3"
//                 name="photo6"
//               />
//             </a>
//             <p>photo 6</p>
//           </article>
//         </div>
//       </div>
//     </div>
//     {/*End of section portfolio*/}
//     <div className="three" id="about">
//       {/*Start of section three About Me*/}
//       <h1>About Me</h1>
//       <a href="#">
//         <img
//           src="https://pi.tedcdn.com/r/tedideas.files.wordpress.com/2017/05/featured_art_heal_forests.jpg?"
//           alt=""
//         />
//       </a>
//       <p>
//         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque tenetur
//         quis eius dolores harum commodi, ratione quibusdam eum nam illo
//         assumenda dicta delectus necessitatibus error quam praesentium
//         perferendis voluptas! Culpa!
//       </p>
//     </div>
//     <div className="four" id="contact">
//       {/*Start of section four Contact*/}
//       <h1>Contact</h1>
//       <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
//         accusantium blanditiis magnam in ea, id incidunt inventore odit unde
//         velit iste similique ducimus suscipit voluptates soluta quaerat delectus
//         perspiciatis. Eveniet.
//       </p>
//       <div>
//         <form action="">
//           <input type="text" name="Name" placeholder="Name" />
//           <input type="email" name="email" placeholder="Email" />
//           <textarea
//             name="Message"
//             id=""
//             placeholder="Message"
//             cols={30}
//             rows={10}
//             defaultValue={""}
//           />
//           <input type="submit" name="submit" defaultValue="Send Message" />
//         </form>
//       </div>
//     </div>
//     {/* End of section four contact */}
//     {/* Footer of page */}
//     <div className="footer">
//       <p>© Copy Rights Reserved | Designed by Mohamed Mohsen GDG490</p>
//     </div>
//   </div>
// </>
//     );
//   }
//   export default Ch


// import { Sidenav, Nav } from 'rsuite';
// import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
// import GroupIcon from '@rsuite/icons/legacy/Group';
// import MagicIcon from '@rsuite/icons/legacy/Magic';
// import GearCircleIcon from '@rsuite/icons/legacy/GearCircle';
// import './CustomSidebar.css';
// import {Link} from 'react-router-dom';
// const styles = {
//   width: 240,
//   display: 'inline-table',
//   marginRight: 10
// };

// const CustomSidenav = ({ appearance, openKeys, expanded, onOpenChange, onExpand, ...navProps }) => {
//   return (
//     <div style={styles}>
//       <Sidenav
//         appearance={appearance}
//         expanded={expanded}
//         openKeys={openKeys}
//         onOpenChange={onOpenChange}
//       >
//         <Sidenav.Body>
//           <Nav {...navProps}>
//             <Nav.Item eventKey="1" active icon={<DashboardIcon />}>
//               Dashboard AQUAQ
//             </Nav.Item>
//             <Nav.Item eventKey="2" icon={<GroupIcon />}>
//             <Link to={'/profile'}>User Profile</Link>
//             </Nav.Item>
//             <Nav.Menu eventKey="3" title="Advanced" icon={<MagicIcon />}>
//               <Nav.Item eventKey="3-1">Geo</Nav.Item>
//               <Nav.Item eventKey="3-2">Devices</Nav.Item>
//               <Nav.Item eventKey="3-3">Loyalty</Nav.Item>
//               <Nav.Item eventKey="3-4">Visit Depth</Nav.Item>
//             </Nav.Menu>
//             <Nav.Menu eventKey="4" title="Settings" icon={<GearCircleIcon />}>
//               <Nav.Item eventKey="4-1">Applications</Nav.Item>
//               <Nav.Item eventKey="4-2">Channels</Nav.Item>
//               <Nav.Item eventKey="4-3">Versions</Nav.Item>
//               <Nav.Menu eventKey="4-5" title="Custom Action">
//                 <Nav.Item eventKey="4-5-1">Action Name</Nav.Item>
//                 <Nav.Item eventKey="4-5-2">Action Params</Nav.Item>
//               </Nav.Menu>
//             </Nav.Menu>
//           </Nav>
//         </Sidenav.Body>
//         <Sidenav.Toggle onToggle={onExpand} />
//       </Sidenav>
//     </div>
//   );
// };
// export default CustomSidenav

// const App = () => {
//   const [activeKey, setActiveKey] = React.useState('1');
//   const [openKeys, setOpenKeys] = React.useState(['3', '4']);
//   const [expanded, setExpand] = React.useState(true);

//   return (
//     <>
//       <CustomSidenav
//         activeKey={activeKey}
//         openKeys={openKeys}
//         onSelect={setActiveKey}
//         onOpenChange={setOpenKeys}
//         expanded={expanded}
//         onExpand={setExpand}
//       />
//       <CustomSidenav
//         activeKey={activeKey}
//         openKeys={openKeys}
//         onOpenChange={setOpenKeys}
//         onSelect={setActiveKey}
//         expanded={expanded}
//         onExpand={setExpand}
//         appearance="inverse"
//       />
//       <CustomSidenav
//         activeKey={activeKey}
//         openKeys={openKeys}
//         onOpenChange={setOpenKeys}
//         onSelect={setActiveKey}
//         expanded={expanded}
//         onExpand={setExpand}
//         appearance="subtle"
//       />
//     </>
//   );
// };
// ReactDOM.render(<App />, document.getElementById('root'));











// import { Nav, Sidenav } from "rsuite";

// import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
// import GroupIcon from '@rsuite/icons/legacy/Group';
// import MagicIcon from '@rsuite/icons/legacy/Magic';
// import GearCircleIcon from '@rsuite/icons/legacy/GearCircle';
// const CustomSidebar=()=>
// {
//     return (
//         <div style={{ width: 240 }}>
//         <Sidenav defaultOpenKeys={['3', '4']}>
//           <Sidenav.Body>
//             <Nav activeKey="1">
//               <Nav.Item eventKey="1" icon={<DashboardIcon />}>
//                 Dashboard
//               </Nav.Item>
//               <Nav.Item eventKey="2" icon={<GroupIcon />}>
//                 User Group
//               </Nav.Item>
//               <Nav.Menu eventKey="3" title="Advanced" icon={<MagicIcon />}>
//                 <Nav.Item eventKey="3-1">Geo</Nav.Item>
//                 <Nav.Item eventKey="3-2">Devices</Nav.Item>
//                 <Nav.Item eventKey="3-3">Loyalty</Nav.Item>
//                 <Nav.Item eventKey="3-4">Visit Depth</Nav.Item>
//               </Nav.Menu>
//               <Nav.Menu eventKey="4" title="Settings" icon={<GearCircleIcon />}>
//                 <Nav.Item eventKey="4-1">Applications</Nav.Item>
//                 <Nav.Item eventKey="4-2">Channels</Nav.Item>
//                 <Nav.Item eventKey="4-3">Versions</Nav.Item>
//                 <Nav.Menu eventKey="4-5" title="Custom Action">
//                   <Nav.Item eventKey="4-5-1">Action Name</Nav.Item>
//                   <Nav.Item eventKey="4-5-2">Action Params</Nav.Item>
//                 </Nav.Menu>
//               </Nav.Menu>
//             </Nav>
//           </Sidenav.Body>
//         </Sidenav>
//       </div>

//     );
// } 

// export default CustomSidebar

























// // CustomSidebar.jsx
// // import React from "react";
// import { Nav, Sidenav } from "rsuite";
// import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
// import GroupIcon from '@rsuite/icons/legacy/Group';
// import MagicIcon from '@rsuite/icons/legacy/Magic';
// import GearCircleIcon from '@rsuite/icons/legacy/GearCircle';
// import { Link } from "react-router-dom";

// const sidebarStyle = {
//   width: 240,
//   backgroundColor: "#2c3e50", // Set your desired background color
//   color: "#ecf0f1",           // Set your desired text color
//   height: "100%",             // Make the sidebar full height
// };

// const linkStyle = {
//   color: "#ecf0f1",          // Set link text color
//   textDecoration: "none",    // Remove default link underline
// };

// const CustomSidebar = () => {
//   return (
//     <div style={sidebarStyle}>
//       <Sidenav defaultOpenKeys={['3', '4']}>
//         <Sidenav.Body>
//           <Nav activeKey="1">
//             <Nav.Item eventKey="1" icon={<DashboardIcon />}>
//               <Link to="/dashboard" style={linkStyle}>Dashboard</Link>
//             </Nav.Item>
//             <Nav.Item eventKey="2" icon={<GroupIcon />}>
//               <Link to="/user-group" style={linkStyle}>User Group</Link>
//             </Nav.Item>
//             <Nav.Menu eventKey="3" title="Advanced" icon={<MagicIcon />}>
//               <Nav.Item eventKey="3-1"><Link to="/geo" style={linkStyle}>Geo</Link></Nav.Item>
//               <Nav.Item eventKey="3-2"><Link to="/devices" style={linkStyle}>Devices</Link></Nav.Item>
//               <Nav.Item eventKey="3-3"><Link to="/loyalty" style={linkStyle}>Loyalty</Link></Nav.Item>
//               <Nav.Item eventKey="3-4"><Link to="/visit-depth" style={linkStyle}>Visit Depth</Link></Nav.Item>
//             </Nav.Menu>
//             <Nav.Menu eventKey="4" title="Settings" icon={<GearCircleIcon />}>
//               <Nav.Item eventKey="4-1"><Link to="/applications" style={linkStyle}>Applications</Link></Nav.Item>
//               <Nav.Item eventKey="4-2"><Link to="/channels" style={linkStyle}>Channels</Link></Nav.Item>
//               <Nav.Item eventKey="4-3"><Link to="/versions" style={linkStyle}>Versions</Link></Nav.Item>
//               <Nav.Menu eventKey="4-5" title="Custom Action">
//                 <Nav.Item eventKey="4-5-1"><Link to="/action-name" style={linkStyle}>Action Name</Link></Nav.Item>
//                 <Nav.Item eventKey="4-5-2"><Link to="/action-params" style={linkStyle}>Action Params</Link></Nav.Item>
//               </Nav.Menu>
//             </Nav.Menu>
//           </Nav>
//         </Sidenav.Body>
//       </Sidenav>
//     </div>
//   );
// }

// export default CustomSidebar;



