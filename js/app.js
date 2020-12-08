const card = document.querySelector('.card');
const container = document.querySelector('.container');
const body = document.getElementById('body');
//элементы анимации
const title = document.querySelector('.title');
const sneaker = document.querySelector('.sneaker img');
const purchase = document.querySelector('.purchase button');
const description = document.querySelector('.info h3');
const sizes = document.querySelector('.sizes');
const sizesbtn = document.querySelector('.sizes-btn');
//Событие движения
container.addEventListener('mousemove', (e) => {
	let xAxis = ((window.innerWidth / 2 - e.pageX) / 25);
	let yAxis = ((window.innerHeight / 2 - e.pageY) / 25) * -1;
	card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//Анимация входа мышки из контейнера
container.addEventListener('mouseenter', e => {
	card.style.transition = "none";
	//элементы
	title.style.transform = 'translateZ(50px)';
	sneaker.style.transform = 'translateZ(110px) rotateZ(-45deg)';
	description.style.transform = 'translateZ(50px)';
	sizes.style.transform = 'translateZ(70px)';
	purchase.style.transform = 'translateZ(90px)';
});

//Анимация выхода мышки из контейнера
container.addEventListener('mouseleave', e => {
	card.style.transition = "all .5s ease";
	card.style.transform = `rotateY(0deg) rotateX(0deg)`;
	//элементы
	title.style.transform = 'translateZ(0px)';
	sneaker.style.transform = 'translateZ(0px) rotateZ(0deg)';
	description.style.transform = 'translateZ(0px)';
	sizes.style.transform = 'translateZ(0px)';
	purchase.style.transform = 'translateZ(0px)';
});

//выбор размера
sizes.onclick = function (e) {
	for (let i = 0; i < sizes.children.length; i++) {
		sizes.children[i].classList.remove('active');
	}
	e.target.classList.add('active');
}

