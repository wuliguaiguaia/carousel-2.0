let $slide = $(slide),
    $imgs = $("#slide img"),
    len = $imgs.length,
    current,
    timer;

init();
fakeImg();

$(wrapper).on("mouseenter", () => {
    clearInterval(timer);
}).on("mouseleave", () => {
    timer = setInterval(() => {
        goSlide(current + 1)
    }, 2000);
}).mouseleave();

$(button).on("click", "button", (e) => {
    let $btn = $(e.currentTarget);
    let index = $btn.index();
    goSlide(index);

});

$(previous).on("click", () => {
    goSlide(current - 1);
})
$(next).on("click", () => {
    goSlide(current + 1);
})







































function init() {
    timer = null;
    current = 0;
    $slide.css("transform", "translateX(-300px)");
}

function goSlide(index) {
    if (index === len) {
        index = 0
    } else if (index < 0) {
        index = len - 1
    }

    if (current === len - 1 && index === 0) {
        console.log("最后一张去第一张");
        $slide.css("transform", `translateX(${-(len + 1) * 300}px)`).one("transitionend", function () {
            $slide.hide().offset()
            $slide.css("transform", "translateX(-300px)").show();
        })

    } else if (current === 0 && index === len - 1) {
        console.log("第一张去最后一张");
        $slide.css("transform", "translateX(0px)").one("transitionend", function () {
            $slide.hide().offset()
            $slide.css("transform", `translateX(${-len * 300}px)`).show();
        })
    } else {
        console.log("normal")
        $slide.css("transform", `translateX(${-(index + 1) * 300}px)`)
    }
    current = index;
}


function fakeImg() {
    let first = $imgs.first().clone();
    let last = $imgs.last().clone();
    $slide.append(first).prepend(last)
}
