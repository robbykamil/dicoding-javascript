const topCompanies = [
  { company: 'Gudang Garam', ceo: 'Tjoa Jien Hwie', assets: 105870000 },
  { company: 'Barito Pacific', ceo: 'Prajogo Pangestu', assets: 98990000 },
  { company: 'Semen Indonesia', ceo: 'Dony Arsal', assets: 76800000 },
  { company: 'Indofood Sukses Makmur', ceo: 'Anthony Salim', assets: 97370000},
  { company: 'United Tractors', ceo: 'Gidion Hasan', assets: 118280000 },
  { company: 'Adaro Energy', ceo: 'Garibaldi Thohir', assets: 101390000 },
];

const greatCeo = topCompanies.filter((theCompany) => theCompany.assets > 100000000).map((theCompany) => {
  return `${theCompany.ceo} is the best CEO for ${theCompany.company}`;
});

console.log(greatCeo);

/*
* output
* [ 'Tjoa Jien Hwie is the best CEO for Gudang Garam',
  'Gidion Hasan is the best CEO for United Tractors',
  'Garibaldi Thohir is the best CEO for Adaro Energy' ]
*/
