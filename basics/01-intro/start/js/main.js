$(document).ready(function () {
	// init scrollmagic
  const controller = new ScrollMagic.Controller()
	//pin the intro
	const pinIntroScene = new ScrollMagic.Scene({
		triggerElement: '#intro',
		triggerHook: 0, //when the pin starts working
		duration: '30%'
	})
	.setPin('#intro',{
		pushFollowers: false //this pin does not push the following elements back. default is true
	})
	.addTo(controller)

	// to pin it to something else
	const pinHatToScene2 = new ScrollMagic.Scene({
		triggerElement: '#project01',
		triggerHook: 0.5
	})
		.setPin('#intro') //this is the element that will be pinned
		.addTo(controller)

	// parallax Scene
	// add a timeline
	const paralaxTimeline = new TimelineMax();
	paralaxTimeline
	.from('.content-wrapper', 0.4, {autoAlpha: 0, ease: Power0.easeNone}, 0.3)
	.from('.bcg', 2, {y: '-30%', ease:Power0.easeNone}, 0);


	const slideParallaxScene = new ScrollMagic.Scene({
		triggerElement: '.bcg-parallax',
		triggerHook: 0.85,
		duration: '100%'
	})
	.setTween(paralaxTimeline)
	.addTo(controller)

//Make all the divs appear and in the same way
	$('.project').each(function(){
		//build a Scene
		let ourScene = new ScrollMagic.Scene ({
			triggerElement: this.children[0], //triggers at image
			// duration: '80%', //ends at 80% of the full page width
			triggerHook: 0.7, // moves the trigger up or down.
			// reverse: false //animation will only happen once.
		})
		.setClassToggle(this, 'fade-in') //add class to project
		.addIndicators({
			name: 'fade scene',
			colorTrigger: 'black',
			indent: 100,
			colorStart: 'red',
			colorEnd: 'red'
		}) //loads the pluggin
		.addTo(controller)
	})

})
