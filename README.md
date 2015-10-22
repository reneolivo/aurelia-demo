# Aurelia Test App

To run the project use:

```
docker-compose build
docker-compose run --rm aureliatestapp jspm install
docker-compose run --rm aureliatestapp npm install
docker-compose run --rm --service-ports aureliatestapp gulp watch
```

And open `http://localhost:9000` in your browser.
