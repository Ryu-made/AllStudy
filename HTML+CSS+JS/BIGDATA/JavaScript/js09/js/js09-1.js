document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('upload-btn').addEventListener('click', () => {
    const input = document.getElementById('csv-file');
    const file = input.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = e => {
        // console.log(e);
        const text = e.target.result;
        console.log(text);
        console.log(file);
      };
      reader.readAsText(file);
    }
  });
});
