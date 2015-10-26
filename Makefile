all:
	babel lib --out-dir dist
	lessc lib/medium.less > dist/medium.css
	webpack -p
clean:
	rm dist/*
	rm example/bundle*
