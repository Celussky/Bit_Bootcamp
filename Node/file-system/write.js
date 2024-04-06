const fs = require('fs');

let textoArchivo = `
Nov 17 04:19:52 cylon3 systemd: Stopping The Apache HTTP Server...
Nov 17 04:19:53 cylon3 systemd: Stopped The Apache HTTP Server.
Nov 17 04:19:54 cylon3 systemd: Starting The Apache HTTP Server...
Nov 17 04:19:54 cylon3 httpd: AH00558: httpd: Could not reliably determine the server's fully qualified domain name, using fe80::4637:e6ff:fedd:fa27. Set the 'ServerName' directive globally to suppress this message
Nov 17 04:19:54 cylon3 systemd: Started The Apache HTTP Server.
Nov 17 04:20:41 cylon3 yum[26424]: Installed: php-imap-7.3.24-1.el7.remi.x86_64
Nov 17 04:20:42 cylon3 yum[26424]: Installed: php-ldap-7.3.24-1.el7.remi.x86_64
Nov 17 04:20:44 cylon3 yum[26424]: Installed: php-mbstring-7.3.24-1.el7.remi.x86_64
Nov 17 04:20:52 cylon3 systemd: Stopping The Apache HTTP Server...
Nov 17 04:20:53 cylon3 systemd: Stopped The Apache HTTP Server.
Nov 17 04:20:53 cylon3 systemd: Starting The Apache HTTP Server...
Nov 17 04:20:53 cylon3 httpd: AH00558: httpd: Could not reliably determine the server's fully qualified domain name, using fe80::4637:e6ff:fedd:fa27. Set the 'ServerName' directive globally to suppress this message
Nov 17 04:20:53 cylon3 systemd: Started The Apache HTTP Server.
Nov 17 05:01:01 cylon3 systemd: Started Session 71 of user root.
Nov 17 06:01:01 cylon3 systemd: Started Session 72 of user root.
Nov 17 07:01:01 cylon3 systemd: Started Session 73 of user root.
Nov 17 07:20:32 cylon3 systemd: Starting Cleanup of Temporary Directories...
`


fs.writeFile('./logs.txt', textoArchivo, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Archivo creado satisfactoriamente");
    }
})