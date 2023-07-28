import { Label, Input } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';

import { AiOutlineSearch } from 'react-icons/ai';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <Label>
      <div>
        <Input
          type="text"
          onChange={e => dispatch(setFilter(e.currentTarget.value))}
          value={filter}
          placeholder={`Find contact `}
        />
        <AiOutlineSearch />
      </div>
    </Label>
  );
};
