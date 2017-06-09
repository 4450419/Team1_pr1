	jQuery(document).ready(function($) {
			// Клик на элемент по которому и будет совершаться 
			// действие открытие и закрытие sidebar
			$('#nav-btn').click(function(e) {
				// Класс sidebar
				var sidebar = $('.content__sidebar');
				// Ширина sidebar
				var sidebarWidth = $('.content__sidebar').width();
				// Добавляем класс active
				$('.main-content, .content__main').addClass('active');

				// Проверяем, если в sidebar свойство left не равна ширины его то выполняються 
				// следующие действия
				if (sidebar.css('left') != sidebarWidth) {
					// Добавляем ему класс active
					sidebar.addClass('active');

					var firstClick = true;

					// Скрипт который будет закрывать sidebar при клике на любое место
					$(document).bind('click.myEvent', function(e) {
						if (!firstClick && $(e.target).closest('.content__sidebar').length == 0) {
							// Удаляем класс active
							sidebar.removeClass('active');
							// Удаляем класс active
							$('.main-content, .content__main').removeClass('active');
							$(document).unbind('click.myEvent');
							$('#nav-btn').removeClass('active');
						}
						firstClick = false;
					});
				}
				e.preventDefault();
			});

		});

	function toggleClass(el, _class) {
	  if (el && el.className && el.className.indexOf(_class) >= 0) {
	    var pattern = new RegExp('\\s*' + _class + '\\s*');
	    el.className = el.className.replace(pattern, ' ');
	  }
	  else if (el){
	    el.className = el.className + ' ' + _class;
	  }
	  else {
	    console.log("Element not found :(")
	  }
	}

	window.onload = function() {

	  var navBtn = document.getElementById('nav-btn');

	  navBtn.addEventListener('click', function() {
	    toggleClass(navBtn, 'active')
	  }, false);
	}