var Body = {
    setColor: function (color) {
        document.querySelector('body').style.color = color;
    }
    ,
    setBackgroundColor: function (color) {
        document.querySelector('body').style.backgroundColor = color;
    }
}

var Links = {
    setColor: function (color) {
        var alist = document.querySelectorAll('a');
        for (var i = 0; i < alist.length; i++)
            alist[i].style.color = color;
    }
}


function nightDayHandler(self) {
    if (self.value === 'night') {
        Body.setBackgroundColor('black');
        Body.setColor('white');
        Links.setColor('powderblue');
        self.value = 'day';
    }
    else {
        Body.setBackgroundColor('white');
        Body.setColor('black');
        Links.setColor('blue');
        self.value = 'night';
    }
}