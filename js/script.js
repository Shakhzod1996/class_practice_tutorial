window.addEventListener('DOMContentLoaded', () => {
    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 10500;
            this.changeToUSD();
        }

        changeToUSD() {
            this.price = this.price / this.transfer;
        }

        render() {
            const element = document.createElement('div');

            if (this.classes.length === 0) {
                this.classes = 'menu__item'
                element.classList.add(this.classes)
            } else {
                this.classes.forEach(className => {
                    return element.classList.add(className)
                })
            }

            element.innerHTML = `
            <div class="menu__item">
                    <img src="${this.src}" alt="${this.alt}">
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.descr}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> $</div>
                    </div>
                </div>
            `
            this.parent.append(element)
        }


    }

new MenuCard (
    'img/tabs/audi.jpg',
    'audi',
    'Audi',
    'Немецкий производитель автомобилей, мотоциклов, двигателей, а также велосипедов. Председателем компании с 2006 по 2015 год был Норберт Райтхофер, с мая 2015 года — Харальд Крюгер, а с 18 июля 2019 года — Оливер Ципсе.',
    '100000000',
    '.menu .container'
).render()

new MenuCard (
    'img/tabs/bmw.jpg',
    'bmw',
    'BMW',
    'Немецкий производитель автомобилей, мотоциклов, двигателей, а также велосипедов. Председателем компании с 2006 по 2015 год был Норберт Райтхофер, с мая 2015 года — Харальд Крюгер, а с 18 июля 2019 года — Оливер Ципсе.',
    '100000000',
    '.menu .container'
).render()

new MenuCard (
    'img/tabs/merc.jpg',
    'merc',
    'Merc',
    'Немецкий производитель автомобилей, мотоциклов, двигателей, а также велосипедов. Председателем компании с 2006 по 2015 год был Норберт Райтхофер, с мая 2015 года — Харальд Крюгер, а с 18 июля 2019 года — Оливер Ципсе.',
    '100000000',
    '.menu .container'
).render()
})