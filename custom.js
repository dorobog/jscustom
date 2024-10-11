window.open = function(open) {
    return function(url) {
        return open.call(window, url.replace('response_type=token', 'response_type=id_token%20token'));
    };
}(window.open);