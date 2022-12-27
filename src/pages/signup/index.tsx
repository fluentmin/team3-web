import { useState } from 'react';
import SignUpInputNormal from '../../components/sign-up-input-normal/SignUpInputNormal';
import { Wrapper } from './signup.styled';

const SignUpPage: React.FC = () => {
  const [id, setId] = useState('');
  return (
    <Wrapper>
      회원가입 페이지{' '}
      <SignUpInputNormal
        valueName="username"
        value={id}
        required={true}
        placeholder="아이디를 입력해주세요"
        handleChange={e => {
          setId(e.target.value);
        }}
        isWithButton={true}
      />
    </Wrapper>
  );
};

export default SignUpPage;
