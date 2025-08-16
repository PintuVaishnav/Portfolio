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
