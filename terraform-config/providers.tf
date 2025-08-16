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
    helm = {
      source  = "hashicorp/helm"
      version = "2.12.1"
    }
  }
  backend "local" {
    path = "./terraform.tfstate"
  }
}

provider "google" {
  project = "primeval-argon-465014-s8" # change to your project ID
  region  = "us-central1"
  zone    = "us-central1-a"
}





provider "helm" {
  kubernetes {
    host                   = "https://${google_container_cluster.primary.endpoint}"
    token                  = data.google_client_config.default.access_token
    cluster_ca_certificate = base64decode(google_container_cluster.primary.master_auth.0.cluster_ca_certificate)
  }
}
