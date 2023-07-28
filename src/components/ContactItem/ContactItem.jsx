import { AiOutlineDelete } from 'react-icons/ai';
import PropTypes from 'prop-types';
import { Item, Name, Tel, Button } from './ContactItem.styled';
import { useDeleteContactMutation } from 'redux/contactsSlice';

export const ContactItem = ({ name, number, contactId }) => {
  const [deleteContact, { isLoading: isDeliting }] = useDeleteContactMutation();

  return (
    <Item>
      <Name>{name}:</Name>
      <Tel>{number}</Tel>
      <Button type="button" onClick={() => deleteContact(contactId)}>
        {isDeliting ? 'Deliting...' : <AiOutlineDelete size={18} />}
      </Button>
    </Item>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  contactId: PropTypes.string.isRequired,
};
