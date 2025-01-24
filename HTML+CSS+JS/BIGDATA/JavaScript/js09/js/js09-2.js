document.addEventListener('DOMContentLoaded', () => {
  const getById = s => document.getElementById(s);
  const input = getById('csv-file');
  input.accept = '.xlsx, .xlsm';
  getById('upload-btn').addEventListener('click', () => {
    const file = input.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = e => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const jsons = new Array();
        for (const name of workbook.SheetNames) {
          // const name = workbook.SheetNames[i];
          const worksheet = workbook.Sheets[name];
          const json = XLSX.utils.sheet_to_json(worksheet);
          getById('output').textContent += JSON.stringify(json, null, 2);
          jsons.push(json);
          // console.log(json);
        }
        console.log(jsons);
        chart(jsons);
      };
      reader.readAsArrayBuffer(file);
    }
  });
});

const chart = (result) => {
  new Chart(document.getElementById('myChart'), {
    type: 'scatter',
    data: {
      label: ['Father', 'Son'],
      datasets: datasets(result)
    },
    options: {
      scales: {
        x: {
          type: 'linear',
          position: 'bottom'
        }
      }
    }
  });
}

const datasets = result => {
  const arr = [];
  for (let i = 0; i < result.length; i++)
    arr.push({
      label: `Father vs Son ${i + 1}`,
      data: result[i]
        // .filter(e => Math.abs(e.Father - e.Son) <= 5)
        .map(e => ({ x: e.Son, y: e.Son / e.Father })),
      backgroundColor: i === 0 ? `rgba(75, 220, 220, .25)` : `rgba(180, 180, 75, .25)`,
      borderWidth: 0
    });
  console.log(arr);
  return arr;
};