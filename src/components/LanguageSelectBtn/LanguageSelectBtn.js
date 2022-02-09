// import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { changeLanguages } from '../../redux/movies/movies-slice';
import { getCurrentLanguages } from '../../redux/movies/movies-selectors';
import { languages } from '../../helpers/languages';

export default function LanguageSelectBtn() {
  const currentLang = useSelector(getCurrentLanguages);
  const dispatch = useDispatch();

  const handleSelect = value => {
    const res = languages.find(item => item.id === value);
    dispatch(changeLanguages(res));
  };

  return (
    <>
      <Dropdown onSelect={handleSelect} drop="down">
        <Dropdown.Toggle variant="dark" id="dropdown-basic">
          {`${currentLang.label}`}
        </Dropdown.Toggle>

        <Dropdown.Menu align="start">
          {languages.map(item => (
            <Dropdown.Item key={item.id} eventKey={item.id}>
              <img
                loading="lazy"
                src={`https://flagcdn.com/w20/${item.code.toLowerCase()}.png`}
                srcSet={`https://flagcdn.com/w40/${item.code.toLowerCase()}.png 2x`}
                width="20"
                alt=""
                style={{ marginRight: 10 }}
              />
              {item.label}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}
