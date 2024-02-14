// // components/TextField.jsx
// import React from 'react';
// // import { Form } from 'rsuite';
// import { Form } from 'rsuite';
// // import { Form } from 'rsuite';

// // eslint-disable-next-line react/display-name
// const TextField = React.forwardRef((props, ref) => {
//   // eslint-disable-next-line react/prop-types
//   const { name, label, accepter, ...rest } = props;
//   return (
//         <Form.Group ref={ref}>
//       <Form.ControlLabel>{label}</Form.ControlLabel>
//       <Form.Control name={name} accepter={accepter} {...rest} />
//     </Form.Group>
//   );
// });

// export default TextField;
// components/TextField.jsx
import React from 'react';
import { Form } from 'rsuite';

const TextField = React.forwardRef((props, ref) => {
  const { name, label, accepter, ...rest } = props;
  return (
    <Form.Group ref={ref}>
      <Form.ControlLabel>{label}</Form.ControlLabel>
      <Form.Control name={name} accepter={accepter} {...rest} />
    </Form.Group>
  );
});

export default TextField;
