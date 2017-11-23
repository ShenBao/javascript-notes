

## DNS模块

DNS模块用于解析域名。resolve4方法用于IPv4环境，resolve6方法用于IPv6环境，lookup方法在以上两种环境都可以使用，返回IP地址（address）和当前环境（IPv4或IPv6）。

```javascript
var dns = require('dns');

dns.resolve4('www.pecollege.net', function (err, addresses) {
  if (err)
    console.log(err);

  console.log('addresses: ' + JSON.stringify(addresses));
});

dns.lookup('www.pecollege.net', function (err, address, family) {
  if (err)
    console.log(err);

  console.log('addresses: ' + JSON.stringify(address));
  console.log('family: ' + JSON.stringify(family));
});
```