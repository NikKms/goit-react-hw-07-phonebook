import { ContactForm } from 'components/ContactForm';
import {
  ContactAvatarContainer,
  StyledAddContactPage,
  StyledLinkCancel,
} from './AddContact.styled';

import avatarSVG from '../../images/contact.svg';
import { useLocation, useNavigate } from 'react-router-dom';

const AddContact = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoBack = () => {
    if (location.state) {
      navigate(location.state.from);
      return;
    }

    navigate('/contacts');
  };

  return (
    <StyledAddContactPage>
      <StyledLinkCancel type="button" onClick={handleGoBack}>
        CANCEL
      </StyledLinkCancel>
      <ContactAvatarContainer>
        <img src={avatarSVG} alt="Contact Avatar" width={150} />
      </ContactAvatarContainer>
      <ContactForm />
    </StyledAddContactPage>
  );
};

export default AddContact;
