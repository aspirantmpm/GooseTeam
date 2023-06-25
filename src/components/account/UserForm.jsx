import { CustomInput } from 'components/account/CustomInput';
import { Formik } from 'formik';
import { FormContainer, FormWrapper, UserInfo } from './Account.styled';
import { UserSchema } from './UserSchema';
import Thumb from './Avatar';
import { DatePickerField } from './Calendar';

export const UserForm = () => {
  return (
    <>
      <Formik
        initialValues={{
          username: '',
          birthday: '',
          email: '',
          phone: '',
          skype: '',
          avatar: '',
        }}
        validationSchema={UserSchema}
        onSubmit={values => {
          console.log(values);
          const formData = new FormData();
          for (let value in values) {
            formData.append(value, values[value]);
          }

          for (const pair of formData.entries()) {
            console.log(`${pair[0]}, ${pair[1]}`);
          }
        }}
      >
        {({ values, setFieldValue }) => (
          <FormContainer>
            <UserInfo>
              <Thumb file={values.avatar} setFieldValue={setFieldValue} />

              <p>Nadiia Doe</p>
              <p>User</p>
            </UserInfo>

            <FormWrapper>
              <div>
                <CustomInput label="User Name" name="username" />

                <DatePickerField
                  name="birthday"
                  setFieldValue={setFieldValue}
                />

                <CustomInput label="Email" name="email" type="email" />
              </div>

              <div>
                <CustomInput label="Phone" name="phone" type="tel" />

                <CustomInput label="Skype" name="skype" />
              </div>
            </FormWrapper>

            <button type="submit">Save changes</button>
          </FormContainer>
        )}
      </Formik>
    </>
  );
};
