(function ($) {
    new WOW().init();

    jQuery(window).load(function () {
        jQuery("#preloader").delay(100).fadeOut("slow");
        jQuery("#load").delay(100).fadeOut("slow");
    });

})(jQuery);

function setFocus(id) {
    $('#' + id).focus();
}

function triggerClick(id) {
    document.getElementById(id).click();
}

function createInfoWindowDiv(name, street, zipCode, city, country) {
    return $("<div style='height: 90px; width: 150px;'><strong>" + name + "</strong><br/>" + street + "<br/>" + zipCode + " " + city + "<br/>" + country + "</div>")[0];
}

function showFooter() {
    $('#pagefooter').show();
}

function hideFooter() {
    $('#pagefooter').hide();
}

function watchForWindowResizing(callback) {
    callback();

    $(window).on('resize', function () {
        callback();
    });
}

function scrollToElement(elementId, offsetTop, scrollContainerId) {
    if (!offsetTop) {
        offsetTop = 0;
    }

    var elementOffset = $('#' + elementId).offset().top;

    if (scrollContainerId) {
        $('#' + scrollContainerId).animate({scrollTop: elementOffset}, 500);
    } else {
        elementOffset += offsetTop;
        $('html, body').animate({scrollTop: elementOffset}, 500);
    }
}

function isSuccess(response) {
    return response.data.success === 'true';
}

function isError(response) {
    return response.data.success && response.data.success === 'false';
}

function isTrue(value) {
    return value || value === 'true';
}

function setEmptyStringForNull(text) {
    if (!text || text === null) {
        return '';
    }

    return text;
}

function getBooleanValueForString(text) {
    return text === 'true';
}

function dataURItoBlob(dataURI, fileType) {
    // convert base64/URLEncoded data component to raw binary data held in a string
    var byteString;
    if (dataURI.split(',')[0].indexOf('base64') >= 0) {
        byteString = atob(dataURI.split(',')[1]);
    } else {
        byteString = unescape(dataURI.split(',')[1]);
    }

    // separate out the mime component
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

    // write the bytes of the string to a typed array
    var ia = new Uint8Array(byteString.length);
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }

    return new Blob([ia], {type: fileType});
}

function convertImgToBase64URL(url, callback, outputFormat) {
    var img = new Image();
    img.crossOrigin = 'Anonymous';
    img.onload = function () {
        var canvas = document.createElement('CANVAS'),
                ctx = canvas.getContext('2d'), dataURL;
        canvas.height = this.height;
        canvas.width = this.width;
        ctx.drawImage(this, 0, 0);
        dataURL = canvas.toDataURL(outputFormat);
        callback(url, dataURL);
        canvas = null;
    };
    img.src = url;
}

function handleError(error, calledMethod) {
    if (error && error.data && error.data.errors) {
        console.error("An error occurred while calling the method " + calledMethod + " caused by: " + error.data.errors);
    } else {
        console.error("An error occurred while calling the method " + calledMethod);
    }
}

function showPopup(popupId) {
    $("#" + popupId).modal("show");
}

function hidePopup(popupId) {
    $("#" + popupId).modal("hide");
}

function replaceNewLineSymbols(text) {
    if (text) {
        text = text.replace(/\r?\n/g, '<br/>');
    }

    return text;
}

function fadeInImage(image, seconds) {
    if (!seconds) {
        seconds = 3;
    }

    image.style.transition = "opacity ease " + seconds + "s";
    image.style.opacity = "1";
}

function formatDate(date) {
    return moment(date).format("DD.MM.YYYY");
}

navigator.browserInfo = (function () {
    var ua = navigator.userAgent, tem,
            M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if (/trident/i.test(M[1])) {
        tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
        return 'IE ' + (tem[1] || '');
    }
    if (M[1] === 'Chrome') {
        tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
        if (tem != null)
            return tem.slice(1).join(' ').replace('OPR', 'Opera');
    }
    M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
    if ((tem = ua.match(/version\/(\d+)/i)) != null)
        M.splice(1, 1, tem[1]);

    return {'browser': M[0], 'version': M[1]};
})();