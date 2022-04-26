function FindProxyForURL(url, host) {
    host = host.toLowerCase();
    if (
        dnsDomainIs(host, ".spre-i35x.cloudera.site") ||
        dnsDomainIs(host, "lernen.porsche.org") ||
        false) {
        return "PROXY http-proxy.porsche.org:3128"; // (IP:port)
    }
    // add more if blocks for multiple proxies...
    return "DIRECT"; // or the default proxy
}
