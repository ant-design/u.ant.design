# URL shortener

To generate short URL which is to use in warnings and so on.

## Usage

Git clone this repo to your local, and run following command:

```bash
> npm run generate https://www.alipay.com

https://www.alipay.com ==shorten=> http://u.ant.design/987c5dc

URLs had been shortened, please commit and push it to GitHub!
```

To generate a link with a specific name, specify the name after the link:
```bash
> npm run generate https://www.example.com Example Name

https://www.example.com ==shorten=> http://u.ant.design/example-name

URLs had been shortened, please commit and push it to GitHub!
```

## Build Your Own URL Shortener

You can fork this repo, and edit CNAME file with your own domain name.

## License

MIT
