import { StyledButton, DeleteIcon } from './RemoveButton.styled';
import { removeMovieById } from '../../redux/movies/movies-operations';
// import { getRemovingMovie } from '../../redux/movies/movies-selectors';
import { useDispatch, useSelector } from 'react-redux';
// import { ThreeDots } from 'react-loader-spinner';

type Props = {
  id: number;
};

// I need to find the current id when clicking on a card movie

export default function RemoveButton({ id }: Props) {
  // const isRemovingMovie = useSelector(getRemovingMovie);
  // console.log('currentId', id);
  const dispatch = useDispatch();
  return (
    <>
      <StyledButton type="button" onClick={() => dispatch(removeMovieById(id))}>
        <DeleteIcon /> Delete
      </StyledButton>
    </>
  );
}

// RESOLVED

// return (
//   <>
//     <StyledButton type="button" onClick={() => dispatch(removeMovieById(id))}>
//       {isRemovingMovie ? (
//         <>
//           <DeleteIcon /> Delete
//         </>
//       ) : currentId ? (
//         <ThreeDots ariaLabel="loading-indicator" color="white" height={50} width={50} />
//       ) : (
//         <>
//           <DeleteIcon /> Delete
//         </>
//       )}
//     </StyledButton>
//   </>
// );

//BEFORE

// return (
//   <>
//     <StyledButton type="button" onClick={() => dispatch(removeMovieById(id))}>
//       {!isRemovingMovie ? (
//         <>
//           <DeleteIcon /> Delete
//         </>
//       ) : (
//         <ThreeDots ariaLabel="loading-indicator" color="white" height={50} width={50} />
//       )}
//     </StyledButton>
//   </>
// );
