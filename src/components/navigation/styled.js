import styled from "styled-components";

export const StyledNavigation = styled.nav`
	.hamburger-button {
		display: none;

		@media screen and (max-width: 1024px) {
			display: block;
		}
	}

	.nav-outer {
		display: block;

		@media screen and (max-width: 1024px) {
			display: none !important;
		}
	}

	.logo-outer {
		width: 10%;
		height: auto;

		@media screen and (max-width: 960px) {
			width: 45%;
		}

		@media screen and (max-width: 768px) {
			width: 25%;
		}

		@media screen and (max-width: 425px) {
			width: 36%;
		}
	}
	position: fixed;
	z-index: 1000;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0.75rem 12rem;
	left: 0px;
	top: 0px;
	z-index: 999;
	width: 100%;
	-webkit-transition: all 500ms ease;
	-o-transition: all 500ms ease;
	transition: all 500ms ease;
	background-color: #3bb3eb;

	@media screen and (max-width: 1440px) {
		padding: 0.75rem 2rem;
	}

	@media screen and (max-width: 768px) {
		padding: 0.75rem 1rem;
	}

	@media screen and (max-width: 425px) {
		padding: 0.75rem 1rem !important;
	}

	.container {
		padding: 0;
	}
	.header-main-menu ul > li > a {
		color: #fff;
	}
	.header-main-menu ul > li .sub-menu li a {
		color: #0e1133;
	}
	.header-main-menu ul > li > a {
		color: #fff;
	}
	.header-main-menu ul > li .sub-menu li a {
		color: #0e1133;
	}
	.header-main-menu ul > li > a:hover {
		color: #801f82;
	}
	.header-main-menu ul > li > a:hover {
		color: #9b2cfa;
	}
	.header-main-menu ul > li > a {
		color: #fff;
	}
	.header-main-menu ul > li > a:hover {
		color: #2b70fa;
	}
	.header-main-menu ul > li .sub-menu li a {
		color: #505056;
	}
	.header-nav-box.header-nav-box-7
		.header-main-menu
		ul
		> li
		.sub-menu
		li
		a:hover {
		color: #2b70fa;
	}
	@media screen and (max-width: 768px) {
		/* .header-main-menu {
			display: none;
		} */
	}
	/* @media screen and (max-width: 767px) {
		.header-main-menu {
			display: none;
		}
	} */
	.header-main-menu .nav-links {
		margin: 0;
		padding: 0;
		list-style-type: none;
		justify-content: center;
		display: flex;
		gap: 3rem;
	}
	.header-main-menu ul > li {
		display: inline-block;
		margin-right: 30px;
		position: relative;
	}
	@media screen and (min-width: 992px) and (max-width: 1200px) {
		.header-main-menu ul > li {
			margin-right: 14px;
		}
	}
	.header-main-menu ul > li > a {
		font-size: 15px;
		font-weight: 500;
		color: #0e1133;
		line-height: 45px;
	}
	.header-main-menu ul > li > a i {
		padding-left: 6px;
	}
	.header-main-menu ul > li .sub-menu {
		position: absolute;
		left: 0;
		top: 110%;
		width: auto;
		min-width: 220px;
		max-width: 220px;
		background-color: #fff;
		opacity: 0;
		visibility: hidden;
		transition: all linear 0.3s;
		z-index: 99;
		-webkit-box-shadow: 0px 10px 38px 0 rgba(46, 63, 99, 0.15);
		-moz-box-shadow: 0px 10px 38px 0 rgba(46, 63, 99, 0.15);
		box-shadow: 0px 10px 38px 0 rgba(46, 63, 99, 0.15);
		list-style-type: none;
		margin: 0;
		padding: 15px 0;
		border-radius: 5px;
		text-align: left;
	}
	@media screen and (min-width: 1200px) and (max-width: 1600px) {
		.header-main-menu ul > li .sub-menu {
			min-width: 200px;
			max-width: 200px;
		}
	}
	@media screen and (min-width: 992px) and (max-width: 1200px) {
		.header-main-menu ul > li .sub-menu {
			min-width: 200px;
			max-width: 200px;
		}
	}
	@media screen and (min-width: 768px) and (max-width: 991px) {
		.header-main-menu ul > li .sub-menu {
			position: relative;
			width: 100%;
			left: 0;
			top: auto;
			opacity: 1;
			visibility: visible;
			display: none;
			right: auto;
			-webkit-transform: translateX(0%);
			-moz-transform: translateX(0%);
			-ms-transform: translateX(0%);
			-o-transform: translateX(0%);
			transform: translateX(0%);
			-webkit-transition: all none ease-out 0s;
			-moz-transition: all none ease-out 0s;
			-ms-transition: all none ease-out 0s;
			-o-transition: all none ease-out 0s;
			transition: all none ease-out 0s;
			-webkit-box-shadow: none;
			-moz-box-shadow: none;
			box-shadow: none;
			text-align: left;
			border-top: 0;
			transition: 0s;
			padding: 0;
		}
	}
	@media screen and (max-width: 767px) {
		.header-main-menu ul > li .sub-menu {
			position: relative;
			width: 100%;
			left: 0;
			top: auto;
			opacity: 1;
			visibility: visible;
			display: none;
			right: auto;
			-webkit-transform: translateX(0%);
			-moz-transform: translateX(0%);
			-ms-transform: translateX(0%);
			-o-transform: translateX(0%);
			transform: translateX(0%);
			-webkit-transition: all none ease-out 0s;
			-moz-transition: all none ease-out 0s;
			-ms-transition: all none ease-out 0s;
			-o-transition: all none ease-out 0s;
			transition: all none ease-out 0s;
			-webkit-box-shadow: none;
			-moz-box-shadow: none;
			box-shadow: none;
			text-align: left;
			border-top: 0;
			transition: 0s;
			padding: 0;
		}
	}
	.header-main-menu ul > li .sub-menu > li {
		position: relative;
		margin-left: 0;
		display: block;
	}
	.header-main-menu ul > li .sub-menu > li .sub-menu {
		margin-left: 0px;
	}
	@media screen and (min-width: 768px) and (max-width: 991px) {
		.header-main-menu ul > li .sub-menu > li .sub-menu {
			margin-left: 0;
		}
	}
	@media screen and (max-width: 767px) {
		.header-main-menu ul > li .sub-menu > li .sub-menu {
			margin-left: 0;
		}
	}
	.header-main-menu ul > li .sub-menu > li .sub-nav-toggler {
		color: #0e1133;
		-webkit-transition: all 0.3s ease-out 0s;
		-moz-transition: all 0.3s ease-out 0s;
		-ms-transition: all 0.3s ease-out 0s;
		-o-transition: all 0.3s ease-out 0s;
		transition: all 0.3s ease-out 0s;
	}
	.header-main-menu ul > li .sub-menu > li a {
		display: block;
		padding: 0px 25px;
		position: relative;
		color: #505056;
		-webkit-transition: all 0.3s ease-out 0s;
		-moz-transition: all 0.3s ease-out 0s;
		-ms-transition: all 0.3s ease-out 0s;
		-o-transition: all 0.3s ease-out 0s;
		transition: all 0.3s ease-out 0s;
		border-radius: 4px;
		margin: 0.75rem 0;
		line-height: 1.5;
		text-align: left;
	}
	@media screen and (min-width: 1200px) and (max-width: 1600px) {
		.header-main-menu ul > li .sub-menu > li a {
			padding: 0 20px;
		}
	}
	@media screen and (min-width: 992px) and (max-width: 1200px) {
		.header-main-menu ul > li .sub-menu > li a {
			padding: 0 20px;
		}
	}
	.header-main-menu ul > li .sub-menu > li a i {
		float: right;
		font-size: 16px;
		margin-top: 10px;
	}
	@media screen and (min-width: 768px) and (max-width: 991px) {
		.header-main-menu ul > li .sub-menu > li a i {
			display: none;
		}
	}
	@media screen and (max-width: 767px) {
		.header-main-menu ul > li .sub-menu > li a i {
			display: none;
		}
	}
	.header-main-menu ul > li .sub-menu > li a .sub-nav-toggler i {
		display: inline-block;
	}
	.header-main-menu ul > li .sub-menu > li a:hover {
		/* padding-left: 10px; */
		transform: scale(1.1);
	}
	.header-main-menu ul > li .sub-menu > li .sub-menu {
		right: auto;
		left: 100%;
		top: 50%;
		opacity: 0;
		visibility: hidden;
		-webkit-transition: all 0.3s ease-out 0s;
		-moz-transition: all 0.3s ease-out 0s;
		-ms-transition: all 0.3s ease-out 0s;
		-o-transition: all 0.3s ease-out 0s;
		transition: all 0.3s ease-out 0s;
	}
	@media screen and (min-width: 768px) and (max-width: 991px) {
		.header-main-menu ul > li .sub-menu > li .sub-menu {
			padding-left: 30px;
			-webkit-transition: all 0s ease-out 0s;
			-moz-transition: all 0s ease-out 0s;
			-ms-transition: all 0s ease-out 0s;
			-o-transition: all 0s ease-out 0s;
			transition: all 0s ease-out 0s;
		}
	}
	@media screen and (max-width: 767px) {
		.header-main-menu ul > li .sub-menu > li .sub-menu {
			padding-left: 30px;
			-webkit-transition: all 0s ease-out 0s;
			-moz-transition: all 0s ease-out 0s;
			-ms-transition: all 0s ease-out 0s;
			-o-transition: all 0s ease-out 0s;
			transition: all 0s ease-out 0s;
		}
	}
	.header-main-menu ul > li .sub-menu > li .sub-menu li {
		position: relative;
	}
	.header-main-menu ul > li .sub-menu > li .sub-menu li .sub-menu {
		right: auto;
		left: 100%;
		top: 50%;
		opacity: 0;
		visibility: hidden;
		-webkit-transition: all 0.3s ease-out 0s;
		-moz-transition: all 0.3s ease-out 0s;
		-ms-transition: all 0.3s ease-out 0s;
		-o-transition: all 0.3s ease-out 0s;
		transition: all 0.3s ease-out 0s;
	}
	.header-main-menu ul > li .sub-menu > li .sub-menu li:hover .sub-menu {
		top: 0%;
		opacity: 1;
		visibility: visible;
	}
	.header-main-menu ul > li .sub-menu > li:hover .sub-menu {
		top: 0%;
		opacity: 1;
		visibility: visible;
	}
	.header-main-menu ul > li .sub-menu > li:hover .sub-nav-toggler {
		color: #2b70fa;
	}
	.header-main-menu ul > li .sub-menu > li:hover > a {
		color: #4196e7;
	}
	.header-main-menu ul > li:hover .sub-menu {
		opacity: 1;
		visibility: visible;
		top: 100%;
	}
	.restly-header-8-area .header-nav-box .header-main-menu ul > li a:hover {
		color: #db0f30;
	}
	@-webkit-keyframes sticky {
		0% {
			top: -200px;
		}
		100% {
			top: 0;
		}
	}
	@keyframes sticky {
		0% {
			top: -200px;
		}
		100% {
			top: 0;
		}
	}
	.header-main-menu.restly-restly-header-two > ul > li {
		padding: 34px 25px;
	}
	.header-main-menu.restly-restly-header-two ul li a {
		color: white;
	}
	.main-menu.navbar-expand-lg .header-main-menu > ul > li {
		padding: 34px 25px;
	}
	.main-menu.navbar-expand-lg .header-main-menu > ul > li > a {
		color: white;
		font-weight: 500;
		font-size: 15px;
		letter-spacing: 1.25px;
	}

	.main-menu.navbar-expand-lg .header-main-menu.nav-home-five > ul > li > a {
		color: #0e1133;
	}
	.main-menu.navbar-expand-lg .header-main-menu.nav-home-six > ul > li > a {
		/* color: #0e1133; */
		color: white;
	}
	.main-menu.navbar-expand-lg .header-main-menu.nav-home-six > ul > li {
		padding: 34px 20px;
	}
	.header-main-menu ul > li > a {
		line-height: 0;
	}
	.header-main-menu ul > li {
		margin-right: 0;
	}
	.nav-home-one.header-main-menu ul > li {
		margin-right: 30px;
	}

	.header-main-menu li a {
		font-size: 18px;
		font-weight: 500;
		font-family: "Montserrat";
	}

	.header-main-menu > ul > li {
		padding: 15px 15px;
	}

	.header-main-menu > ul > li {
		padding: 20px 0;
	}

	.main-header .logo,
	.main-menu .navigation > li {
		-webkit-animation-duration: 0.5s;
		animation-duration: 0.5s;
		-webkit-animation-fill-mode: both;
		animation-fill-mode: both;
		-webkit-animation-name: fadeInRight;
		animation-name: fadeInRight;
	}

	.main-header .logo {
		-webkit-animation-duration: 2s;
		animation-duration: 2s;
		-webkit-animation-name: fadeInUp;
		animation-name: fadeInUp;
	}

	.main-header {
		position: relative;
		left: 0px;
		top: 0px;
		z-index: 999;
		width: 100%;
		-webkit-transition: all 500ms ease;
		-o-transition: all 500ms ease;
		transition: all 500ms ease;
		/* background-color: #7ad5ff4d; */
		background-color: #3bb3eb;

		@media screen and (max-width: 767px) {
			/* display: none; */
		}
	}
	.main-header .header-upper {
		z-index: 5;
		width: 100%;
		position: relative;
		-webkit-transition: all 500ms ease;
		-o-transition: all 500ms ease;
		transition: all 500ms ease;
		padding: 0 12rem;

		@media screen and (max-width: 425px) {
			padding: 0.75rem 1rem;
		}

		@media screen and (max-width: 767px) {
			padding: 0.75rem 1rem;
		}
	}
	.main-header .header-upper .container-fluid {
		padding: 0;
	}

	.main-header .logo {
		z-index: 9;
		padding: 2px 0;
		position: relative;
		width: fit-content;
	}
	.main-header.fixed-header .header-upper {
		top: 0;
		left: 0;
		position: fixed;
		-webkit-animation: sticky 1s;
		animation: sticky 1s;
		-webkit-box-shadow: 0px 0px 30px 0px rgba(87, 95, 245, 0.1);
		box-shadow: 0px 0px 30px 0px rgba(87, 95, 245, 0.1);
	}

	.header-top {
		color: #000000;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		-webkit-box-pack: justify;
		-ms-flex-pack: justify;
		justify-content: space-between;
	}

	.main-menu .navbar-header {
		display: none;
	}
	@media screen and (max-width: 991px) {
		.main-menu .navbar-header {
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex;
			-webkit-box-align: center;
			-ms-flex-align: center;
			align-items: center;
			-webkit-box-pack: justify;
			-ms-flex-pack: justify;
			justify-content: space-between;
		}
	}
	.main-menu .navbar-header .navbar-toggle {
		float: right;
		padding: 4px 0;
		cursor: pointer;
		background: transparent;
	}

	.main-menu .navbar-header .navbar-toggle .icon-bar {
		background: #000000;
		height: 2px;
		width: 30px;
		display: block;
		margin: 7px 5px;
	}

	.text-white .navbar-collapse > ul > li > a,
	.text-white .navbar-collapse > ul > li > a:hover,
	.text-white .navbar-collapse > ul > li.current > a {
		color: white;
	}
	@media screen and (max-width: 991px) {
		.text-white .navbar-collapse > ul > li > a,
		.text-white .navbar-collapse > ul > li > a:hover,
		.text-white .navbar-collapse > ul > li.current > a {
			color: black;
		}
	}

	.text-white .top-right .office-time i {
		color: white;
	}

	.text-white .navbar-header .navbar-toggle .icon-bar {
		background: white;
	}

	.text-white .dropdown-btn span {
		color: black;
	}

	.text-white .mega-title {
		color: #000000;
	}

	/* Menu Icons */
	.menu-icons {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
	}
	.menu-icons > button {
		margin: 0 15px;
		background: transparent;
	}

	/* Header Search */
	.nav-search {
		position: relative;
	}
	.nav-search button {
		background: transparent;
	}
	.nav-search form {
		position: absolute;
		width: 320px;
		top: 100%;
		right: 0;
		z-index: 777;
		padding: 10px;
		border-radius: 5px;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		justify-content: center;
		background-color: #fff;
		-webkit-box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.05);
		box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.05);
	}
	.nav-search form.hide {
		display: none;
	}
	.nav-search form input {
		border: none;
		padding: 15px 5px 15px 25px;
	}
	.nav-search form button {
		padding: 15px;
		color: #454545;
		border-left: 1px solid #cfdbf1;
	}

	/* Header Number */
	.header-number {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
	}
	.header-number > i {
		font-size: 18px;
		margin-right: 20px;
		border: 1px solid #e5e7ef;
		width: 50px;
		height: 50px;
		background: transparent;
		line-height: 50px;
		border-radius: 50%;
		text-align: center;
	}
	.header-number .number-content {
		font-family: "Montserrat";
	}
	.header-number .number-content span {
		color: #333f7d;
		display: block;
		font-size: 14px;
	}
	.header-number .number-content a {
		color: #000f5c;
		font-size: 20px;
		text-decoration: underline;
	}

	@media screen and (max-width: 1199px) {
		.header-one .logo-outer {
			margin-right: 25px;
			padding: 25px;
		}
	}

	.header-one .header-top {
		padding-left: 85px;
		padding-right: 230px;
	}
	@media screen and (max-width: 1199px) {
		.header-one .header-top {
			font-size: 14px;
			padding-left: 25px;
		}
	}

	.header-inner {
		display: flex;
		justify-content: space-between;
		/* padding: 0 40px; */
	}

	.header-one .header-inner {
		/* padding-right: 230px; */
		display: flex;
		justify-content: space-between;
	}

	@media screen and (max-width: 1500px) {
		.header-one .header-inner,
		.header-one .header-top {
			padding-right: 85px;
		}
	}

	@media screen and (max-width: 1199px) {
		.header-one .header-inner,
		.header-one .header-top {
			padding-right: 25px;
		}
	}

	/* Header Two */
	.header-two {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		border-bottom: 1px solid #4e597b;
	}
	.header-two .header-top {
		padding-left: 30px;
		padding-right: 70px;
		border-bottom: 1px solid #4e597b;
	}
	@media screen and (max-width: 1500px) {
		.header-two .header-top {
			padding-right: 30px;
		}
	}
	@media screen and (max-width: 767px) {
		.header-two .header-top {
			padding-left: 15px;
			padding-right: 15px;
		}
	}
	@media screen and (max-width: 1199px) {
		.header-two .header-top .top-left {
			display: none;
		}
	}
	@media screen and (max-width: 1500px) {
		.header-two .header-top .top-left ul li:last-child {
			display: none;
		}
	}
	.header-two .logo-outer {
		border-right: 1px solid #4e597b;
	}
	@media screen and (max-width: 1500px) {
		.header-two .logo-outer {
			padding-left: 50px;
			padding-right: 50px;
		}
	}
	.header-two .header-upper {
		/* background: #222f5a; */
		background: #3bb3eb;
	}
	.header-two .header-inner {
		padding-left: 5px;
		padding-right: 70px;
	}
	@media screen and (max-width: 1500px) {
		.header-two .header-inner {
			padding: 0 30px 0 15px;
		}
	}
	.header-two.fixed-header {
		top: 0;
		position: fixed;
		-webkit-animation: sticky 1s;
		animation: sticky 1s;
	}
	.header-two.fixed-header .header-upper {
		position: relative;
		-webkit-animation: none;
		animation: none;
	}
	.header-two.fixed-header .header-top {
		display: none;
	}
	@media screen and (max-width: 1199px) {
		.header-two .main-menu .navbar-collapse li {
			padding-right: 10px;
		}
	}

	.header-wrap {
		width: 100%;
	}

	/* Header Three */
	.header-three .header-upper {
		position: absolute;
		border-bottom: 1px solid #485165;
	}

	.header-three.fixed-header .header-upper {
		background: #222f5a;
	}

	.header-three .top-left {
		display: block;
	}
	@media screen and (max-width: 767px) {
		.header-three .top-left {
			display: none;
		}
	}

	.header-three .top-right {
		margin-right: 0;
	}
	@media screen and (max-width: 767px) {
		.header-three .top-right {
			margin-right: auto;
		}
	}
	.header-three .top-right .office-time {
		display: block;
		margin-right: 0;
	}

	.header-three .main-menu {
		margin-left: auto;
	}

	.header-three .menu-btn {
		margin-left: 15px;
	}

	/* Header Four */
	.header-four .container {
		max-width: 1450px;
	}

	.header-four .office-time {
		margin-right: 40px;
	}
	@media screen and (max-width: 1500px) {
		.header-four .office-time {
			margin-right: 15px;
		}
	}

	.header-four .header-upper {
		position: absolute;
	}

	.header-four.fixed-header .header-upper {
		background: #222f5a;
	}

	@media screen and (max-width: 1199px) {
		.header-four .nav-search,
		.header-four .top-left li:last-child {
			display: none;
		}
	}

	.header-four .menu-btn {
		margin-left: 15px;
	}

	/* Header Five */
	.header-five {
		position: absolute;
	}
	.header-five .container {
		max-width: 1450px;
	}
	@media screen and (min-width: 1501px) {
		.header-five .header-top-wrap {
			margin-right: 40px;
		}
	}
	@media screen and (min-width: 1501px) {
		.header-five .header-top {
			margin-right: -20px;
			padding-left: 20px;
		}
	}
	.header-five .office-time {
		margin-right: 40px;
	}
	@media screen and (max-width: 1500px) {
		.header-five .office-time {
			margin-right: 15px;
		}
	}
	.header-five .header-inner {
		position: relative;
		padding-right: 15px;
	}
	@media screen and (max-width: 991px) {
		.header-five .header-inner {
			padding-right: 0;
		}
	}
	.header-five .header-inner:after {
		content: "";
		top: 0;
		right: 0;
		z-index: -1;
		background: white;
		width: 100vw;
		height: 100%;
		position: absolute;
		-webkit-box-shadow: 0px 10px 60px rgba(16, 76, 186, 0.1);
		box-shadow: 0px 10px 60px rgba(16, 76, 186, 0.1);
	}
	@media screen and (max-width: 991px) {
		.header-five .header-inner:after {
			right: -15px;
		}
	}
	.header-five .main-menu .navigation > li {
		padding-top: 26px;
		padding-bottom: 26px;
	}
	@media screen and (max-width: 991px) {
		.header-five .main-menu .navigation > li {
			padding: 0;
		}
	}
	@media screen and (max-width: 1199px) {
		.header-five .nav-search,
		.header-five .top-left li:last-child {
			display: none;
		}
	}
	.header-five .menu-btn {
		margin-left: 15px;
	}
	.header-five.fixed-header .header-upper {
		-webkit-box-shadow: none;
		box-shadow: none;
	}

	/* Header Six */
	.header-six {
	}
	@media screen and (min-width: 1501px) {
		.header-six {
			padding-top: 10px;
			padding-bottom: 10px;
		}
	}
	@media screen and (max-width: 1199px) {
		.header-six .menu-icons {
			display: none;
		}
	}
	.header-six .menu-icons button {
		color: #2f97f7;
	}
	.header-six.fixed-header .header-upper {
		background: #3bb3eb;
	}
	.header-six .main-menu {
		margin-left: auto;
	}
	@media screen and (min-width: 1501px) {
		.header-six .main-menu .navbar-collapse li {
			padding-left: 20px;
			padding-right: 20px;
		}
	}
	.header-six .menu-btn {
		margin-left: 20px;
	}

	/* Header Seven */
	.header-seven {
		position: absolute;
		border-bottom: 1px solid #e5e7ef;
	}
	.header-seven .header-upper {
		padding-left: 110px;
		padding-right: 80px;
	}
	@media screen and (max-width: 1650px) and (min-width: 1500px) {
		.header-seven .header-upper {
			padding-left: 50px;
			padding-right: 50px;
		}
	}
	@media screen and (max-width: 1500px) {
		.header-seven .header-upper {
			padding-left: 25px;
			padding-right: 25px;
		}
	}
	.header-seven .main-menu {
		margin-right: auto;
		margin-left: 100px;
	}
	@media screen and (max-width: 1500px) {
		.header-seven .main-menu {
			margin-left: 50px;
		}
	}
	@media screen and (max-width: 1199px) {
		.header-seven .main-menu {
			margin-right: 0;
			margin-left: auto;
		}
	}
	@media screen and (min-width: 1501px) {
		.header-seven .main-menu .navbar-collapse .navigation > li {
			padding-left: 15px;
			padding-right: 15px;
		}
	}
	.header-seven .main-menu .navbar-collapse li {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		-webkit-box-pack: justify;
		-ms-flex-pack: justify;
		justify-content: space-between;
	}
	@media screen and (max-width: 991px) {
		.header-seven .main-menu .navbar-collapse li {
			display: block;
		}
	}
	.header-seven .main-menu .navbar-collapse li a {
		font-size: 18px;
		font-weight: 500;
		font-family: "Montserrat";
	}
	.header-seven .main-menu .navbar-collapse li .dropdown-btn {
		right: 0;
		width: auto;
		height: auto;
		display: block;
		line-height: 1;
		border-left: none;
		position: relative;
		margin-left: 2px;
	}
	.header-seven .main-menu .navbar-collapse li .dropdown-btn:before {
		content: "+";
		color: #000f5c;
		font-size: 18px;
		font-weight: 500;
		font-family: "Montserrat";
	}
	@media screen and (max-width: 991px) {
		.header-seven .main-menu .navbar-collapse li .dropdown-btn {
			top: 0;
			width: 50px;
			height: 42px;
			line-height: 42px;
			position: absolute;
			border-left: 1px solid #f2f2f2;
		}
	}
	.header-seven .main-menu .navbar-collapse li .dropdown-btn span {
		display: none;
	}
	@media screen and (max-width: 991px) {
		.header-seven .main-menu .navbar-collapse li .dropdown {
			display: block;
		}
	}
	.header-seven .header-number {
		margin-right: 100px;
	}
	@media screen and (max-width: 1650px) and (min-width: 1500px) {
		.header-seven .header-number {
			margin-right: 50px;
		}
	}
	@media screen and (max-width: 1500px) {
		.header-seven .header-number {
			margin-right: 0;
		}
	}
	@media screen and (max-width: 1199px) {
		.header-seven .header-number {
			display: none;
		}
	}
	.header-seven .menu-btn {
		margin-left: 0;
	}
	@media screen and (max-width: 1500px) {
		.header-seven .menu-btn {
			display: none;
		}
	}
	.header-seven:not(.fixed-header) .header-upper {
		padding-top: 20px;
		padding-bottom: 20px;
	}
	@media screen and (max-width: 1500px) {
		.header-seven:not(.fixed-header) .header-upper {
			padding-top: 0;
			padding-bottom: 0;
		}
	}
	.header-seven.fixed-header .header-upper {
		background: white;
	}

	/* Header Eight */
	.header-eight .container {
		max-width: 1530px;
	}

	.header-eight .logo-outer {
		-webkit-box-flex: 0;
		-ms-flex: none;
		flex: none;
		z-index: 500;
		-webkit-transition: none;
		-o-transition: none;
		transition: none;
		margin-top: -66px;
		position: relative;
		background: #f43336;
		border-radius: 0 0 50px 50px;
	}
	@media screen and (max-width: 991px) {
		.header-eight .logo-outer {
			margin-top: 0;
			display: block;
			margin-bottom: -15px;
		}
	}
	.header-eight .logo-outer a {
		-webkit-transition: none;
		-o-transition: none;
		transition: none;
		padding: 40px 60px;
		display: inline-block;
	}
	@media screen and (max-width: 1199px) {
		.header-eight .logo-outer a {
			max-width: 200px;
			padding-left: 50px;
			padding-right: 50px;
		}
	}
	@media screen and (max-width: 991px) {
		.header-eight .logo-outer a {
			max-width: 175px;
			padding: 25px 40px;
		}
	}

	.header-eight .header-top {
		padding-left: 300px;
	}
	@media screen and (max-width: 991px) {
		.header-eight .header-top {
			padding-left: 0;
		}
	}

	@media screen and (max-width: 1199px) {
		.header-eight .top-left {
			display: none;
		}
	}

	.header-eight .top-left li {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		margin-right: 30px;
	}
	.header-eight .top-left li i {
		color: #f43336;
		margin-right: 10px;
	}
	.header-eight .top-left li:not(:last-child) {
		padding-right: 30px;
		border-right: 1px solid rgba(255, 255, 255, 0.3);
	}

	.header-eight .top-left select {
		padding: 0;
		color: white;
		border: none;
		cursor: pointer;
		background: transparent;
	}
	.header-eight .top-left select option {
		color: #454545;
	}

	.header-eight .top-right .hotline {
		margin-right: 30px;
		padding-right: 30px;
		border-right: 1px solid rgba(255, 255, 255, 0.3);
	}
	@media screen and (max-width: 575px) {
		.header-eight .top-right .hotline {
			display: none;
		}
	}
	.header-eight .top-right .hotline i,
	.header-eight .top-right .hotline span {
		margin-right: 5px;
	}

	.header-eight .top-right .social-style-one i {
		-webkit-transition: 0.5s;
		-o-transition: 0.5s;
		transition: 0.5s;
	}

	.header-eight .top-right .social-style-one a:hover i {
		color: #f43336;
	}

	.header-eight .menu-btn {
		margin-left: 35px;
	}
	@media screen and (max-width: 1500px) {
		.header-eight .menu-btn {
			display: none;
		}
	}

	@media screen and (min-width: 991px) {
		.header-eight .main-menu .navbar-collapse .navigation > li {
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex;
			-webkit-box-align: center;
			-ms-flex-align: center;
			align-items: center;
		}
		.header-eight .main-menu .navbar-collapse .navigation > li > .dropdown-btn {
			width: auto;
			height: auto;
			right: 0;
			line-height: 1;
			margin-left: 3px;
			border-left: none;
			position: relative;
		}
	}

	.header-eight .main-menu .navbar-collapse li.dropdown .dropdown-btn {
		display: block;
		font-size: 10px;
	}
	.header-eight
		.main-menu
		.navbar-collapse
		li.dropdown
		.dropdown-btn
		span:before {
		content: "\f067";
	}

	@media screen and (max-width: 1500px) {
		.header-eight .nav-search {
			margin-right: 0;
		}
	}

	@media screen and (max-width: 991px) {
		.header-eight .nav-search {
			display: none;
		}
	}

	.header-eight .navbar-header button {
		margin-left: auto;
	}

	.header-eight .mobile-logo {
		max-width: 100px;
	}

	.header-eight.fixed-header .logo-outer {
		margin-top: 0;
		margin-bottom: -18px;
	}
	@media screen and (max-width: 991px) {
		.header-eight.fixed-header .logo-outer {
			margin-bottom: -15px;
		}
	}
	.header-eight.fixed-header .logo-outer a {
		padding-top: 35px;
		padding-bottom: 35px;
	}
	@media screen and (max-width: 991px) {
		.header-eight.fixed-header .logo-outer a {
			padding-top: 25px;
			padding-bottom: 25px;
		}
	}

	/* Header Nine */
	.header-nine {
		border-bottom: 1px solid rgba(255, 255, 255, 0.1);
	}
	@media screen and (min-width: 1501px) {
		.header-nine {
			padding-top: 20px;
			padding-bottom: 20px;
		}
	}
	.header-nine.fixed-header .header-upper {
		background: #080f17;
	}
	.header-nine .container {
		max-width: 1550px;
	}
	.header-nine .logo-outer {
		-webkit-box-flex: 0;
		-ms-flex: none;
		flex: none;
	}
	@media screen and (min-width: 1501px) {
		.header-nine .main-menu {
			margin-right: 50px;
		}
	}
	.header-nine .main-menu .navbar-collapse li ul,
	.header-nine .main-menu .navbar-collapse li .megamenu {
		background: #182633;
	}
	.header-nine .main-menu .navbar-collapse li a {
		color: white;
		font-size: 14px;
		text-transform: uppercase;
		font-family: "Urbanist", sans-serif;
	}
	.header-nine .main-menu .navbar-collapse li.dropdown .dropdown-btn {
		display: block;
		font-size: 8px;
		border-bottom: none;
		background: transparent;
		border-color: rgba(255, 255, 255, 0.1);
	}
	.header-nine .main-menu .navbar-collapse li.dropdown .dropdown-btn span {
		color: white;
	}
	.header-nine
		.main-menu
		.navbar-collapse
		li.dropdown
		.dropdown-btn
		span:before {
		content: "\f067";
	}
	.header-nine .main-menu .navbar-collapse li ul li {
		border-color: rgba(255, 255, 255, 0.1);
	}
	@media screen and (min-width: 991px) {
		.header-nine .main-menu .navbar-collapse .navigation > li {
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex;
			-webkit-box-align: center;
			-ms-flex-align: center;
			align-items: center;
			padding-left: 18px;
			padding-right: 18px;
		}
		.header-nine .main-menu .navbar-collapse .navigation > li > .dropdown-btn {
			width: auto;
			height: auto;
			right: 0;
			top: -1px;
			line-height: 1;
			margin-left: 4px;
			border-left: none;
			position: relative;
		}
	}
	@media screen and (max-width: 991px) {
		.header-nine .main-menu .navbar-collapse {
			border: none;
			background: #182633;
		}
		.header-nine .main-menu .navbar-collapse > ul {
			border-color: rgba(255, 255, 255, 0.1);
		}
		.header-nine .main-menu .navbar-collapse > ul li {
			background: transparent;
			border-color: rgba(255, 255, 255, 0.1);
		}
		.header-nine .main-menu .navbar-collapse > ul li > a:hover,
		.header-nine .main-menu .navbar-collapse > ul li.current > a {
			color: #20c997;
		}
	}
	.header-nine .mega-title {
		color: white;
	}
	.header-nine .menu-icons > button,
	.header-nine .nav-search > button {
		width: 40px;
		height: 40px;
		position: relative;
		border-radius: 50%;
		border: 2px solid rgba(255, 255, 255, 0.2);
	}
	.header-nine .menu-icons > button .number,
	.header-nine .nav-search > button .number {
		top: -4px;
		right: -3px;
		position: absolute;
		width: 20px;
		height: 20px;
		background: -webkit-gradient(
			linear,
			left top,
			right top,
			color-stop(-21.46%, #a146e8),
			color-stop(36.39%, #6c63d0),
			to(#387db8)
		);
		background: -webkit-linear-gradient(
			left,
			#a146e8 -21.46%,
			#6c63d0 36.39%,
			#387db8 100%
		);
		background: -o-linear-gradient(
			left,
			#a146e8 -21.46%,
			#6c63d0 36.39%,
			#387db8 100%
		);
		background: linear-gradient(
			90deg,
			#a146e8 -21.46%,
			#6c63d0 36.39%,
			#387db8 100%
		);
		line-height: 20px;
		border-radius: 50%;
		text-align: center;
	}
	@media screen and (max-width: 1500px) {
		.header-nine .menu-icons,
		.header-nine .nav-search {
			display: none;
		}
	}
	.header-nine .menu-btn {
		margin-left: 25px;
	}
	@media screen and (max-width: 1199px) {
		.header-nine .menu-btn {
			display: none;
		}
	}

	.contact-us-button {
		width: fit-content !important;
		padding: 0.65rem 1.25rem;

		@media screen and (max-width: 1024px) {
			display: none;
		}
	}
`;
