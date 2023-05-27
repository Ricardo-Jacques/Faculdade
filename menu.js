var itemMenu = document.querySelectorAll(".itens-menu")
function selectLink() {
    itemMenu.forEach((item)=>
    item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}

itemMenu.forEach((item)=>
    item.addEventListener('click', selectLink)
)