fetch('/api/models')
  .then(res => {
    if (!res.ok) throw new Error('ไม่สามารถโหลดข้อมูล API ได้');
    return res.json();
  })
  .then(data => {
    const gallery = document.getElementById('model-gallery');
    gallery.innerHTML = '';

    data.forEach(model => {
      const card = document.createElement('div');
      card.className = 'model-card';
      card.innerHTML = `
        <img style="width:300px; height:400px; margin-top:20px;" src="${model.image}" alt="${model.name}" />
        <h3>${model.name}</h3>
        <p>เพศ: ${model.gender} | อายุ: ${model.age} ปี</p>
      `;
      gallery.appendChild(card);
    });

    const rawJson = document.getElementById('raw-json');
    rawJson.textContent = JSON.stringify(data, null, 2);
  })
  .catch(err => {
    console.error(err);
  });
