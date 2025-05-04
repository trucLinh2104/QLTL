let toggle = false;
let arrow_list  = document.querySelectorAll('.sub-multi_option');
console.log(arrow_list  )
let sub_item_list = document.querySelectorAll('.sub-item');
let domain = window.location.href;
if(domain.includes("import")||domain.includes("export")){
    arrow_list[0].classList.add('active');
    sub_item_list[0].classList.add('open');
    toggle = true;
}else{
    arrow_list[0].classList.remove('active');
    sub_item_list[0].classList.remove('open');
    toggle = false;
}
if(domain.includes("product-list")||domain.includes("type-list")){
    arrow_list[1].classList.add('active');
    sub_item_list[1].classList.add('open');
    toggle = true;
}else{
    arrow_list[1].classList.remove('active');
    sub_item_list[1].classList.remove('open');
    toggle = false;
}

arrow_list.forEach((item, index) => {
    item.addEventListener('click', (e) => {
        if (!toggle) {
            item.classList.add('active');
            sub_item_list[index].classList.add('open')
            toggle = true;
        } else {
            item.classList.remove('active');
            sub_item_list[index].classList.remove('open')
            toggle = false;
        }
    })

})


