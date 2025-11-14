let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function processBands(data) {
  //  Countries should all be Canada
  //  Names should have all words capitalized
  //  Names should have dots removed
  let cleanName = name => {
    return name.replace(/\./g, '')
               .split(' ')
               .map(word => word[0].toUpperCase() + word.slice(1))
               .join(' ')
  }
  return data.map(band => ({
      name: cleanName(band.name),
      country: 'Canada',
      active: band.active,
    }));
}

console.log(processBands(bands));

// should return:
// [
//   { name: 'Sunset Rubdown', country: 'Canada', active: false },
//   { name: 'Women', country: 'Canada', active: false },
//   { name: 'A Silver Mt Zion', country: 'Canada', active: true },
// ]