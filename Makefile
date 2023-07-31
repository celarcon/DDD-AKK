.phony: build

start:
	- docker compose up $(ARGS)

start-frontend:
	- make start ARGS=frontend

start-backend:
	- make start ARGS=backend

stop:
	- docker compose down
