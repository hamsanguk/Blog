document.getElementById('top-btn').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.getElementById('bottom-btn').addEventListener('click', function() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
});





document.querySelectorAll('.daybutton').forEach(dt => {
  dt.addEventListener('click', function() {
    const dd = this.nextElementSibling; // 클릭한 dt의 바로 다음 dd
    const isExpanded = dd.style.maxHeight !== '0px';

    // 모든 dd 요소를 숨깁니다.
    document.querySelectorAll('.daycontent').forEach(d => {
      d.style.maxHeight = '0'; // 모든 dd의 max-height를 0으로 설정
    });

    // 클릭한 dd만 펼칩니다.
    if (!isExpanded) {
      dd.style.maxHeight = '1000px'; // 충분히 큰 값으로 설정하여 자동으로 펼쳐지게
    }
  });
});
  