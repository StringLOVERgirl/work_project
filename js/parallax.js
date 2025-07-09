        
        let layer1 = document.querySelector(".layer1")
        let layer3 = document.querySelector(".layer3")


        document.documentElement.style.setProperty('--bg_position', '10%')


        let windowHeight = window.innerHeight // высота окна

        let maxScroll = document.documentElement.scrollHeight - windowHeight
        // насколько можно прокрутить вниз сколько пикселей прокрутки доступно
        // (высота страницы минус высота окна)
        let scrolled = 0 // насколько проскролена страница

        const layer1AbsoluteTop = layer1.getBoundingClientRect().top + window.scrollY + 100;
        // top возвращает расстояние от верхней границы окна до начала 
        //   вернуть может отрицательное если элементы выше (расстояне 
        // в пикселях от верха экрана д верха элемента)
        // + проскроленное - либо 0 если сначала страницы либо проскроленное 
        // коментсирует если мы не в начале страницы и топ возьмется несначала
        // тут мы узнаем расстояние в пикселях от начала странцы до начала элемента
        const scrolldistanceToLayer1 = layer1AbsoluteTop - windowHeight;

        // расстояние от верхней границы ОНКА до элемента (будет уменьшаться
        // а скролл компенсировать это уменьшение)

        let maxScrollAfterLayer1 = maxScroll - scrolldistanceToLayer1
        let stepLayer1 = maxScrollAfterLayer1 / 10
        // console.log(windowHeight,maxScroll,scrolldistanceToLayer1,
        //  maxScrollAfterLayer1,
        //  stepLayer1)
        const computedStyle = getComputedStyle(layer1);
        // получаес стили - самый надежнй способо получить

      export   function parallax(e) {
            scrolled = window.scrollY
            // console.log(scrolled, computedStyle.backgroundPositionY)
            if (scrolled >= scrolldistanceToLayer1 
            ) {
                // let x = (scrolled-scrolldistanceToLayer1)/stepLayer1
                // console.log(x)
                let value = (scrolled-scrolldistanceToLayer1)/stepLayer1*1.5 + 10 + '%'
                let value2 = (scrolled-scrolldistanceToLayer1)/stepLayer1*1.5 + 30 + '%'

            document.documentElement.style.setProperty('--bg_position', value)
            document.documentElement.style.setProperty('--bg_position2', value2)
        }
        }




