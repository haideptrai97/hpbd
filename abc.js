function pageWidth() { return null != window.innerWidth ? window.innerWidth : null != document.body ? document.body.clientWidth : null }

function pageHeight() { return null != window.innerHeight ? window.innerHeight : null != document.body ? document.body.clientHeight : null }

function posLeft() { return void 0 !== window.pageXOffset ? window.pageXOffset : document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft ? document.body.scrollLeft : 0 }

function posTop() { return void 0 !== window.pageYOffset ? window.pageYOffset : document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop ? document.body.scrollTop : 0 }

function d2h(t) { return hD.substr(t >>> 4, 1) + hD.substr(15 & t, 1) }

function stopfire() { for (var t = firestop.length - 1; 0 <= t; t--) { clearInterval(firestop[t]); for (var e = fire[t].sp.length - 1; 0 <= e; e--) fire[t].sp[e].style.visibility = "hidden" } }

function fireworks() { new fo(50), setTimeout("new fo(50)", 750), 0 < stopafter && setTimeout("stopfire()", 6e4 * stopafter) }
var stopafter = 0,
    firestop = [],
    fire = [],
    stdDOM = document.getElementById,
    nsDOM = -1 != navigator.appName.indexOf("Netscape") && 4 == parseInt(navigator.appVersion),
    hD = "0123456789ABCDEF";
layernum = 0, piece = function(t) {
        if (this.elem = null, nsDOM) null == t ? this.elem = new Layer(1) : (this.elem = new Layer(1, t.elem), this.style.visibility = "inherit"), this.parent = t, this.style = this.elem;
        else if (stdDOM) {
            this.parent = null == t ? document.body : t.elem, this.elem = document.createElement("div");
            var e = "xLayer" + layernum++;
            this.elem.setAttribute("id", e);
            elemc = document.createTextNode(".");
            this.elem.appendChild(elemc), this.parent.appendChild(this.elem);
            this.style = this.elem.style, document.getElementById(e).style.lineHeight = "3px";
            document.getElementById(e).style.color = "#fff";
            document.getElementById(e).style.position = "absolute";
        }(window[this.elem.id] = this).ay = .1, this.type = 0
    }, piece.prototype.moveTo = function(t, e) { nsDOM ? this.elem.moveTo(t, e) : (this.style.left = t + "px", this.style.top = e + "px") }, piece.prototype.setC = function(t) { nsDOM ? this.elem.bgColor = t : this.style.backgroundColor = null == t ? "transparent" : t }, piece.prototype.fire = function(t, e, i) {
        var s = Math.random() * Math.PI * 2;
        switch (i) {
            case 1:
                var o = 2 * Math.random();
                break;
            case 2:
                o = 2;
                break;
            case 3:
                o = 2 * Math.PI - s - Math.random();
                break;
            case 4:
                o = s - Math.random();
                break;
            default:
                o = 2 * Math.random();
                .6 < Math.random() && (o = 1.5)
        }
        this.dx = o * Math.sin(s), this.dy = o * Math.cos(s) - 2, this.x = t, this.y = e, this.moveTo(t, e)
    }, piece.prototype.sCol = function(t, e, i) {
        switch (i) {
            case 1:
                this.setC("#" + t + e + "00");
                break;
            case 2:
                this.setC("#00" + t + "00");
                break;
            case 3:
                this.setC("#00" + t + e);
                break;
            case 4:
                this.setC("#" + t + "0000");
                break;
            case 5:
                this.setC("#" + t + t + "00");
                break;
            case 6:
                this.setC("#" + t + t + t);
                break;
            case 7:
                this.setC("#" + e + t + "00");
                break;
            default:
                this.setC("#" + t + e + t)
        }
    },
    piece.prototype.animate = function(t, e) {
        var i = 25 < t ? Math.random() * (200 - 5 * t) : 200 - 4 * t;
        s = d2h(i - 112);
        i < 112 && (s = d2h(i));
        this.sCol(d2h(i), s, e);
        this.dy += this.ay;
        this.x += this.dx;
        this.y += this.dy;
        let height = screen.height;
        let weight = screen.width;
        this.moveTo(this.x, this.y);
    }, 
    fo = function(t) {
        for (this.id = "fo" + fo.count++, this.sp = new Array, i = 0; i < t; i++) this.sp[i] = new piece, nsDOM ? (this.sp[i].style.clip.top = 0, this.sp[i].style.clip.left = 0, this.sp[i].style.clip.bottom = 3, this.sp[i].style.clip.right = 3) : this.sp[i].style.clip = "rect(0 3 3 0)", this.sp[i].style.visibility = "visible";
        this.step = 0, window[this.id] = this, fire.push(this), firestop.push(setInterval("window." + this.id + ".animate()", 15))
    }, 
    fo.count = 0, fo.prototype.animate = function() {
        if (55 < this.step && (this.step = 0), 0 == this.step) {
            var t = posLeft() + 50 + Math.random() * (pageWidth() - 200),
                e = posTop() + 50 + Math.random() * (pageHeight() - 250),
                s = Math.floor(5 * Math.random());
            for (this.cl = Math.floor(8 * Math.random()), i = 0; i < this.sp.length; i++) this.sp[i].fire(t, e, s)
        }
        for (this.step++, i = 0; i < this.sp.length; i++) this.sp[i].animate(this.step, this.cl)
    }, window.onload = fireworks