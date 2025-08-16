terraform {
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "5.31.1"
    }
    kubernetes = {
      source  = "hashicorp/kubernetes"
      version = "2.27.0"
    }
  }
  backend "local" {
    path = "./terraform.tfstate"
  }
}

provider "google" {
  project = "gentle-broker-469013-d6" # change to your project ID
  region  = "us-central1"
  zone    = "us-central1-a"
}

provider "helm" {
  kubernetes {
    host                   = "https://${google_container_cluster.primary.endpoint}"
    token                  = data.google_client_config.default.access_token
    cluster_ca_certificate = base64decode(google_container_cluster.primary.master_auth[0].cluster_ca_certificate)
    config_path = "~/.kube/config"
  }
  
}
