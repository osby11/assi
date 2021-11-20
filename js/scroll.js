(function () {

      function scroller() {

            var scroll = $('div.Marquee-content'); // Sets the div with a class of scroll as a variable

            var height = scroll.height(); // Gets the height of the scroll div

            var topAdj = -height - 30;
            /* '-height' turns the height                   of the UL into a negative #, 
             * '- 50' subtracts an extra 50 pixels from the height of 
             * the div so that it moves the trail of the UL higher to 
             * the top of the div before the animation                ends
             */

            scroll.animate({
                  'top': [topAdj, 'linear']
            }, 8000, function () {
                  scroll.css('top', 80); //resets the top position of the Ul for the next cycle
                  scroller(); // Recalls the animation cycle to begin.
            });
      }

      scroller();

})();


/* global bootstrap: false */

(function () {
      'use strict'

      // Tooltip and popover demos
      document.querySelectorAll('.tooltip-demo')
            .forEach(function (tooltip) {
                  new bootstrap.Tooltip(tooltip, {
                        selector: '[data-bs-toggle="tooltip"]'
                  })
            })

      document.querySelectorAll('[data-bs-toggle="popover"]')
            .forEach(function (popover) {
                  new bootstrap.Popover(popover)
            })

      document.querySelectorAll('.toast')
            .forEach(function (toastNode) {
                  var toast = new bootstrap.Toast(toastNode, {
                        autohide: false
                  })

                  toast.show()
            })

      // Disable empty links and submit buttons
      document.querySelectorAll('[href="#"], [type="submit"]')
            .forEach(function (link) {
                  link.addEventListener('click', function (event) {
                        event.preventDefault()
                  })
            })

      function setActiveItem() {
            var hash = window.location.hash

            if (hash === '') {
                  return
            }

            var link = document.querySelector('.bd-aside a[href="' + hash + '"]')

            if (!link) {
                  return
            }

            var active = document.querySelector('.bd-aside .active')
            var parent = link.parentNode.parentNode.previousElementSibling

            link.classList.add('active')

            if (parent.classList.contains('collapsed')) {
                  parent.click()
            }

            if (!active) {
                  return
            }

            var expanded = active.parentNode.parentNode.previousElementSibling

            active.classList.remove('active')

            if (expanded && parent !== expanded) {
                  expanded.click()
            }
      }

      setActiveItem()
      window.addEventListener('hashchange', setActiveItem)
})()