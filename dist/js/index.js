let $ = function(ele) {
    if (document.querySelectorAll(ele).length === 1) {
        return document.querySelector(ele);
    } else {
        return document.querySelectorAll(ele);
    }
};

    class chngingText {
        constructor() {
            this.r = [];
            this.chngeText = null;
        }

        colorBlck() {
            $(".spn1").forEach(e => {
                e.classList.remove("ctive");
            });

            $(".spn2").forEach(e => {
                e.classList.remove("ctive");
            });
        }

        chngeStyle() {
            while (this.r.length < 8) {
                let n = Math.floor(Math.random() * 19);
                if (this.r.indexOf(n) === -1) this.r.push(n);
            }
            this.r.forEach(e => {
                $(".spn1")[e].classList.toggle("ctive");
            });
            this.r.forEach(e => {
                $(".spn2")[e].classList.toggle("ctive");
            });
            this.r = [];
        }

        stop() {
            clearInterval(this.chngeText);
            this.colorBlck();
            this.r = [];
        }
        ply() {
            this.chngeText = this.chngeText = setInterval(() => {
                this.chngeStyle();
            }, 5000);
        }
    }

    function convSpn() {
        let spnEle = $(".shwcse-phrse h1")
            .textContent.split("")
            .map(e => {
                return `<div class="title-spns"><span class="spn1">${e}</span><span class="spn2">${e}</span><span class="spn3">${e}</span></div>`;
            });

        $(
            ".shwcse-phrse h1"
        ).innerHTML = `<div class="shwcs-title">${spnEle.join("")}</div>`;

        $(".spn3").forEach((e, i, es) => {
            if (e.textContent === " ") {
                e.innerHTML = ".";
            }
        });

        let rndomNum = [];

        while (rndomNum.length < 19) {
            let n = Math.floor(Math.random() * 19);
            if (rndomNum.indexOf(n) === -1) rndomNum.push(n);
        }

        rndomNum.forEach((e, i, es) => {
            if (i < 8) {
                $(".spn1")[e].classList.add("spn1-g1");
                $(".spn2")[e].classList.add("spn2-g1");
            } else {
                $(".spn1")[e].classList.add("spn1-g2");
                $(".spn2")[e].classList.add("spn2-g2");
            }
        });
    }

    function rndomStyle() {
        let r = [];
        while (r.length < 9) {
            let n = Math.floor(Math.random() * 19);
            if (r.indexOf(n) === -1) r.push(n);
        }
        r.forEach(e => {
            $(".spn1")[e].classList.toggle("ctive");
        });
        r.forEach(e => {
            $(".spn2")[e].classList.toggle("ctive");
        });
    }

    function intro() {
        chngetext.colorBlck();
        chngetext.ply();
        svgNm8();
    }

    function svgDely() {
        $(".left-svg > path").forEach(e => {
            e.style.transitionDelay = Math.random() * 0.5 + "s";
        });
        $(".right-svg > path").forEach(e => {
            e.style.transitionDelay = Math.random() * 0.5 + "s";
        });
        $(".icons-svg").forEach(e => {
            e.style.transitionDelay = Math.random() * 0.5 + "s";
        });
    }

    function svgIconsIn() {
        $(".icons-svg").forEach(e => {
            e.classList.toggle("ctive");
        });
    }

    function svgLines() {
        setTimeout(() => {
            $(".left-svg > path").forEach(e => {
                e.classList.toggle("ctive");
            });
            $(".right-svg > path").forEach(e => {
                e.classList.toggle("ctive");
            });
        }, 200);
    }

    function svgNm8() {
        svgIconsIn();
        svgLines();
    }

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

    function logoClick() {
        chngetext.stop();
        chngetext.ply();
        logoNm8();
    }

    function home() {
        $(".shwcse-phrse").classList.toggle("ctive");
        $(".pltform").classList.toggle("ctive");
        $(".sm-icons > a").forEach(e => {
            e.style.transitionDelay = Math.random() * 0.3 + "s";
            e.classList.toggle("ctive");
        });
        $(".shwcse").classList.toggle("ctive");
        svgNm8();
    }

    function about() {
        $(".bout-pge").classList.toggle("ctive");
        $(".bout-pge .pge-title").classList.toggle("ctive");
        $(".bout-pge .title-line").forEach(e => {
            e.classList.toggle("ctive");
        });
        $(".bout-pge .page-section-title").forEach(e => {
            e.classList.toggle("ctive");
        });

        $(".bout-pge .appear").forEach(e => {
            e.classList.toggle("ctive");
        });
    }

    function works() {
        $(".works-page").classList.toggle("ctive");
        $(".works-page .pge-title").classList.toggle("ctive");
        $(".works-page .title-line").forEach(e => {
            e.classList.toggle("ctive");
        });
        $(".works-page .appear").forEach(e => {
            e.classList.toggle("ctive");
        });
    }

    function contact() {
        $(".contact-page").classList.toggle("ctive");
        $(".contact-page .pge-title").classList.toggle("ctive");
        $(".contact-page .title-line").forEach(e => {
            e.classList.toggle("ctive");
        });
        $(".contact-page .appear").forEach(e => {
            e.classList.toggle("ctive");
        });
    }

    convSpn();
    rndomStyle();
    svgDely();

    let chngetext = new chngingText();
    let current = {
        home: true,
        about: false,
        works: false,
        contact: false
    };

    $(".letsGo").addEventListener("animationend", intro);
    $(".open-footer").addEventListener("click", openFooter);
    $(".logo-nm8")[0].addEventListener("animationend", removeNm8);
    $(".ction-icons > div").forEach((e, i) => {
        e.addEventListener("click", event => {
            if (e.contains(event.target)) {
                $(".under").forEach((e2, i2) => {
                    if (i2 === i) {
                        e2.classList.add("ctive");
                    } else {
                        e2.classList.remove("ctive");
                    }
                });
            }
        });
    });
    $(".logo").addEventListener("click", logoClick);
    window.addEventListener("click", closeFooter);

    $(".home").addEventListener("click", e => {
        if (!current.home) {
            home();
            chngetext.ply();
        }

        if (current.about) {
            about();
        } else if (current.works) {
            works();
        } else if (current.contact) {
            contact();
        }

        current = {
            home: true,
            about: false,
            works: false,
            contact: false
        };
    });

    $(".about").addEventListener("click", () => {
        if (!current.about) {
            about();
            chngetext.stop();
        }

        if (current.home) {
            home();
        } else if (current.works) {
            works();
        } else if (current.contact) {
            contact();
        }

        current = {
            home: false,
            about: true,
            works: false,
            contact: false
        };
    });

    $(".works").addEventListener("click", () => {
        if (!current.works) {
            works();
            chngetext.stop();
        }

        if (current.home) {
            home();
        } else if (current.about) {
            about();
        } else if (current.contact) {
            contact();
        }

        current = {
            home: false,
            about: false,
            works: true,
            contact: false
        };
    });

    $(".contct").addEventListener("click", () => {
        if (!current.contact) {
            contact();
            chngetext.stop();
        }

        if (current.home) {
            home();
        } else if (current.about) {
            about();
        } else if (current.works) {
            works();
        }

        current = {
            home: false,
            about: false,
            works: false,
            contact: true
        };
    });

    $(".logo").addEventListener("click", e => {
        if (!current.home) {
            home();
        }

        if (current.about) {
            about();
        } else if (current.works) {
            works();
        } else if (current.contact) {
            contact();
        }

        $(".under").forEach((e, i) => {
            if (i === 0) {
                e.classList.add("ctive");
            } else {
                e.classList.remove("ctive");
            }
        });

        current = {
            home: true,
            about: false,
            works: false,
            contact: false
        };
    });

    $(".letsGo").addEventListener("click", () => {
        if (!current.contact) {
            contact();
            chngetext.stop();
        }

        if (current.home) {
            home();
        } else if (current.about) {
            about();
        } else if (current.works) {
            works();
        }

        $(".under").forEach((e, i) => {
            if (i === 3) {
                e.classList.add("ctive");
            } else {
                e.classList.remove("ctive");
            }
        });

        current = {
            home: false,
            about: false,
            works: false,
            contact: true
        };
    });

    $(".projects-details").addEventListener("click", () => {
        if (!current.contact) {
            contact();
            chngetext.stop();
        }

        if (current.home) {
            home();
        } else if (current.about) {
            about();
        } else if (current.works) {
            works();
        }

        $(".under").forEach((e, i) => {
            if (i === 3) {
                e.classList.add("ctive");
            } else {
                e.classList.remove("ctive");
            }
        });

        current = {
            home: false,
            about: false,
            works: false,
            contact: true
        };
    });

    $(".contact-form").addEventListener("submit", event => {
        $(".form-action").forEach((e, i) => {
            let filtered = e.value
                .split("")
                .filter(e => e !== " ")
                .join("");
            if (filtered === "") {
                event.preventDefault();
                $(".form-error")[i].innerHTML = `Your ${e.getAttribute(
                    "name"
                )} is required`;
            } else {
                if (i === 1) {
                    let regex = /\S+@\S+\.\S+/g;
                    if (regex.test(e.value)) {
                        $(".form-error")[i].innerHTML = " ";
                    } else {
                        event.preventDefault();
                        $(".form-error")[i].innerHTML =
                            "Please put a valid email address";
                    }
                } else {
                    $(".form-error")[i].innerHTML = " ";
                }
            }
        });
    });
