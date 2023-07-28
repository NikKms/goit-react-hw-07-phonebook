import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import { Phonebook, StyledLink, StyledContainer } from './Contacts.styled';

import { AiOutlineUserAdd } from 'react-icons/ai';

const Contacts = () => {
  return (
    <Phonebook>
      <StyledContainer>
        <h1>Phonebook</h1>
        <StyledLink to="/contacts/addcontact">
          <AiOutlineUserAdd />
        </StyledLink>
      </StyledContainer>
      <Filter />
      <ContactList />
    </Phonebook>
  );
};

export default Contacts;
