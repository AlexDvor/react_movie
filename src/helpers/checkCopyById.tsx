type IParams = {
  id: number;
};

export default function checkCopyById(arr: IParams[], id: number): boolean {
  const result = arr.some(movie => movie.id === Number(id));
  return result;
}
