resource "google_container_cluster" "primary" {
  name               = var.cluster_name
  location           = var.zone
  initial_node_count = var.node_count

  node_config {
    machine_type = var.node_machine_type
  }
}

provider "kubernetes" {
  host                   = "https://${google_container_cluster.primary.endpoint}"
  token                  = data.google_client_config.default.access_token
  cluster_ca_certificate = base64decode(google_container_cluster.primary.master_auth[0].cluster_ca_certificate)
}

data "google_client_config" "default" {}
