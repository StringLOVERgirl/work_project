let header = document.querySelector('header');


          export  function animateHeader(){
                let prevScroll = window.scrollY
                let isAnimating = false
                console.log(header)


                function toggleHeader() {

                    if (isAnimating) {
                        prevScroll = window.scrollY
                        return
                    }
                    if (window.scrollY > prevScroll
                        && !header.classList.contains('headerOff')) {
                        isAnimating = true
                        header.classList.remove('headerOn')
                        header.classList.add('headerOff')
                        // animating()
                    }  if (window.scrollY <= prevScroll) {

                        if 
                        // убрано else 
                        (header.classList.contains('headerOff')) {
                            header.classList.remove('headerOff')
                            header.classList.add('headerOn')
                            isAnimating = true
                            // animating()
                        }
                    }
                    if (window.scrollY == 0){
                        if (!header.classList.contains('headerOff')){
                        header.classList.add('headerOn')}

                    } // новый блок иф
                    prevScroll = window.scrollY
                }

                window.addEventListener('scroll', toggleHeader)
                header.addEventListener('animationend', () => {
                    isAnimating = false;
                });
            }