
$(document).ready(function () {
  const controller = new ScrollMagic.Controller()

  const boxTimeline = new TimelineMax()
  boxTimeline.to('#box', 1,{scale: 3})

  const scene = new ScrollMagic.Scene({
    triggerElement: "#start",
    triggerHook: 0.1
  })
  .setPin('#box') //this is the element that will be pinned
  .setTween(boxTimeline)
  .addIndicators({
    name: 'move thing',
    colorTrigger: 'black',
    indent: 100,
    colorStart: 'red',
    colorEnd: 'red'
  })
  .addTo(controller)


})
