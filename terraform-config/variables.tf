variable "project_id" {
  type        = string
  default     = "primeval-argon-465014-s8" # change to your project ID
}

variable "cluster_name" {
  type    = string
  default = "pipeline-cluster"
}

variable "region" {
  type    = string
  default = "us-central1"
}

variable "zone" {
  type    = string
  default = "us-central1-a"
}

variable "node_count" {
  type    = number
  default = 2
}

variable "node_machine_type" {
  type    = string
  default = "e2-medium"
}
