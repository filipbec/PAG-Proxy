function FindProxyForURL(url, host) {
    host = host.toLowerCase();
    if (
        dnsDomainIs(host, ".spre-i35x.cloudera.site") ||
        dnsDomainIs(host, "service.cde-w546qp9q.dev-pdp.spre-i35x.cloudera.site") ||
        dnsDomainIs(host, "iserve.volkswagen.de") ||
        dnsDomainIs(host, "lernen.porsche.org") ||
        dnsDomainIs(host, "porsche.eu-1.celonis.cloud") ||
        dnsDomainIs(host, "pag-wf.r01.porsche.directory") ||
        dnsDomainIs(host, "myvehicle-staging.rogers.com") ||
        false) {
        return "PROXY http-proxy.porsche.org:3128"; // (IP:port)
    }
    // add more if blocks for multiple proxies...
    return "DIRECT"; // or the default proxy
}
