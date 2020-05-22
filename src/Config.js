function Config () {
    const body = document.getElementById('body');
    const hash = window.location.pathname.toLocaleLowerCase();

    hash === '/' ? body.classList.add('overflow') : body.classList.remove('overflow');
    // console.log(hash);
}

export default Config;