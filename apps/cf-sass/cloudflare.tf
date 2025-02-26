# https://www.youtube.com/watch?v=FmYvrxYvBP0
terraform {
  required_providers {
    cloudflare = {
      source  = "cloudflare/cloudflare"
      version = "~> 5"
    }
  }
}

provider "cloudflare" {
  api_token = var.cloudflare_api_token
}

variable "zone_id" {
  type        = string
  default     = ""
  description = "description"
}

variable "domain" {
  type        = string
  default     = ""
  description = "description"
}


# Create a DNS record
resource "cloudflare_dns_record" "www" {
  # ...
}