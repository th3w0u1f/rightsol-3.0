import styled from "styled-components";

export const StyledDrawer = styled.section`
	.off_canvars_overlay {
		width: 100%;
		height: 100%;
		position: sticky;
		z-index: 9998;
		opacity: 0;
		visibility: hidden;
		cursor: crosshair;
		background: #232323;
		top: 0;
		transition: all linear 0.1s;
	}
	.off_canvars_overlay.active {
		opacity: 0.5;
		visibility: visible;
	}

	.offcanvas_menu {
		display: none;
	}
	@media screen and (min-width: 768px) and (max-width: 991px) {
		.offcanvas_menu {
			display: block;
		}
	}
	@media screen and (max-width: 767px) {
		.offcanvas_menu {
			display: block;
		}
	}

	.offcanvas_menu_wrapper {
		width: 290px;
		position: fixed;
		background: #fff;
		z-index: 9999;
		top: 0;
		height: 100%;
		transition: 0.5s;
		left: 0;
		margin-left: -300px;
		padding: 50px 15px 30px;
		overflow-y: scroll;
		overflow-x: hidden;
	}
	.offcanvas_menu_wrapper::-webkit-scrollbar {
		display: none;
	}
	/* Hide scrollbar for IE, Edge and Firefox */
	.offcanvas_menu_wrapper {
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}
	.offcanvas_menu_wrapper.active {
		margin-left: 0;
	}
	.offcanvas_menu_wrapper .slinky-theme-default {
		background: inherit;
		min-height: 300px;
		overflow-y: auto;
	}
	.offcanvas_menu_wrapper .header-btn {
		margin-bottom: 30px;
	}
	.offcanvas_menu_wrapper .header-btn a {
		color: #222;
	}
	.offcanvas_menu_wrapper .header-btn a:hover {
		color: #222;
	}

	.offcanvas_main_menu li {
		position: relative;
	}
	.offcanvas_main_menu li:last-child {
		margin: 0;
	}
	.offcanvas_main_menu li span.menu-expand {
		position: absolute;
		right: 0;
	}
	.offcanvas_main_menu li a {
		font-size: 14px;
		font-weight: 500;
		text-transform: capitalize;
		display: block;
		padding-bottom: 10px;
		margin-bottom: 10px;
		border-bottom: 1px solid #ededed;
		color: #222;
		-webkit-transition: all 0.1s ease-out 0s;
		-moz-transition: all 0.1s ease-out 0s;
		-ms-transition: all 0.1s ease-out 0s;
		-o-transition: all 0.1s ease-out 0s;
		transition: all 0.1s ease-out 0s;
	}
	.offcanvas_main_menu li a:hover {
		color: #2b70fa;
	}
	.offcanvas_main_menu li ul.sub-menu {
		padding-left: 20px;
	}

	.offcanvas_footer {
		padding-bottom: 50px;
		text-align: center;
	}
	.offcanvas_footer span a {
		font-size: 14px;
		color: #222;
		-webkit-transition: all 0.1s ease-out 0s;
		-moz-transition: all 0.1s ease-out 0s;
		-ms-transition: all 0.1s ease-out 0s;
		-o-transition: all 0.1s ease-out 0s;
		transition: all 0.1s ease-out 0s;
	}
	.offcanvas_footer span a:hover {
		color: #2b70fa;
	}

	.offcanvas_menu_wrapper.active .canvas_close {
		opacity: 1;
		visibility: visible;
	}

	.canvas_close {
		position: absolute;
		top: 10px;
		right: -50px;
		opacity: 0;
		visibility: hidden;
		transition: all linear 0.1s;
	}
	.canvas_close a {
		font-size: 18px;
		text-transform: uppercase;
		font-weight: 500;
		width: 40px;
		height: 40px;
		display: block;
		text-align: center;
		line-height: 40px;
		border: 1px solid #2b70fa;
		border-radius: 10px;
		background: #2b70fa;
		color: #fff;
		-webkit-transition: all 0.1s ease-out 0s;
		-moz-transition: all 0.1s ease-out 0s;
		-ms-transition: all 0.1s ease-out 0s;
		-o-transition: all 0.1s ease-out 0s;
		transition: all 0.1s ease-out 0s;
	}
	.canvas_close a:hover {
		background: #2b70fa;
		border-color: #2b70fa;
		color: #fff;
	}

	.canvas_open a {
		font-size: 26px;
		width: 50px;
		height: 42px;
		display: block;
		line-height: 39px;
		text-align: center;
		border: 1px solid #232323;
		color: #222;
		-webkit-transition: all 0.1s ease-out 0s;
		-moz-transition: all 0.1s ease-out 0s;
		-ms-transition: all 0.1s ease-out 0s;
		-o-transition: all 0.1s ease-out 0s;
		transition: all 0.1s ease-out 0s;
	}
	.canvas_open a:hover {
		color: #2b70fa;
		border-color: #2b70fa;
	}

	.offcanvas-social {
		margin-bottom: 40px;
		margin-top: 40px;
	}
	.offcanvas-social ul li {
		display: inline-block;
	}
	.offcanvas-social ul li a {
		display: block;
		height: 40px;
		width: 40px;
		text-align: center;
		line-height: 38px;
		color: #2b70fa;
		border: 1px solid #eaeaea;
		border-radius: 50%;
		margin: 0 5px;
		-webkit-transition: all 0.1s ease-out 0s;
		-moz-transition: all 0.1s ease-out 0s;
		-ms-transition: all 0.1s ease-out 0s;
		-o-transition: all 0.1s ease-out 0s;
		transition: all 0.1s ease-out 0s;
	}
	.offcanvas-social ul li a:hover {
		background: #2b70fa;
		border-color: #2b70fa;
		color: #fff;
	}
	.offcanvas_main_menu li ul.sub-menu {
		padding-left: 20px;
		overflow: hidden;
		transition: all linear 0.4s;
	}

	.mb-1 {
		margin-bottom: 1rem !important;
	}

	.mr-2 {
		margin-right: 2rem !important;
	}

	.mb-40 {
		margin-bottom: 40px;
	}
`;
