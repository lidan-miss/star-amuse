$(function(){
	$('#main').fullpage({
		sectionsColor: ['', '', '', '#373737'],
		anchors: ['page1', 'page2', 'page3', 'page4'],
		menu: '#menu'
	});
	$('.tab-content1').addClass('initialed').find('.show-wrap').slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		infinite: false
	  });
	$('.page3-tab li').click(function(){
		var $this = $(this);
		if($this.hasClass('current')){
			return;
		}
		var index = $this.index();
		var $content = $('.page3-tab-content .tab-content').eq(index);
		$this.addClass('current').siblings().removeClass('current');
		$content.show().siblings().hide();
		if(!$content.hasClass('initialed')){
			$content.addClass('initialed').find('.show-wrap').slick({
				slidesToShow: 4,
				slidesToScroll: 4,
				infinite: false
			})
		}
	})
})