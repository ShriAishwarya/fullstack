// forms/loginModel.js
import { Schema } from 'rsuite';

const { StringType } = Schema.Types;

const loginModel = Schema.Model({
  email: StringType()
    .isEmail('Please enter a valid email address.')
    .isRequired('This field is required.'),
  password: StringType().isRequired('This field is required.'),
});

export default loginModel;
