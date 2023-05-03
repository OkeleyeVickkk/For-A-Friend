const menuButton = document.getElementById("menu-button-trigger");
const searchButton = document.getElementById("search-button-trigger");
const closeSearchButton = document.getElementById("close-search-trigger-button");
const closeMenuButton = document.getElementById("close-menu-button-trigger");
const searchBarContainer = document.querySelector("header .search-bar-container");
const mobileMenu = document.getElementById("mobile-menu");

// actions / events
menuButton.addEventListener("click", toggleMobileMenu);
searchButton.addEventListener("click", toggleSearchBar);
closeSearchButton.addEventListener("click", removeSearchBar);

// function that toggles search bar
function toggleSearchBar() {
	const isActive = searchBarContainer.classList.contains("active");
	if (searchBarContainer && isActive) {
		searchBarContainer.classList.remove("active");
	} else {
		searchBarContainer.classList.add("active");
		mobileMenu.classList.remove("active");
	}
}

// function that removes search bar
function removeSearchBar() {
	const isActive = searchBarContainer.classList.contains("active");
	isActive ? searchBarContainer.classList.remove("active") : "";
}

function toggleMobileMenu() {
	const isVisible = mobileMenu.classList.contains("active");
	const isActiveSearchBar = searchBarContainer.classList.contains("active");

	if ((mobileMenu && isVisible) || (mobileMenu && isVisible && isActiveSearchBar)) {
		mobileMenu.classList.remove("active");
	} else {
		searchBarContainer.classList.remove("active");
		mobileMenu.classList.add("active");
	}
}
