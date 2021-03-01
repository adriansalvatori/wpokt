window.onload = () => {
    /** Dropdown */

    const droptriggers = document.querySelectorAll('.droptrigger')

    const drops = document.querySelectorAll('.drop')

    function hideDrops() {
        drops.forEach(drop => {
            drop.classList.add('is-hidden')
        })
        droptriggers.forEach(trigger => {
            trigger.classList.remove('is-down')
        })
    }

    droptriggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            let wasClosed = trigger.nextElementSibling.classList.contains('is-hidden')
            hideDrops()
            if (wasClosed) {
                trigger.classList.toggle('is-down')
                trigger.nextElementSibling.classList.toggle('is-hidden')
                trigger.nextElementSibling.scrollIntoView({
                    block: "center",
                    behavior: "smooth"
                })
            } else {
                trigger.scrollIntoView({
                    block: "center",
                    behavior: "smooth"
                })
            }

        })
    })

    hideDrops()

    /** Menu Trigger */

    const triggers = document.querySelectorAll('.menutrigger')

    const menu = document.querySelector('.mobile-menu')

    triggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            menu.classList.toggle('is-hidden')
        })
    })

    /** Observer */
    function observe(anchor) {
        let observer = new IntersectionObserver(function (entries) {
            // isIntersecting is true when element and viewport are overlapping
            // isIntersecting is false when element and viewport don't overlap
            let indicators = document.querySelectorAll('a[href="#' + entries[0].target.id + '"]')

            if (entries[0].isIntersecting === true) {
                indicators.forEach(indicator => {
                    indicator.classList.add('focus')
                })
            } else {
                indicators.forEach(indicator => {
                    indicator.classList.remove('focus')
                })
            }

        }, {
            rootMargin: '-200px 0px',
            threshold: [0]
        });

        observer.observe(anchor)
    }

    /** Form */

    observe(document.querySelector('#start'))
    observe(document.querySelector('#about'))
    observe(document.querySelector('#faq'))

    document.body.addEventListener("submit", function (event) {
        event.preventDefault();
        let email = document.querySelector('#pixel-form-email').value
        if (email != '') {
            fetch('https://wpokt-form-signup.herokuapp.com/v1/wpokt', {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email
                })
            }).then((response) => {
                console.log(response)
                document.querySelector('.modal').classList.toggle('is-active')
            })
        } 
    })
}