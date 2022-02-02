export default function checkForCopyById(arr, id) {
  const result = arr.some(movie => movie.id === Number(id));
  return result;
}
