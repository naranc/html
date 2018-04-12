     $(function(){
				//顶部搜索栏滑动背景变色
				window.addEventListener("touchend", function(e) {
					scrollFoo()
				});

				function scrollFoo() {
					var el = $(".search");
					var endY = $(window).scrollTop();
					if(Math.abs(endY) <= 4) {
						el.attr('class', 'search');
					} else {
						el.addClass('search-scroll')
					}
				};
	})