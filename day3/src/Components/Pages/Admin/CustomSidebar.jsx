import { Sidenav, Nav } from 'rsuite';
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';
import MagicIcon from '@rsuite/icons/legacy/Magic';
import GearCircleIcon from '@rsuite/icons/legacy/GearCircle';
import './CustomSidebar.css';
const styles = {
  width: 240,
  display: 'inline-table',
  marginRight: 10
};

const CustomSidenav = ({ appearance, openKeys, expanded, onOpenChange, onExpand, ...navProps }) => {
  return (
    <div style={styles}>
      <Sidenav
        appearance={appearance}
        expanded={expanded}
        openKeys={openKeys}
        onOpenChange={onOpenChange}
      >
        <Sidenav.Body>
          <Nav {...navProps}>
            <Nav.Item eventKey="1" active icon={<DashboardIcon />}>
              Dashboard
            </Nav.Item>
            <Nav.Item eventKey="2" icon={<GroupIcon />}>
              User Group
            </Nav.Item>
            <Nav.Menu eventKey="3" title="Advanced" icon={<MagicIcon />}>
              <Nav.Item eventKey="3-1">Geo</Nav.Item>
              <Nav.Item eventKey="3-2">Devices</Nav.Item>
              <Nav.Item eventKey="3-3">Loyalty</Nav.Item>
              <Nav.Item eventKey="3-4">Visit Depth</Nav.Item>
            </Nav.Menu>
            <Nav.Menu eventKey="4" title="Settings" icon={<GearCircleIcon />}>
              <Nav.Item eventKey="4-1">Applications</Nav.Item>
              <Nav.Item eventKey="4-2">Channels</Nav.Item>
              <Nav.Item eventKey="4-3">Versions</Nav.Item>
              <Nav.Menu eventKey="4-5" title="Custom Action">
                <Nav.Item eventKey="4-5-1">Action Name</Nav.Item>
                <Nav.Item eventKey="4-5-2">Action Params</Nav.Item>
              </Nav.Menu>
            </Nav.Menu>
          </Nav>
        </Sidenav.Body>
        <Sidenav.Toggle onToggle={onExpand} />
      </Sidenav>
    </div>
  );
};
export default CustomSidenav

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



