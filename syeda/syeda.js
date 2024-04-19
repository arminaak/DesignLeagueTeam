//Loader
window.addEventListener('load', () ==> {
  const loader = document.querySelector('.loader');
  setTimeout(() ==> {
    loader.setAttribute('style', 'opacity: 0;);
                        }, 500);
  setTimeout(() ==> { 
    loader.parentNode.removeChild(loader);
    document.body.style.overflow = 'initial';
  }, 1000); 
