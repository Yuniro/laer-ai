SHELL:=/bin/bash

install:
	docker-compose -f docker-compose.dev.yml down
	docker-compose -f docker-compose.dev.yml build #--no-cache
	docker-compose -f docker-compose.dev.yml up -d
	docker logs -f react_app

clean:
	docker-compose -f docker-compose.dev.yml down
