PROJECT_ID = darius-332003
IMAGE_NAME = darius-ui

install: install-gcloud
# gcloud auth login
# gcloud config set account $(account)


# https://docs.docker.com/engine/install/ubuntu/
install-docker:
	sudo apt update
	sudo apt install -y apt-transport-https ca-certificates curl gnupg lsb-release

	curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

	echo "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(shell lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

	sudo apt update
	sudo apt install -y docker-ce docker-ce-cli containerd.io
	sudo docker run hello-world

# https://cloud.google.com/sdk/docs/install#deb
install-gcloud:
	echo "deb [signed-by=/usr/share/keyrings/cloud.google.gpg] https://packages.cloud.google.com/apt cloud-sdk main" | sudo tee -a /etc/apt/sources.list.d/google-cloud-sdk.list
	sudo apt install -y apt-transport-https ca-certificates gnupg
	curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key --keyring /usr/share/keyrings/cloud.google.gpg add -
	sudo apt update && sudo apt install -y google-cloud-sdk

set-project:
	gcloud config set project $(PROJECT_ID)

build: set-project
	gcloud builds submit --config cloudbuild.yaml --timeout=60m

deploy: set-project
	gcloud app deploy --image-url="gcr.io/$(PROJECT_ID)/$(IMAGE_NAME):latest"

browse:
	gcloud app browse --project=$(PROJECT_ID)

log:
	gcloud app logs tail -s $(IMAGE_NAME)
