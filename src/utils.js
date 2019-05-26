export function getObjectUrl() {
    let hash = window.location.hash.substring(1)
    let object_url = ( hash === '') ? null : hash.split("&").reduce(function(prev, curr, i, arr) {
        let p = curr.split('=');
        prev[decodeURIComponent(p[0])] = decodeURIComponent(p[1]);
        return prev;
    }, {});
    return object_url
}