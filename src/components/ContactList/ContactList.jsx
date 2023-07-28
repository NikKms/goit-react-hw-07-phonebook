import { ContactItem } from 'components/ContactItem';
import { List, StyledContainer } from './ContactList.styled';
import { useFetchContactsQuery } from 'redux/contactsSlice';
import { selectFilter } from 'redux/selectors';
import { Loader } from 'components/Loader';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const filter = useSelector(selectFilter);
  const { data: contacts, isFetching, error } = useFetchContactsQuery();

  const filteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return (
      contacts?.filter(
        ({ name, number }) =>
          name.toLowerCase().includes(normalizedFilter) ||
          number.includes(normalizedFilter)
      ) || []
    );
  };

  const groupContactsByFirstLetter = () => {
    return filteredContacts().reduce((groupedContacts, contact) => {
      const firstLetter = contact.name[0].toUpperCase();
      if (!groupedContacts[firstLetter]) {
        groupedContacts[firstLetter] = [];
      }
      groupedContacts[firstLetter].push(contact);
      return groupedContacts;
    }, {});
  };

  const sortedContacts = groupContactsByFirstLetter(filteredContacts());
  const sortedLetters = Object.keys(sortedContacts).sort();

  return (
    <>
      <h2>Contacts</h2>
      {contacts && <p>Total contacts: {contacts.length}</p>}
      {isFetching && <Loader />}
      {error ? (
        <p>Oh no, there was an error</p>
      ) : (
        <>
          {sortedLetters.map(letter => (
            <StyledContainer key={letter}>
              <h3>{letter}</h3>
              <List>
                {sortedContacts[letter].map(({ name, number, id }) => (
                  <ContactItem
                    key={id}
                    name={name}
                    number={number}
                    contactId={id}
                  />
                ))}
              </List>
            </StyledContainer>
          ))}
        </>
      )}
    </>
  );
};
