const fastDOM = (s) => document.querySelector(s);

const InputLogin = fastDOM("#ILogin");
const InputEmail = fastDOM("#IEmail");
const InputPassword = fastDOM("#IPassword");
const CheckTeam = fastDOM("#ChTeam");
const InputCodeTeam = fastDOM("#ICodeTeam");
const ButtonSubmit = fastDOM("#BSubmit");
const Form = fastDOM("#form")

export default{
	InputLogin,
	InputPassword,
	InputEmail,
	CheckTeam,
	InputCodeTeam,
	ButtonSubmit,
	Form,
}

CheckTeam.addEventListener('change', function() {
  if (this.checked) {
    InputCodeTeam.style.display = "block";
  } else {
    InputCodeTeam.style.display = "none";
  }
});