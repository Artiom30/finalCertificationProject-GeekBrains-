const signUpForm = document.querySelector('.sign-up__form');
const formSubmitBtn = document.querySelector('.sign-up__button');
const emailFormInput = document.querySelector('.sign-up__email-input');
const firstPassForminput = document.getElementById('password1');
const secondPassForminput = document.getElementById('password2');
/* Star rating inputs*/
const allStarsInputs = document.querySelectorAll('.star-rating__input');

document.querySelectorAll('.star-rating__input').forEach(inputStarRating => {
	inputStarRating.addEventListener('click', function (e) {
		inputStarRating.classList.add('checked');
	});
});

signUpForm.addEventListener('submit', (e) => {
	if (emailFormInput.value.trim() === "") {
		e.preventDefault();
		alert('Введите ваш Email');
		emailFormInput.style.border = '2px solid red';
		firstPassForminput.style.border = '2px solid red';
		secondPassForminput.style.border = '2px solid red';
	} else if (firstPassForminput.value.trim() === "") {
		e.preventDefault();
		alert('Please enter your password');
		emailFormInput.style.border = '2px solid green';
		firstPassForminput.style.border = '2px solid red';
		secondPassForminput.style.border = '2px solid red';
	} else if (secondPassForminput.value.trim() === "") {
		e.preventDefault();
		firstPassForminput.style.border = '2px solid green';
		emailFormInput.style.border = '2px solid green';
	} else if (secondPassForminput.value.trim() !== "" && secondPassForminput.value !== firstPassForminput.value) {
		alert('Passwords are do not match, please try again...');
		e.preventDefault();
		firstPassForminput.style.border = '2px solid red';
		secondPassForminput.style.border = '2px solid red';
	} else {
		firstPassForminput.style.border = '2px solid green';
		secondPassForminput.style.border = '2px solid green';
		let countOfcheched = 0;
		allStarsInputs.forEach(inputStarRating => {
			console.log(inputStarRating.classList.value);
			if (inputStarRating.classList.value === 'star-rating__input checked')
				countOfcheched++;
		});
		if (countOfcheched === 0) {
			e.preventDefault();
			alert('Please rate us with stars...')
		} else {
			alert('Thank you, we appreciate your opinion about us!');
		}
	};
});





