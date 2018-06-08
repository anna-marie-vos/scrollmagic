
$(document).ready(function () {
  const controller = new ScrollMagic.Controller();
  const scene = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 300})
    .setPin("#pin1")
    .addIndicators({name: "1 (duration: 300)"}) // add indicators (requires plugin)
    .addTo(controller);

  // const boxTimeline = new TimelineMax()
  // boxTimeline.to('#box', 6, {x: -100, y: 600})
  //   .to('#box', 6, {scale: 8}, '-=6')

})

// <div class="scrollContent">
// 	<section id="titlechart">
// 		<script>
// 			// init controller
// 			var controller = new ScrollMagic.Controller();
// 		</script>
// 	</section>
// 	<section class="demo">
// 		<div class="spacer s2"></div>
// 		<div id="trigger1" class="spacer s0"></div>
// 		<div id="pin1" class="box2 blue">
// 			<p>Stay where you are (at least for a while).</p>
// 			<a href="#" class="viewsource">view source</a>
// 		</div>
// 		<div class="spacer s2"></div>
// 		<script>
// 			$(function () { // wait for document ready
// 				// build scene
// 				var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 300})
// 								.setPin("#pin1")
// 								.addIndicators({name: "1 (duration: 300)"}) // add indicators (requires plugin)
// 								.addTo(controller);
// 			});
// 		</script>
// 	</section>
// 	<section class="demo">
// 		<div class="spacer s2"></div>
// 		<div id="trigger2" class="spacer s0"></div>
// 		<div id="pin2" class="box2 blue">
// 			<p>Take me with you!</p>
// 			<a href="#" class="viewsource">view source</a>
// 		</div>
// 		<div class="spacer s2"></div>
// 		<script>
// 			$(function () { // wait for document ready
// 				// build scene
// 				var scene = new ScrollMagic.Scene({triggerElement: "#pin2"})
// 								.setPin("#pin2")
// 								.addIndicators({name: "2 (duration: 0)"}) // add indicators (requires plugin)
// 								.addTo(controller);
// 			});
// 		</script>
// 	</section>
// 	<div class="spacer s_viewport"></div>
// </div>
