# development
run:
	npm start

# production
prod:
	@npm run build && \
		cd build && git init && \
		git remote add origin https://github.com/MuhammadMunif361/munif.ml.git && \
		git add . && git commit -m "Deployment" && \
		git push -u origin main && cd ..

push:
	git push origin
