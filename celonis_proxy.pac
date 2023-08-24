function FindProxyForURL(url, host) {
    host = host.toLowerCase();
    if (
        dnsDomainIs(host, ".spre-i35x.cloudera.site") ||
        dnsDomainIs(host, "lernen.porsche.org") ||
        dnsDomainIs(host, "porsche.eu-1.celonis.cloud") ||
        false) {
        return "PROXY http-proxy.porsche.org:3128"; // (IP:port)
    }
    if (
        dnsDomainIs(host, "myvehicle-staging.rogers.com") ||
        false) {
        return "PROXY http-proxy18.porsche.org:3128";
    }
    // add more if blocks for multiple proxies...
    return "DIRECT"; // or the default proxy
}
