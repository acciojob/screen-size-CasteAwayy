const resizeInfo = document.querySelector('h1');
const html = `Width : ${window.innerWidth} and Height: ${window.innerHeight}`;
resizeInfo.textContent = html;
window.addEventListener('resize' , (e)=>{

    const html = `Width : ${e.target.innerWidth} and Height: ${e.target.innerHeight}`;
    resizeInfo.textContent = html;
})
