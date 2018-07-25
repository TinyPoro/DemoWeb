# Mkcert

1. Cài đặt mkcert
2. 
```
brew install mkcert
brew install nss # if you use Firefox
```
3. Tạo thư mục CAROOT(có thể sửa biến mỗi trường CAROOT để thay đổi , mặc định ở `/Users/filippo/Library/Application Support/mkcert`)
```
mkcert -install
```
4. Tạo file cấu hình SSL.
```
mkcert <tên domain>
```
5. Sửa file httpd.conf
 ```
 // Bỏ comment 2 dòng này
 LoadModule ssl_module modules/mod_ssl.so

Include /Applications/MAMP/conf/apache/extra/httpd-ssl.conf
 ```
 6. Sửa file httpd-ssl.conf
 ```
 //Mime type
 AddType application/x-pem-file 	   .pem
 
 //Tìm đoạn dạng này và sửa thành 
 <VirtualHost *:443>

#   General setup for the virtual host
#DocumentRoot "/Applications/MAMP/Library/htdocs"
ServerName localhost:443
ServerAdmin you@example.com
ErrorLog "/Applications/MAMP/Library/logs/error_log"
TransferLog "/Applications/MAMP/Library/logs/access_log"

#   SSL Engine Switch:
#   Enable/Disable SSL for this virtual host.
SSLEngine on

//Thêm file cấu hình SSL
SSLCertificateFile "/Users/admin/Library/Application Support/mkcert/<tên domain>.pem"
SSLCertificateKeyFile "/Users/admin/Library/Application Support/mkcert/<tên domain>-key.pem"
 ```
