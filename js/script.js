function configurate (){
  document.getElementById('menuButton').onclick = () => {
    let menu = document.getElementsByClassName('header__menu')[0]
    menu.style.display = menu.style.display === 'grid' ? 'none' : 'grid'
  }
}

configurate()