.phony: build

start:
	- docker compose up $(ARGS)

start-frontend:
	- make start ARGS=frontend

start-backend:
	- make start ARGS=backend

test-frontend:
	docker compose run --rm frontend npm run test:frontend $(ARGS)

test-backend:
	docker compose run --rm backend npm run test:backend $(ARGS)

test-all:
	- make test-frontend
	- make test-backend

stop:
	- docker compose down
