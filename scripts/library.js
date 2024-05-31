const items = document.querySelectorAll('.library-item_first-lvl');
const itemsSeconds = document.querySelectorAll('.library-item_second-lvl');
const itemsThreeds = document.querySelectorAll('.library-item_threed-lvl');

function itemClosed() {
    const boxes = document.querySelectorAll('.second-lvl__visible');
    const icons = document.querySelectorAll('.open-closed_icon__mod');
    boxes.forEach((box) => {
        if (box) {
            box.classList.remove('second-lvl__visible');
            return
        }
    })
    icons.forEach((icon) => {
        if (icon) {
            icon.classList.remove('open-closed_icon__mod')
            return
        }
    })
}

function itemsecondClosed() {
    const boxes = document.querySelectorAll('.second-lvl__visible');
    const icons = document.querySelectorAll('.open-closed_icon__mod');
    boxes.forEach((box) => {
        if (box.classList.contains('library-item_second-lvl__content-box')) {
            box.classList.remove('second-lvl__visible');
            return
        }
    })
    icons.forEach((icon) => {
        if (icon) {
            icon.classList.remove('open-closed_icon__mod')
            return
        }
    })
}

items.forEach((item) => {
    
    item.querySelector('.library-item__text-box').addEventListener('click', (e) => {
        if (item.querySelector('.second-lvl__visible')) {
            item.querySelector('.second-lvl__visible').classList.remove('second-lvl__visible');
            item.querySelector('.arrow').classList.remove('open-closed_icon__mod');
            return
        }
        console.log(e.target)
        console.log(e.currentTarget)
        if (e.target === item.querySelector('.library-item__text-box') || e.target === item.querySelector('.about-me_description') || e.target === item.querySelector('.arrow')) {
            itemClosed();
        } if (item.querySelector('.second-lvl__visible')) {
            itemClosed();
            console.log('worked')
        } else {
            item.querySelector('.library-item_first-lvl__content-box').classList.toggle('second-lvl__visible');
            item.classList.toggle('opacity-none');
            item.querySelector('.library-item_first-lvl__content-box').classList.toggle('opacity-none');
            item.querySelector('.arrow').classList.toggle('open-closed_icon__mod');
        }
        
        

        // var sortedArray = Array.from(item.querySelectorAll('.library-item__link')).sort(function(a, b){
        //     return a.textContent.localeCompare(b.textContent);
        //   });
        //   for(var i = 0; i < sortedArray.length; i++) {
        //     item.querySelector('.library-item_first-lvl__content-box').appendChild(sortedArray[i]);
        //   }
    })

})

itemsSeconds.forEach((itemsSecond) => {
    itemsSecond.querySelector('.library-item__text-box_second-lvl').addEventListener('click', (e) => {
        if (itemsSecond.querySelector('.second-lvl__visible')) {
            itemsSecond.querySelector('.second-lvl__visible').classList.remove('second-lvl__visible');
            itemsSecond.querySelector('.arrow').classList.remove('open-closed_icon__mod');
            return
        }
        itemsecondClosed()
        
        itemsSecond.querySelector('.library-item_second-lvl__content-box').classList.toggle('second-lvl__visible');
        itemsSecond.classList.toggle('opacity-none');
        itemsSecond.classList.toggle('opacity-none');
        itemsSecond.querySelector('.arrow').classList.toggle('open-closed_icon__mod');
        

        

        // var sortedArray = Array.from(item.querySelectorAll('.library-item__link')).sort(function(a, b){
        //     return a.textContent.localeCompare(b.textContent);
        //   });
        //   for(var i = 0; i < sortedArray.length; i++) {
        //     item.querySelector('.library-item_second-lvl__content-box').appendChild(sortedArray[i]);
        //   }
    })
})

itemsThreeds.forEach((itemsThreed) => {
    itemsThreed.querySelector('.library-item__text-box_threed-lvl').addEventListener('click', (e) => {
        // if (item.querySelector('.second-lvl__visible')) {
        //     item.querySelector('.second-lvl__visible').classList.remove('second-lvl__visible');
        //     item.querySelector('.arrow').classList.remove('open-closed_icon__mod');
        //     return
        // }
        // itemClosed();
        itemsThreed.querySelector('.library-item_threed-lvl__content-box').classList.toggle('second-lvl__visible');
        itemsThreed.classList.toggle('opacity-none');
        itemsThreed.classList.toggle('opacity-none');
        itemsThreed.querySelector('.arrow').classList.toggle('open-closed_icon__mod');
        

        

        // var sortedArray = Array.from(item.querySelectorAll('.library-item__link')).sort(function(a, b){
        //     return a.textContent.localeCompare(b.textContent);
        //   });
        //   for(var i = 0; i < sortedArray.length; i++) {
        //     item.querySelector('.library-item_second-lvl__content-box').appendChild(sortedArray[i]);
        //   }
    })
})


