// ---------Responsive-navbar-active-animation-----------
function test() {
	var tabsNewAnim = $('#navbarSupportedContent');
	var selectorNewAnim = $('#navbarSupportedContent').find('li').length;
	var activeItemNewAnim = tabsNewAnim.find('.active');
	var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
	var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
	var itemPosNewAnimTop = activeItemNewAnim.position();
	var itemPosNewAnimLeft = activeItemNewAnim.position();
	$(".hori-selector").css({
		"top": itemPosNewAnimTop.top + "px",
		"left": itemPosNewAnimLeft.left + "px",
		"height": activeWidthNewAnimHeight + "px",
		"width": activeWidthNewAnimWidth + "px"
	});
	$("#navbarSupportedContent").on("click", "li", function (e) {
		$('#navbarSupportedContent ul li').removeClass("active");
		$(this).addClass('active');
		var activeWidthNewAnimHeight = $(this).innerHeight();
		var activeWidthNewAnimWidth = $(this).innerWidth();
		var itemPosNewAnimTop = $(this).position();
		var itemPosNewAnimLeft = $(this).position();
		$(".hori-selector").css({
			"top": itemPosNewAnimTop.top + "px",
			"left": itemPosNewAnimLeft.left + "px",
			"height": activeWidthNewAnimHeight + "px",
			"width": activeWidthNewAnimWidth + "px"
		});
	});
}
$(document).ready(function () {
	setTimeout(function () { test(); });
});
$(window).on('resize', function () {
	setTimeout(function () { test(); }, 500);
});
$(".navbar-toggler").click(function () {
	$(".navbar-collapse").slideToggle(300);
	setTimeout(function () { test(); });
});

const titleInput = document.getElementById('modalTitle');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const imageOutput = document.getElementById('user-image');
const oldImage = document.getElementById('old-image');
const ageInput = document.getElementById('datepicker');
const salaryInput = document.getElementById('salary');
const modalid = document.getElementById('modalid');
const uimage = document.getElementById('Image');

function showData(data) {

	let convertedData = JSON.parse(data);
	titleInput.textContent = `edit ${convertedData.username}`.toUpperCase();
	nameInput.value = convertedData.username
	emailInput.value = convertedData.email
	passwordInput.value = convertedData.password
	imageOutput.src = `/uploads/${convertedData.image}`
	ageInput.value = convertedData.age 
	oldImage.value = convertedData.image;
	salaryInput.value = convertedData.salary
	modalid.value = convertedData.id
  }
  const btnedit = document.querySelectorAll('#edit-submit-btn')
  btnedit.forEach(usr=>{
	usr.addEventListener('click',e=>{
		console.log(uimage.files[0])
		upload(formData)
			// const data = {
			// 	username:nameInput.value,
			// 	email:emailInput.value,
			// 	age:ageInput.value,
			// 	salary:salaryInput.value,
			// 	image:oldImage.value,
			// 	password:passwordInput.value
			// }
			// fetch(`http://localhost:5000/edituser/${id}`,{
			// 	method:'POST',
			// 	headers: {
			// 		"Content-Type": "application/json",
			// 		// 'Content-Type': 'application/x-www-form-urlencoded',
			// 	  },
			// 	body:JSON.stringify(data)	
			// })
	})
  })
  
  async function upload(formData) {
			const id = modalid.value

	try {
	  const response = await fetch(`http://localhost:5000/edituser/${id}`, {
		method: "POST",
		body: formData,
	  });
	  const result = await response.json();
	  console.log("Success:", result);
	} catch (error) {
	  console.error("Error:", error);
	}
  }
  
  const formData = new FormData();
  
  formData.append("username", "abc123");
  formData.append("image", uimage.files[0]);
  
  upload(formData);
  