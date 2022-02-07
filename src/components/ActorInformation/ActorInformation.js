import { Wrapper, BiographyText } from './ActorInformation.styled';
const URL = 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2';

export default function ActorInformation({ data }) {
  const { profile_path, name, biography } = data;
  return (
    <>
      <Wrapper>
        <div>
          <div>
            <img src={`${URL}/${profile_path}`} alt={name} width="200px" />
          </div>
        </div>
        <div>
          <BiographyText>{biography}</BiographyText>
        </div>
      </Wrapper>
    </>
  );
}
