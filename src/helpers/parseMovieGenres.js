export default function parseMovieGenres(arr) {
  const genres = [];

  arr.map(item => genres.push(item.name));

  if (genres.length >= 2) {
    return `${genres[0]}, ${genres[1]}...`;
  }

  return genres.join(' ');
}
