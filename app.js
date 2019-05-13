

function getMeteorites() {
  fetch('https://data.nasa.gov/resource/gh4g-9sfh.json')
    .then((res) => {
      return res.json();
    })
    .then((data) => {

      let name = '';
      let id = '';
      let nameType = '';
      let recClass = '';
      let mass = '';
      let fall = '';
      let year = '';
      let latitude = '';
      let longitude = '';

      data.forEach((meteorite) => {
        name += `<li>${meteorite.name}</li>`;
        id += `<li>${meteorite.id}</li>`;
        nameType += `<li>${meteorite.nametype}</li>`;
        recClass += `<li>${meteorite.recclass}</li>`;
        mass += `<li>${meteorite.mass}</li>`;
        fall += `<li>${meteorite.fall}</li>`;
        year += `<li>${meteorite.year}</li>`;
        latitude += `<li>${meteorite.reclat}</li>`;
        longitude += `<li>${meteorite.reclong}</li>`;

      });
      let yearCut = year.substring(4,8);
      document.getElementById('name').innerHTML = name;
      document.getElementById('id').innerHTML = id;
      document.getElementById('name-type').innerHTML = nameType;
      document.getElementById('rec-class').innerHTML = recClass;
      document.getElementById('mass').innerHTML = mass;
      document.getElementById('fall').innerHTML = fall;
      document.getElementById('year').innerHTML = yearCut;
      document.getElementById('latitude').innerHTML = latitude;
      document.getElementById('longitude').innerHTML = longitude;
      console.log(year.substring(4,8));
    })
    .catch((err) => console.log(err));
}
getMeteorites();
