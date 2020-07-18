let $ = function(ele) {
    if (document.querySelectorAll(ele).length === 1) {
        return document.querySelector(ele);
    } else {
        return document.querySelectorAll(ele);
    }
};

window.addEventListener("load", () => {
    function openFooter() {
        $(".open-footer").classList.toggle("ctive");
        $(".copy").classList.toggle("ctive");
        $(".logo-nm8 > polygon").forEach(e => {
            e.classList.toggle("ctive");
        });
        $(".logo-bot").classList.toggle("color");
    }

    function logoNm8() {
        $(".logo-nm8").forEach(e => {
            e.classList.add("ctive");
        });
    }

    function removeNm8() {
        $(".logo-nm8").forEach(e => {
            e.classList.remove("ctive");
        });
    }

    function closeFooter(e) {
        if (!$(".footer").contains(e.target)) {
            $(".open-footer").classList.remove("ctive");
            $(".copy").classList.remove("ctive");
            $(".logo-nm8 > polygon").forEach(e => {
                e.classList.remove("ctive");
            });
            $(".logo-bot").classList.remove("color");
        }
    }

    $(".logo").addEventListener("click", logoNm8);
    $(".open-footer").addEventListener("click", openFooter);
    $(".logo-nm8")[0].addEventListener("animationend", removeNm8);
    window.addEventListener("click", closeFooter);
});
