const menuButton = document.getElementById('menu-button')
const menu = document.getElementById('menu')

let menuDisplay = false

ScrollReveal().reveal('.showcase', { delay: 100, reset: true })
ScrollReveal().reveal('.news-card', { delay: 100, reset: true })
ScrollReveal().reveal('.cards-banner-one', { delay: 100, reset: true })
ScrollReveal().reveal('.social-media', { delay: 100, reset: true })
ScrollReveal().reveal('.footer', { delay: 100, reset: true })

menuButton.addEventListener('click', () => {
	if (!menuDisplay) {
		menu.style.visibility = 'hidden'
		console.log('hi')
		menuDisplay = !menuDisplay
	} else {
		menu.style.visibility = 'visible'
		menuDisplay = !menuDisplay
	}
})

if (window.screen.width > 900) {
	menu.style.visibility = 'visible'
}
